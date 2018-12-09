/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/inventorypart              ->  index
 * POST    /api/inventorypart              ->  create
 * GET     /api/inventorypart/:id          ->  show
 * PUT     /api/inventorypart/:id          ->  upsert
 * PATCH   /api/inventorypart/:id          ->  patch
 * DELETE  /api/inventorypart/:id          ->  destroy
 */

import { applyPatch } from 'fast-json-patch';
import { InventoryPart } from '../../sqldb';

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
        if(entity) {
            return res.status(statusCode).json(entity);
        }
        return null;
    };
}

function patchUpdates(patches) {
    return function(entity) {
        try {
            applyPatch(entity, patches, /*validate*/ true);
        } catch(err) {
            return Promise.reject(err);
        }

        return entity.save();
    };
}

function removeEntity(res) {
    return function(entity) {
        if(entity) {
            return entity.destroy()
                .then(() => res.status(204).end());
        }
    };
}

function handleEntityNotFound(res) {
    return function(entity) {
        if(!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    };
}

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        res.status(statusCode).send(err);
    };
}

// Gets a list of InventoryPart
export function index(req, res) {
    return InventoryPart.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single InventoryPart from the DB
export function show(req, res) {
    return InventoryPart.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new InventoryPart in the DB
export function create(req, res) {
    return InventoryPart.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given InventoryPart in the DB at the specified ID
export function upsert(req, res) {


    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }

    return InventoryPart.findById(req.params.id).then(item => {
        if (item) {
            InventoryPart.update(
                req.body,
                {
                    where: { id: req.params.id },
                    logging: console.log
                }
            )
                .then(respondWithResult(res))
                .catch(handleError(res));
        } else {
            InventoryPart.create(
                req.body,
                {
                    where: { id: req.params.id },
                    logging: console.log
                }
            )
                .then(respondWithResult(res))
                .catch(handleError(res));
        }
    });
/*

    if(req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }
    return InventoryPart.upsert(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(respondWithResult(res))
        .catch(handleError(res));
        //*/
}

// Updates an existing InventoryPart in the DB
export function patch(req, res) {
    if(req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }
    return InventoryPart.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a InventoryPart from the DB
export function destroy(req, res) {
    return InventoryPart.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}

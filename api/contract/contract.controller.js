/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/contract              ->  index
 * POST    /api/contract              ->  create
 * GET     /api/contract/:id          ->  show
 * PUT     /api/contract/:id          ->  upsert
 * PATCH   /api/contract/:id          ->  patch
 * DELETE  /api/contract/:id          ->  destroy
 */

import { applyPatch } from 'fast-json-patch';
import { Contract } from '../../sqldb';

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

// Gets a list of Contract
export function index(req, res) {
    return Contract.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single Contract from the DB
export function show(req, res) {
    return Contract.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function showItemsOfProperty(req, res) {
    return Contract.findAll(
        {
            where: {
                idProperty: req.params.idProperty
            }
        }
    )
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Contract in the DB
export function create(req, res) {
    return Contract.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Contract in the DB at the specified ID
export function upsert(req, res) {

    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }

    return Contract.findById(req.params.id).then(item => {
        if (item) {
            Contract.update(
                req.body,
                {
                    where: { id: req.params.id },
                    logging: console.log
                }
            )
                .then(respondWithResult(res))
                .catch(handleError(res));
        } else {
            Contract.create(
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
    return Contract.upsert(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(respondWithResult(res))
        .catch(handleError(res));

        //*/
}

// Updates an existing Contract in the DB
export function patch(req, res) {
    if(req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }
    return Contract.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Contract from the DB
export function destroy(req, res) {
    return Contract.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}

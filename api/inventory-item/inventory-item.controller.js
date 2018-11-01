/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/inventoryitem              ->  index
 * POST    /api/inventoryitem              ->  create
 * GET     /api/inventoryitem/:id          ->  show
 * PUT     /api/inventoryitem/:id          ->  upsert
 * PATCH   /api/inventoryitem/:id          ->  patch
 * DELETE  /api/inventoryitem/:id          ->  destroy
 */

import { applyPatch } from 'fast-json-patch';
import { InventoryItem } from '../../sqldb';

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

// Gets a list of InventoryItem
export function index(req, res) {
    return InventoryItem.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single InventoryItem from the DB
export function show(req, res) {
    return InventoryItem.find({
        where: {
            _id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new InventoryItem in the DB
export function create(req, res) {
    return InventoryItem.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given InventoryItem in the DB at the specified ID
export function upsert(req, res) {
    if(req.body._id) {
        Reflect.deleteProperty(req.body, '_id');
    }
    return InventoryItem.upsert(req.body, {
        where: {
            _id: req.params.id
        }
    })
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing InventoryItem in the DB
export function patch(req, res) {
    if(req.body._id) {
        Reflect.deleteProperty(req.body, '_id');
    }
    return InventoryItem.find({
        where: {
            _id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a InventoryItem from the DB
export function destroy(req, res) {
    return InventoryItem.find({
        where: {
            _id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}

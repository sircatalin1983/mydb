/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/propertytype              ->  index
 * POST    /api/propertytype              ->  create
 * GET     /api/propertytype/:id          ->  show
 * PUT     /api/propertytype/:id          ->  upsert
 * PATCH   /api/propertytype/:id          ->  patch
 * DELETE  /api/propertytype/:id          ->  destroy
 */

import { applyPatch } from 'fast-json-patch';
import {PropertyType} from '../../sqldb';

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

// Gets a list of PropertyType
export function index(req, res) {
    return PropertyType.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single PropertyType from the DB
export function show(req, res) {
    return PropertyType.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new PropertyType in the DB
export function create(req, res) {
    return PropertyType.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given PropertyType in the DB at the specified ID
export function upsert(req, res) {
    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }

    return PropertyType.findById(req.params.id).then(item => {
        if (role) {
            PropertyType.update(
                req.body,
                {
                    where: { id: req.params.id },
                    logging: console.log
                }
            )
                .then(respondWithResult(res))
                .catch(handleError(res));
        } else {
            PropertyType.create(
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
    return PropertyType.upsert(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(respondWithResult(res))
        .catch(handleError(res));

        //*/
}

// Updates an existing PropertyType in the DB
export function patch(req, res) {
    if(req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }
    return PropertyType.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a PropertyType from the DB
export function destroy(req, res) {
    return PropertyType.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}

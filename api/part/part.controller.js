/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/part              ->  index
 * POST    /api/part              ->  create
 * GET     /api/part/:id          ->  show
 * PUT     /api/part/:id          ->  upsert
 * PATCH   /api/part/:id          ->  patch
 * DELETE  /api/part/:id          ->  destroy
 */

import { applyPatch } from 'fast-json-patch';
import { Part } from '../../sqldb';

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function (entity) {
        if (entity) {
            return res.status(statusCode).json(entity);
        }
        return null;
    };
}

function patchUpdates(patches) {
    return function (entity) {
        try {
            applyPatch(entity, patches, /*validate*/ true);
        } catch (err) {
            return Promise.reject(err);
        }

        return entity.save();
    };
}

function removeEntity(res) {
    return function (entity) {
        if (entity) {
            return entity.destroy()
                .then(() => res.status(204).end());
        }
    };
}

function handleEntityNotFound(res) {
    return function (entity) {
        if (!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    };
}

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function (err) {
        res.status(statusCode).send(err);
    };
}

// Gets a list of Part
export function index(req, res) {
    return Part.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single Part from the DB
export function show(req, res) {
    return Part.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function showItemsOfProperty(req, res) {
    return Part.findAll(
        {
            where: {
                idProperty: req.params.idProperty
            }
        }
    )
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Part in the DB
export function create(req, res) {
    return Part.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Part in the DB at the specified ID
export function upsert(req, res) {
    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }

    return Part.findById(req.params.id).then(item => {
        if (item) {
            Part.update(
                req.body,
                {
                    where: { id: req.params.id },
                    logging: console.log
                }
            )
                .then(respondWithResult(res))
                .catch(handleError(res));
        } else {
            Part.create(
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
    return Part.upsert(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(respondWithResult(res))
        .catch(handleError(res));

        //*/
}

// Updates an existing Part in the DB
export function patch(req, res) {
    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }
    return Part.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Part from the DB
export function destroy(req, res) {
    return Part.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}

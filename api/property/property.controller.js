/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/property              ->  index
 * POST    /api/property              ->  create
 * GET     /api/property/:id          ->  show
 * PUT     /api/property/:id          ->  upsert
 * PATCH   /api/property/:id          ->  patch
 * DELETE  /api/property/:id          ->  destroy
 */

import { applyPatch } from 'fast-json-patch';
import {Property} from '../../sqldb';

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

// Gets a list of Property
export function index(req, res) {
    return Property.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single Property from the DB
export function show(req, res) {
    return Property.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Property in the DB
export function create(req, res) {
    return Property.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Property in the DB at the specified ID
export function upsert(req, res) {
    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }

    for (var i=0; i<req.body.length; i++) {
        console.log ("element : " + req.body[i]);
    }
    
    console.log ("req.params.body : " + req.body.length);
    console.log ("req.params.id : " + req.body.id);
    console.log ("req.params.id : " + req.body.idPropertyType);

    console.log ("req.params.length : " + req.params.length);
    console.log ("req.params.idPropertyType : " + req.params.idPropertyType);

    console.log (JSON.stringify(req.body));

    return Property.findById(req.params.id).then(item => {
        if (item) {
            Property.update(
                req.body,
                {
                    where: { id: req.params.id },
                    logging: console.log
                }
            )
                .then(respondWithResult(res))
                .catch(handleError(res));
        } else {
            Property.create(
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
    return Property.upsert(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(respondWithResult(res))
        .catch(handleError(res));

        //*/
}

// Updates an existing Property in the DB
export function patch(req, res) {
    if(req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }
    return Property.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Property from the DB
export function destroy(req, res) {
    return Property.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}

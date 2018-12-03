/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/role              ->  index
 * POST    /api/role              ->  create
 * GET     /api/role/:id          ->  show
 * PUT     /api/role/:id          ->  upsert
 * PATCH   /api/role/:id          ->  patch
 * DELETE  /api/role/:id          ->  destroy
 */

import { applyPatch } from 'fast-json-patch';
import { Role } from '../../sqldb';

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


function update(patches) {

    console.log('req.patches: ' + JSON.stringify(patches));
/*
    return function (entity) {
      /*
        try {
            applyPatch(entity, patches, true);
        } catch (err) {
            return Promise.reject(err);
        }

        //return entity.save();
    };
    //*/
}

// Gets a list of Roles
export function index(req, res) {
    return Role.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single Role from the DB
export function show(req, res) {
    return Role.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Role in the DB
export function create(req, res) {
    return Role.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Role in the DB at the specified ID
export function upsert(req, res) {
    console.log('req.body.id: ' + req.body.id);
    console.log('req.params.id: ' + req.params.id);

    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }

    return Role.upsert({
            name: "ddd",
            info: "habar n-am ce are",
            active: 0
        }, {
            where: {
                "id": {
                    $eq: req.params.id
                }
            }, logging: console.log
        }
    )
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing Role in the DB
export function patch(req, res) {
    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }
    return Role.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Role from the DB
export function destroy(req, res) {
    return Role.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}

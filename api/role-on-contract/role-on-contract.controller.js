/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/roleoncontract              ->  index
 * POST    /api/roleoncontract              ->  create
 * GET     /api/roleoncontract/:id          ->  show
 * PUT     /api/roleoncontract/:id          ->  upsert
 * PATCH   /api/roleoncontract/:id          ->  patch
 * DELETE  /api/roleoncontract/:id          ->  destroy
 */

import { applyPatch } from 'fast-json-patch';
import {Thing} from '../../sqldb';

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

// Gets a list of RoleOnContract
export function index(req, res) {
    return RoleOnContract.findAll()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single RoleOnContract from the DB
export function show(req, res) {
    return RoleOnContract.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new RoleOnContract in the DB
export function create(req, res) {
    return RoleOnContract.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given RoleOnContract in the DB at the specified ID
export function upsert(req, res) {
    if (req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }

    return RoleOnContract.findById(req.params.id).then(item => {
        if (role) {
            RoleOnContract.update(
                req.body,
                {
                    where: { id: req.params.id },
                    logging: console.log
                }
            )
                .then(respondWithResult(res))
                .catch(handleError(res));
        } else {
            RoleOnContract.create(
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
    return RoleOnContract.upsert(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(respondWithResult(res))
        .catch(handleError(res));

        //*/
}

// Updates an existing RoleOnContract in the DB
export function patch(req, res) {
    if(req.body.id) {
        Reflect.deleteProperty(req.body, 'id');
    }
    return RoleOnContract.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a RoleOnContract from the DB
export function destroy(req, res) {
    return RoleOnContract.find({
        where: {
            id: req.params.id
        }
    })
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}

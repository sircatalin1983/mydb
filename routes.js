/**
 * Main application routes
 */

import errors from './components/errors';
import path from 'path';

export default function (app) {
    // Insert routes below
    app.use('/api/things', require('./api/thing'));
    app.use('/api/users', require('./api/user'));
    app.use('/api/roles', require('./api/role'));
    app.use('/api/propertytypes', require('./api/property-type'));
    app.use('/api/property', require('./api/property'));
    app.use('/api/part', require('./api/part'));
    app.use('/api/contract', require('./api/contract'));
    app.use('/api/rolesoncontract', require('./api/role-on-contract'));
    app.use('/api/inventoryparts', require('./api/inventory-part'));
    app.use('/auth', require('./auth').default);

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the app.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(`${app.get('appPath')}/app.html`));
        });
}

/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

import sqldb from '../sqldb';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
    if(!config.seedDB) {
        return Promise.resolve();
    }

    let Thing = sqldb.Thing;
    let User = sqldb.User;
    let Role = sqldb.Role;


    let promises = [];

    let thingPromise = Thing.destroy({ where: {} })
        .then(() => Thing.bulkCreate([{
            name: 'Development Tools',
            info: 'Integration with popular tools such as Webpack, Babel, TypeScript, Karma, Mocha, ESLint, Protractor, '
                    + 'Pug, Stylus, Sass, and Less.'
        }, {
            name: 'Server and Client integration',
            info: 'Built with a powerful and fun stack: MongoDB, Express, Angular, and Node.'
        }, {
            name: 'Smart Build System',
            info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of '
                    + 'scripts and styles into your app.html'
        }, {
            name: 'Modular Structure',
            info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
        }, {
            name: 'Optimized Build',
            info: 'Build process packs up your templates as a single JavaScript payload, minifies your '
                      + 'scripts/css/images, and rewrites asset names for caching.'
        }, {
            name: 'Deployment Ready',
            info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
        }]))
        .then(() => console.log('finished populating things'))
        .catch(err => console.log('error populating things', err));
    promises.push(thingPromise);

    let userPromise = User.destroy({ where: {} })
        .then(() => User.bulkCreate([{
            provider: 'local',
            firstname: 'Catalin',
            middlename: 'Constantin',
            lastname: 'Moldovan',
            idType: 'CI',
            idSerie: 'BV',
            idNumber: '803000',
            idNationalId: '1999999',
            idIssuedBy: 'Pol Brasov',
            addressCity: 'Brasov',
            addressCounty: 'Brasov',
            addressCountry: 'Romania',
            addressStreet: 'fff',
            addressNumber: '44A',
            addressBuilding: 'C2',
            addressStair: 'F',
            addressFloor: 'Parter',
            addressApartament: '22C',
            email: 'test@example.com',
            password: 'test'
        }, {
            provider: 'local',
            role: 'admin',
            firstname: 'Catalin',
            middlename: 'Constantin',
            lastname: 'Moldovan',
            idType: 'CI',
            idSerie: 'BV',
            idNumber: '803000',
            idNationalId: '1999999',
            idIssuedBy: 'Pol Brasov',
            addressCity: 'Brasov',
            addressCounty: 'Brasov',
            addressCountry: 'Romania',
            addressStreet: 'fff',
            addressNumber: '44A',
            addressBuilding: 'C2',
            addressStair: 'F',
            addressFloor: 'Parter',
            addressApartament: '22C',
            email: 'admin@example.com',
            password: 'admin'
        }])
            .then(() => console.log('finished populating users'))
            .catch(err => console.log('error populating users', err)));
    promises.push(userPromise);

    let rolePromise = Role.destroy({ where: {} })
        .then(() => Role.bulkCreate([{
            name: 'Owner',
            info: ''
        }, {
            name: 'Renter',
            info: ''
        }]))
        .then(() => console.log('finished populating things'))
        .catch(err => console.log('error populating things', err));
    promises.push(thingPromise);

    return Promise.all(promises);
}

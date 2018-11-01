/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

import sqldb from '../sqldb';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
    if (!config.seedDB) {
        return Promise.resolve();
    }

    let Thing = sqldb.Thing;
    let User = sqldb.User;
    let Role = sqldb.Role;
    let PropertyType = sqldb.PropertyType;
    let Property = sqldb.Property;
    let Contract = sqldb.Contract;

    let promises = [];

    let contractPromise = Contract.destroy({ where: {} })
        .then(() => Contract.bulkCreate([{
            startDate: '22 Oct 2018',
            endDate: '22 Oct 2019',
            duration: '12',
            paymentDate: '1',
            paymentType: 'Cash',
            paymentLocation: 'La locul chirieri',
            paymentIBAN: '',
            rent: '300',
            rentInLetters: 'trei sute',
            rentCurrency: 'EUR',
            upfrontPayment: '200',
            upfrontPaymentLetters: 'sss',
            upfrontPaymentCurrency: 'EUR',
            upfrontPaymentDetails: 'sss',
            warranty: '300',
            warrantyLetters: 'trei sute',
            warrantyCurrency: 'EUR',
            specialClauses: 'Nimic de adaugat'
        }]))
        .then(() => console.log('finished populating contracts'))
        .catch(err => console.log('error populating contracts', err));
    promises.push(contractPromise);

    let propertyTypePromise = PropertyType.destroy({ where: {} })
        .then(() => PropertyType.bulkCreate([{
            name: 'Ap 2 Cam',
            info: ''
        }, {
            name: 'Casa',
            info: ''
        }]))
        .then(() => console.log('finished populating property types'))
        .catch(err => console.log('error populating property types', err));
    promises.push(propertyTypePromise);

    let propertyPromise = Property.destroy({ where: {} })
        .then(() => Property.bulkCreate([{
            addressCity: 'Brasov',
            addressCounty: 'Brasov',
            addressCountry: 'Romania',
            addressStreet: 'fff',
            addressNumber: '44A',
            addressBuilding: 'C2',
            addressStair: 'F',
            addressFloor: 'Parter',
            addressApartament: '22C',
            details: '',
            state: ''
        }, {
            propertyTypeId: 1,
            addressCity: 'Brasov',
            addressCounty: 'Brasov',
            addressCountry: 'Romania',
            addressStreet: 'fff',
            addressNumber: '44A',
            addressBuilding: 'C2',
            addressStair: 'F',
            addressFloor: 'Parter',
            addressApartament: '22C',
            details: '',
            state: ''
        }]))
        .then(() => console.log('finished populating property'))
        .catch(err => console.log('error populating property', err));
    promises.push(propertyPromise);

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

    let rolePromise = Role.destroy({ where: {} })
        .then(() => Role.bulkCreate([{
            name: 'Owner',
            info: ''
        }, {
            name: 'Renter',
            info: ''
        }]))
        .then(() => console.log('finished populating roles'))
        .catch(err => console.log('error populating roles', err));
    promises.push(rolePromise);

    let userPromise = User.destroy({ where: {} })
        .then(() => User.bulkCreate([{
            provider: 'local',
            firstName: 'Catalin',
            middleName: 'Constantin',
            lastName: 'Moldovan',
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
            firstName: 'Catalin',
            middleName: 'Constantin',
            lastName: 'Moldovan',
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

    //*/

    return Promise.all(promises);
}

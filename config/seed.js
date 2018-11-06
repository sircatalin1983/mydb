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
    let RoleOnContract = sqldb.RoleOnContract;
    let PropertyType = sqldb.PropertyType;
    let Property = sqldb.Property;
    let Contract = sqldb.Contract;
    let Part = sqldb.Part;
    let InventoryPart= sqldb.InventoryPart;

    let promises = [];


    Thing.destroy({ where: {} });

    //InventoryPart.destroy({ where: {} });
    RoleOnContract.destroy({ where: {} });
    Role.destroy({ where: {} });
    Contract.destroy({ where: {} });

    Part.destroy({ where: {} });

    Property.destroy({ where: {} });
    PropertyType.destroy({ where: {} });
    User.destroy({ where: {} });

    Thing.create({
        name: 'Development Tools',
        info: 'Integration with popular tools such as Webpack, Babel, TypeScript, Karma, Mocha, ESLint, Protractor, '
            + 'Pug, Stylus, Sass, and Less.'
    });

    let user1 = User.build({
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
    });

    let user2 = User.build({
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
        email: 'admin@example.com',
        password: 'test'
    });

    let propertyType = PropertyType.build({
        name: 'Ap 2 Cam',
        info: ''
    });

    let property = Property.build({
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
    });

    let part1 = Part.build({
        info: 'd.',
        state: 'Scaz'
    });

    let part2 = Part.build({
        info: 'd.',
        state: 'Scaz'
    });

    let inventoryPart1 = InventoryPart.build({
        state: 'Scaz'
    });

    let inventoryPart2 = InventoryPart.build({
        state: 'Scaz'
    });

    let contract = Contract.build({
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
    });

    let role1 = Role.build({
        name: 'Owner',
        info: ''
    });

    let role2 = Role.build({
        name: 'Renter',
        info: ''
    });

    let roleOnContract1 = RoleOnContract.build({
        active: 1
    });

    let roleOnContract2 = RoleOnContract.build({
        active: 1
    });

    property.save().then(pProperty => {
        propertyType.save().then(pPropertyType => {
            return pPropertyType.addProperty(pProperty).then(resp => {
                console.log('2');
            })
        });

        contract.save().then(pContract => {
            pProperty.addContract(pContract).then(resp => {
                user1.save().then(pUser1 => {
                    //add owner of the property
                    pUser1.addProperty(pProperty).then(resp => {
                        console.log('1');
                    });

                    //add owner of the contract 
                    roleOnContract1.save().then(pRoleOnContract1 => {
                        role1.save().then(pRole1 => {
                            pRole1.addRoleOnContract(pRoleOnContract1);
                            pUser1.addRoleOnContract(pRoleOnContract1);
                            pContract.addRoleOnContract(pRoleOnContract1);
                        });
                    });
                });

                //save the user Renter and add the role on the contract 
                user2.save().then(pUser2 => {
                    roleOnContract2.save().then(pRoleOnContract2 => {
                        role2.save().then(pRole2 => {
                            pRole2.addRoleOnContract(pRoleOnContract2);
                            pUser2.addRoleOnContract(pRoleOnContract2);
                            pContract.addRoleOnContract(pRoleOnContract2);
                        });
                    });
                });
            })

            inventoryPart1.save().then(pInventoryPart1 => {
                part1.save().then(pPart1 => {
                    pProperty.addPart(pPart1).then(resp => {
                        console.log('3');
                    });
                    
                    pPart1.addInventoryPart(pInventoryPart1).then(resp => {
                        console.log('22');
                    });

                    pContract.addInventoryPart(pInventoryPart1).then(resp => {
                        console.log('23');
                    });
                });
            });
    
            inventoryPart2.save().then(pInventoryPart2 => {
                part2.save().then(pPart2 => {
                    pProperty.addPart(pPart2).then(resp => {
                        console.log('4');
                    })
    
                    pPart2.addInventoryPart(pInventoryPart2).then(resp => {
                        console.log('22');
                    });

                    pContract.addInventoryPart(pInventoryPart2).then(resp => {
                        console.log('22');
                    });
                });
            });

        });
    });

    /* 
   
    
    
        /*
            
        
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
        
           
        
            let rolePromise = Role.destroy({ where: {} })
                .then(() => Role.bulkCreate([{
                    name: 'Owner',
                    info: ''
                }, {
                    name: 'Renter',
                    info: ''
                }]))
                .then(function(response){
                    //var x = json(response);
                })
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

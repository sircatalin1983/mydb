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
    let PropertyType = sqldb.PropertyType;
    let Role = sqldb.Role;

    let Property = sqldb.Property;


    let RoleOnContract = sqldb.RoleOnContract;
    let Contract = sqldb.Contract;
    let Part = sqldb.Part;
    let InventoryPart = sqldb.InventoryPart;

    let promises = [];

    Thing.destroy({ where: {} });

    RoleOnContract.destroy({ where: {} });
    Role.destroy({ where: {} });
    Contract.destroy({ where: {} });
    Property.destroy({ where: {} });
    InventoryPart.destroy({ where: {} });
    Part.destroy({ where: {} });
    //InventoryPart.destroy({ where: {} });
    PropertyType.destroy({ where: {} });
    User.destroy({ where: {} });


    Thing.create({
        name: 'Development Tools',
        info: 'Integration with popular tools such as Webpack, Babel, TypeScript, Karma, Mocha, ESLint, Protractor, '
            + 'Pug, Stylus, Sass, and Less.'
    });

    let propertyType1 = PropertyType.build({
        name: 'Apartament 2 Camere',
        info: ''
    });

    let propertyType2 = PropertyType.build({
        name: 'Apartament 3 Camere',
        info: ''
    });

    let propertyType3 = PropertyType.build({
        name: 'Apartament 4 Camere',
        info: ''
    });

    let propertyType4 = PropertyType.build({
        name: 'Garsoniera',
        info: ''
    });

    let propertyType5 = PropertyType.build({
        name: 'Apartament Studio',
        info: ''
    });

    let user1 = User.build({
        provider: 'local',
        username: 'catalin.moldovan',
        email: 'test1@example.com',
        password: 'test'
    });

    let user2 = User.build({
        provider: 'local',
        username: 'catalin.moldovan1',
        email: 'admin2@example.com',
        password: 'test'
    });

    let user3 = User.build({
        provider: 'local',
        username: 'catalin.moldovan3',
        email: 'admin3@example.com',
        password: 'test'
    });

    let user4 = User.build({
        provider: 'local',
        username: 'catalin.moldovan4',
        email: 'admin4@example.com',
        password: 'test'
    });

    let user5 = User.build({
        provider: 'local',
        username: 'catalin.moldovan5',
        email: 'admin5@example.com',
        password: 'test'
    });

    let property1 = Property.build({
        identificationLabel: 'Magenta',
        addressCity: 'Brasov',
        addressCounty: 'Brasov',
        addressCountry: 'Romania',
        addressStreet: 'Calea Bucuresti',
        addressNumber: '20',
        addressBuilding: 'S4',
        addressStair: 'F',
        addressFloor: '1',
        addressApartament: '2',
        details: '',
        state: ''
    });

    let property2 = Property.build({
        identificationLabel: 'Oak',
        addressCity: 'Brasov',
        addressCounty: 'Brasov',
        addressCountry: 'Romania',
        addressStreet: 'Ioan Popasu',
        addressNumber: '15',
        addressBuilding: 'C09',
        addressStair: 'A',
        addressFloor: '4',
        addressApartament: '36',
        details: '',
        state: ''
    });

    let property3 = Property.build({
        identificationLabel: 'Fagus',
        addressCity: 'Brasov',
        addressCounty: 'Brasov',
        addressCountry: 'Romania',
        addressStreet: 'Ioan Popasu',
        addressNumber: '15',
        addressBuilding: 'C12',
        addressStair: 'A',
        addressFloor: '1',
        addressApartament: '07',
        details: '',
        state: ''
    });

    let property4 = Property.build({
        identificationLabel: 'Mozart',
        addressCity: 'Brasov',
        addressCounty: 'Brasov',
        addressCountry: 'Romania',
        addressStreet: 'Zaharia Stancu',
        addressNumber: '2',
        addressBuilding: 'B12',
        addressStair: 'A',
        addressFloor: '4',
        addressApartament: '408',
        details: '',
        state: ''
    });

    let property1_part1 = Part.build({
        name: 'Frigider Incorporabil',
        info: ''
    });

    let property1_inventoryPart1 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part2 = Part.build({
        name: 'Masina Spalat Vase',
        info: ''
    });

    let property1_inventoryPart2 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part3 = Part.build({
        name: 'Masa Bucatarie',
        info: ''
    });

    let property1_inventoryPart3 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part4 = Part.build({
        name: '4 X Scaune Bucatarie',
        info: ''
    });

    let property1_inventoryPart4 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part5 = Part.build({
        name: 'Mobilier Hol - Cuier',
        info: ''
    });

    let property1_inventoryPart5 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part6 = Part.build({
        name: 'Mobila Bucatarie',
        info: ''
    });

    let property1_inventoryPart6 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part7 = Part.build({
        name: 'Plita Incorporabila',
        info: ''
    });

    let property1_inventoryPart7 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part8 = Part.build({
        name: 'Cuptor Incorporabil',
        info: ''
    });

    let property1_inventoryPart8 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part9 = Part.build({
        name: 'Hota Incorporabila',
        info: ''
    });

    let property1_inventoryPart9 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part10 = Part.build({
        name: 'Chiuveta Incorporabila',
        info: ''
    });

    let property1_inventoryPart10 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part11 = Part.build({
        name: 'Baterie Bucatarie',
        info: ''
    });

    let property1_inventoryPart11 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part12 = Part.build({
        name: 'Dulap Hol',
        info: ''
    });

    let property1_inventoryPart12 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part13 = Part.build({
        name: 'Mobila Living',
        info: ''
    });

    let property1_inventoryPart13 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part14 = Part.build({
        name: 'Suport TV Living',
        info: ''
    });

    let property1_inventoryPart14 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part15 = Part.build({
        name: 'Masa Extensibila Living',
        info: ''
    });

    let property1_inventoryPart15 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part16 = Part.build({
        name: '4 X Scaune Living',
        info: ''
    });

    let property1_inventoryPart16 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part17 = Part.build({
        name: 'Canapea Living',
        info: ''
    });

    let property1_inventoryPart17 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part18 = Part.build({
        name: 'Covor Living',
        info: ''
    });

    let property1_inventoryPart18 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part19 = Part.build({
        name: 'Masuta Cafea Living',
        info: ''
    });

    let property1_inventoryPart19 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part20 = Part.build({
        name: 'Perdea + Draperie Living',
        info: ''
    });

    let property1_inventoryPart20 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part21 = Part.build({
        name: 'Aplice (Living, Hol, Baie, Dormitor, Bucatarie)',
        info: ''
    });

    let property1_inventoryPart21 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part22 = Part.build({
        name: 'Centrala Termica Murala',
        info: ''
    });

    let property1_inventoryPart22 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part23 = Part.build({
        name: 'Termostat Wireless',
        info: ''
    });

    let property1_inventoryPart23 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part24 = Part.build({
        name: 'Saltea Pat Dormitor',
        info: ''
    });

    let property1_inventoryPart24 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part25 = Part.build({
        name: 'Mobilier Dormitor (Dulap + Pat + 2 Noptiere',
        info: ''
    });

    let property1_inventoryPart25 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part26 = Part.build({
        name: 'Draperie + Perdea Dormitor',
        info: ''
    });

    let property1_inventoryPart26 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part27 = Part.build({
        name: 'Birou Mic Dormitor',
        info: ''
    });

    let property1_inventoryPart27 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part28 = Part.build({
        name: 'TV Samsung 64 CM Diagonala',
        info: ''
    });

    let property1_inventoryPart28 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part29 = Part.build({
        name: 'Cada + Dus',
        info: ''
    });

    let property1_inventoryPart29 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part30 = Part.build({
        name: 'Chiuveta + Baterie + Mobilier Chiuveta',
        info: ''
    });

    let property1_inventoryPart30 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part31 = Part.build({
        name: 'Oglinda Baie',
        info: ''
    });

    let property1_inventoryPart31 = InventoryPart.build({
        state: 'Buna'
    });

    let property1_part32 = Part.build({
        name: 'Vas WC',
        info: ''
    });

    let property1_inventoryPart32 = InventoryPart.build({
        state: 'Buna'
    });

    let contract1 = Contract.build({
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
        upfrontPayment: '300',
        upfrontPaymentLetters: 'trei sute',
        upfrontPaymentCurrency: 'EUR',
        upfrontPaymentDetails: '',
        warranty: '300',
        warrantyLetters: 'trei sute',
        warrantyCurrency: 'EUR',
        specialClauses: ''
    });

    let contract2 = Contract.build({
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
        upfrontPayment: '300',
        upfrontPaymentLetters: 'trei sute',
        upfrontPaymentCurrency: 'EUR',
        upfrontPaymentDetails: '',
        warranty: '300',
        warrantyLetters: 'trei sute',
        warrantyCurrency: 'EUR',
        specialClauses: ''
    });

    let contract3 = Contract.build({
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
        upfrontPayment: '300',
        upfrontPaymentLetters: 'trei sute',
        upfrontPaymentCurrency: 'EUR',
        upfrontPaymentDetails: '',
        warranty: '300',
        warrantyLetters: 'trei sute',
        warrantyCurrency: 'EUR',
        specialClauses: ''
    });

    let contract4 = Contract.build({
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
        upfrontPayment: '300',
        upfrontPaymentLetters: 'trei sute',
        upfrontPaymentCurrency: 'EUR',
        upfrontPaymentDetails: '',
        warranty: '300',
        warrantyLetters: 'trei sute',
        warrantyCurrency: 'EUR',
        specialClauses: ''
    });

    let role1 = Role.build({
        name: 'Owner',
        info: ''
    });

    let role2 = Role.build({
        name: 'Renter',
        info: ''
    });

    let ownerOnContract1 = RoleOnContract.build({
        active: 1,
        contractualDataIsCompany: 0,
        contractualDataCompanyName: "",
        contractualDataFirstName: "MOLDOVAN",
        contractualDataMiddleName: "Constantin",
        contractualDataLastName: "Catalin",
        contractualDataIdType: "CI",
        contractualDataIdSerie: "BV",
        contractualDataIdNumber: "800000",
        contractualDataIdNationalId: "1830517000000",
        contractualDataIdIssuedBy: "SPCLEP Brasov",
        contractualDataAddressCity: "Brasov",
        contractualDataAddressCounty: "Brasov",
        contractualDataAddressCountry: "Romania",
        contractualDataAddressStreet: "Calea Bucuresti",
        contractualDataAddressNumber: "20",
        contractualDataAddressBuilding: "S4",
        contractualDataAddressStair: "F",
        contractualDataAddressFloor: "1",
        contractualDataAddressApartment: "2"
    });

    let ownerOnContract2 = RoleOnContract.build({
        active: 1,
        contractualDataIsCompany: 0,
        contractualDataCompanyName: "",
        contractualDataFirstName: "MOLDOVAN",
        contractualDataMiddleName: "Constantin",
        contractualDataLastName: "Catalin",
        contractualDataIdType: "CI",
        contractualDataIdSerie: "BV",
        contractualDataIdNumber: "800000",
        contractualDataIdNationalId: "1830517000000",
        contractualDataIdIssuedBy: "SPCLEP Brasov",
        contractualDataAddressCity: "Brasov",
        contractualDataAddressCounty: "Brasov",
        contractualDataAddressCountry: "Romania",
        contractualDataAddressStreet: "Calea Bucuresti",
        contractualDataAddressNumber: "20",
        contractualDataAddressBuilding: "S4",
        contractualDataAddressStair: "F",
        contractualDataAddressFloor: "1",
        contractualDataAddressApartment: "2"
    });

    let ownerOnContract3 = RoleOnContract.build({
        active: 1,
        contractualDataIsCompany: 0,
        contractualDataCompanyName: "",
        contractualDataFirstName: "MOLDOVAN",
        contractualDataMiddleName: "Constantin",
        contractualDataLastName: "Catalin",
        contractualDataIdType: "CI",
        contractualDataIdSerie: "BV",
        contractualDataIdNumber: "800000",
        contractualDataIdNationalId: "1830517000000",
        contractualDataIdIssuedBy: "SPCLEP Brasov",
        contractualDataAddressCity: "Brasov",
        contractualDataAddressCounty: "Brasov",
        contractualDataAddressCountry: "Romania",
        contractualDataAddressStreet: "Calea Bucuresti",
        contractualDataAddressNumber: "20",
        contractualDataAddressBuilding: "S4",
        contractualDataAddressStair: "F",
        contractualDataAddressFloor: "1",
        contractualDataAddressApartment: "2"
    });

    let ownerOnContract4 = RoleOnContract.build({
        active: 1,
        contractualDataIsCompany: 0,
        contractualDataCompanyName: "",
        contractualDataFirstName: "MOLDOVAN",
        contractualDataMiddleName: "Constantin",
        contractualDataLastName: "Catalin",
        contractualDataIdType: "CI",
        contractualDataIdSerie: "BV",
        contractualDataIdNumber: "800000",
        contractualDataIdNationalId: "1830517000000",
        contractualDataIdIssuedBy: "SPCLEP Brasov",
        contractualDataAddressCity: "Brasov",
        contractualDataAddressCounty: "Brasov",
        contractualDataAddressCountry: "Romania",
        contractualDataAddressStreet: "Calea Bucuresti",
        contractualDataAddressNumber: "20",
        contractualDataAddressBuilding: "S4",
        contractualDataAddressStair: "F",
        contractualDataAddressFloor: "1",
        contractualDataAddressApartment: "2"
    });

    let renterOnContract1 = RoleOnContract.build({
        active: 1,
        contractualDataIsCompany: 0,
        contractualDataCompanyName: "",
        contractualDataFirstName: "RENTER1",
        contractualDataMiddleName: "Constantin",
        contractualDataLastName: "Catalin",
        contractualDataIdType: "CI",
        contractualDataIdSerie: "BV",
        contractualDataIdNumber: "800000",
        contractualDataIdNationalId: "1830517000000",
        contractualDataIdIssuedBy: "SPCLEP Brasov",
        contractualDataAddressCity: "Brasov",
        contractualDataAddressCounty: "Brasov",
        contractualDataAddressCountry: "Romania",
        contractualDataAddressStreet: "Calea Bucuresti",
        contractualDataAddressNumber: "20",
        contractualDataAddressBuilding: "S4",
        contractualDataAddressStair: "F",
        contractualDataAddressFloor: "1",
        contractualDataAddressApartment: "2"
    });

    let renterOnContract2 = RoleOnContract.build({
        active: 1,
        contractualDataIsCompany: 0,
        contractualDataCompanyName: "",
        contractualDataFirstName: "RENTER2",
        contractualDataMiddleName: "Constantin",
        contractualDataLastName: "Catalin",
        contractualDataIdType: "CI",
        contractualDataIdSerie: "BV",
        contractualDataIdNumber: "800000",
        contractualDataIdNationalId: "1830517000000",
        contractualDataIdIssuedBy: "SPCLEP Brasov",
        contractualDataAddressCity: "Brasov",
        contractualDataAddressCounty: "Brasov",
        contractualDataAddressCountry: "Romania",
        contractualDataAddressStreet: "Calea Bucuresti",
        contractualDataAddressNumber: "20",
        contractualDataAddressBuilding: "S4",
        contractualDataAddressStair: "F",
        contractualDataAddressFloor: "1",
        contractualDataAddressApartment: "2"
    });

    let renterOnContract3 = RoleOnContract.build({
        active: 1,
        contractualDataIsCompany: 0,
        contractualDataCompanyName: "",
        contractualDataFirstName: "RENTER3",
        contractualDataMiddleName: "Constantin",
        contractualDataLastName: "Catalin",
        contractualDataIdType: "CI",
        contractualDataIdSerie: "BV",
        contractualDataIdNumber: "800000",
        contractualDataIdNationalId: "1830517000000",
        contractualDataIdIssuedBy: "SPCLEP Brasov",
        contractualDataAddressCity: "Brasov",
        contractualDataAddressCounty: "Brasov",
        contractualDataAddressCountry: "Romania",
        contractualDataAddressStreet: "Calea Bucuresti",
        contractualDataAddressNumber: "20",
        contractualDataAddressBuilding: "S4",
        contractualDataAddressStair: "F",
        contractualDataAddressFloor: "1",
        contractualDataAddressApartment: "2"
    });

    let renterOnContract4 = RoleOnContract.build({
        active: 1,
        contractualDataIsCompany: 0,
        contractualDataCompanyName: "",
        contractualDataFirstName: "RENTER4",
        contractualDataMiddleName: "Constantin",
        contractualDataLastName: "Catalin",
        contractualDataIdType: "CI",
        contractualDataIdSerie: "BV",
        contractualDataIdNumber: "800000",
        contractualDataIdNationalId: "1830517000000",
        contractualDataIdIssuedBy: "SPCLEP Brasov",
        contractualDataAddressCity: "Brasov",
        contractualDataAddressCounty: "Brasov",
        contractualDataAddressCountry: "Romania",
        contractualDataAddressStreet: "Calea Bucuresti",
        contractualDataAddressNumber: "20",
        contractualDataAddressBuilding: "S4",
        contractualDataAddressStair: "F",
        contractualDataAddressFloor: "1",
        contractualDataAddressApartment: "2"
    });

    user1.save().then(pUser1 => {
        propertyType1.save().then(pPropertyType => {
            role1.save().then(pRole1 => {
                role2.save().then(pRole2 => {

                    property1.save().then(pProperty => {
                        pPropertyType.addProperty(pProperty).then(resp => {
                            console.log('2');
                        });

                        //add owner of the property
                        pUser1.addProperty(pProperty).then(resp => {
                            console.log('1');
                        });

                        contract1.save().then(pContract => {
                            pProperty.addContract(pContract).then(resp => {
                                //add owner of the contract 
                                ownerOnContract1.save().then(pRoleOnContract1 => {
                                    pRole1.addRoleOnContract(pRoleOnContract1);
                                    pUser1.addRoleOnContract(pRoleOnContract1);
                                    pContract.addRoleOnContract(pRoleOnContract1);
                                });

                                //save the user Renter and add the role on the contract 
                                user2.save().then(pUser2 => {
                                    renterOnContract1.save().then(pRoleOnContract2 => {
                                        pRole2.addRoleOnContract(pRoleOnContract2);
                                        pUser2.addRoleOnContract(pRoleOnContract2);
                                        pContract.addRoleOnContract(pRoleOnContract2);
                                    });
                                });
                            })

                            property1_inventoryPart1.save().then(pInventoryPart => {
                                property1_part1.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart2.save().then(pInventoryPart => {
                                property1_part2.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart3.save().then(pInventoryPart => {
                                property1_part3.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart4.save().then(pInventoryPart => {
                                property1_part4.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart5.save().then(pInventoryPart => {
                                property1_part5.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart6.save().then(pInventoryPart => {
                                property1_part6.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart7.save().then(pInventoryPart => {
                                property1_part7.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart8.save().then(pInventoryPart => {
                                property1_part8.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart9.save().then(pInventoryPart => {
                                property1_part9.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart10.save().then(pInventoryPart => {
                                property1_part10.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart11.save().then(pInventoryPart => {
                                property1_part11.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart12.save().then(pInventoryPart => {
                                property1_part12.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart13.save().then(pInventoryPart => {
                                property1_part13.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart14.save().then(pInventoryPart => {
                                property1_part14.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart15.save().then(pInventoryPart => {
                                property1_part15.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart16.save().then(pInventoryPart => {
                                property1_part16.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart17.save().then(pInventoryPart => {
                                property1_part17.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart18.save().then(pInventoryPart => {
                                property1_part18.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart19.save().then(pInventoryPart => {
                                property1_part19.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart20.save().then(pInventoryPart => {
                                property1_part20.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart21.save().then(pInventoryPart => {
                                property1_part21.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart22.save().then(pInventoryPart => {
                                property1_part22.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart23.save().then(pInventoryPart => {
                                property1_part23.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart24.save().then(pInventoryPart => {
                                property1_part24.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart25.save().then(pInventoryPart => {
                                property1_part25.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart26.save().then(pInventoryPart => {
                                property1_part26.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart27.save().then(pInventoryPart => {
                                property1_part27.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart28.save().then(pInventoryPart => {
                                property1_part28.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart29.save().then(pInventoryPart => {
                                property1_part29.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart30.save().then(pInventoryPart => {
                                property1_part30.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart31.save().then(pInventoryPart => {
                                property1_part31.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });

                            property1_inventoryPart32.save().then(pInventoryPart => {
                                property1_part32.save().then(pPart => {
                                    pProperty.addPart(pPart);
                                    pPart.addInventoryPart(pInventoryPart);
                                    pContract.addInventoryPart(pInventoryPart);
                                });
                            });
                        });
                    });


                    property2.save().then(pProperty => {
                        pPropertyType.addProperty(pProperty).then(resp => {
                            console.log('2');
                        });

                        //add owner of the property
                        pUser1.addProperty(pProperty).then(resp => {
                            console.log('1');
                        });

                        contract2.save().then(pContract => {
                            pProperty.addContract(pContract).then(resp => {
                                //add owner of the contract 
                                ownerOnContract2.save().then(pRoleOnContract1 => {
                                    pRole1.addRoleOnContract(pRoleOnContract1);
                                    pUser1.addRoleOnContract(pRoleOnContract1);
                                    pContract.addRoleOnContract(pRoleOnContract1);
                                });

                                //save the user Renter and add the role on the contract 
                                user3.save().then(pUser3 => {
                                    renterOnContract2.save().then(pRoleOnContract2 => {
                                        pRole2.addRoleOnContract(pRoleOnContract2);
                                        pUser3.addRoleOnContract(pRoleOnContract2);
                                        pContract.addRoleOnContract(pRoleOnContract2);
                                    });
                                });
                            });
                        });
                    });

                    property3.save().then(pProperty => {
                        pPropertyType.addProperty(pProperty).then(resp => {
                            console.log('2');
                        });

                        //add owner of the property
                        pUser1.addProperty(pProperty).then(resp => {
                            console.log('1');
                        });

                        contract3.save().then(pContract => {
                            pProperty.addContract(pContract).then(resp => {
                                //add owner of the contract 
                                ownerOnContract3.save().then(pRoleOnContract1 => {
                                    pRole1.addRoleOnContract(pRoleOnContract1);
                                    pUser1.addRoleOnContract(pRoleOnContract1);
                                    pContract.addRoleOnContract(pRoleOnContract1);
                                });

                                //save the user Renter and add the role on the contract 
                                user4.save().then(pUser4 => {
                                    renterOnContract3.save().then(pRoleOnContract2 => {
                                        pRole2.addRoleOnContract(pRoleOnContract2);
                                        pUser4.addRoleOnContract(pRoleOnContract2);
                                        pContract.addRoleOnContract(pRoleOnContract2);
                                    });
                                });
                            });
                        });
                    });

                    property4.save().then(pProperty => {
                        pPropertyType.addProperty(pProperty).then(resp => {
                            console.log('2');
                        });

                        //add owner of the property
                        pUser1.addProperty(pProperty).then(resp => {
                            console.log('1');
                        });

                        contract4.save().then(pContract => {
                            pProperty.addContract(pContract).then(resp => {
                                //add owner of the contract 
                                ownerOnContract4.save().then(pRoleOnContract1 => {
                                    pRole1.addRoleOnContract(pRoleOnContract1);
                                    pUser1.addRoleOnContract(pRoleOnContract1);
                                    pContract.addRoleOnContract(pRoleOnContract1);
                                });

                                //save the user Renter and add the role on the contract 
                                user5.save().then(pUser5 => {
                                    renterOnContract4.save().then(pRoleOnContract2 => {
                                        pRole2.addRoleOnContract(pRoleOnContract2);
                                        pUser5.addRoleOnContract(pRoleOnContract2);
                                        pContract.addRoleOnContract(pRoleOnContract2);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    return Promise.all(promises);
}
import propertyTypeModel from "../property-type/property-type.model";

export default function (sequelize, DataTypes) {
    return sequelize.define('Property', {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        addressCity: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AddressCity'
        },
        addressCounty: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AddressCounty'
        },
        addressCountry: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AddressCountry'
        },
        addressStreet: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AddressStreet'
        },
        addressNumber: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AddressNumber'
        },
        addressBuilding: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AddressBuilding'
        },
        addressStair: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AddressStair'
        },
        addressFloor: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AddressFloor'
        },
        addressApartment: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AddressApartment'
        },
        details: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Details'
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'State'
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            field: 'Active'
        }
    });
}

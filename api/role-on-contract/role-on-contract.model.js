export default function(sequelize, DataTypes) {
    return sequelize.define('RoleOnContract', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'Id'
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            field: 'Active'
        },
        idUser: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Users',
                key: 'Id'
            },
            field: 'IdUser'
        },
        idRole: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Roles',
                key: 'Id'
            },
            field: 'IdRole'
        },
        idContract: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Contracts',
                key: 'Id'
            },
            field: 'IdContract'
        },
        contractualDataIsCompany: {
            type: DataTypes.BOOLEAN,
            field: 'ContractualDataIsCompany'
        },
        contractualDataCompanyName: {
            type: DataTypes.STRING,
            field: 'ContractualDataCompanyName'
        },
        contractualDataFirstName: {
            type: DataTypes.STRING,
            field: 'ContractualDataFirstName'
        },
        contractualDataMiddleName: {
            type: DataTypes.STRING,
            field: 'ContractualDataMiddleName'
        },
        contractualDataLastName: {
            type: DataTypes.STRING,
            field: 'ContractualDataLastName'
        },       
        contractualDataIdType: {
            type: DataTypes.STRING,
            field: 'ContractualDataIdType'
        },
        contractualDataIdSerie: {
            type: DataTypes.STRING,
            field: 'ContractualDataIdSerie'
        },
        contractualDataIdNumber: {
            type: DataTypes.STRING,
            field: 'ContractualDataIdNumber'
        },
        contractualDataIdNationalId: {
            type: DataTypes.STRING,
            field: 'ContractualDataIdNationalId'
        },
        contractualDataIdIssuedBy: {
            type: DataTypes.STRING,        
            field: 'ContractualDataIdIssuedBy'
        },
        contractualDataAddressCity: {
            type: DataTypes.STRING,
            field: 'ContractualDataAddressCity'
        },
        contractualDataAddressCounty: {
            type: DataTypes.STRING,
            field: 'ContractualDataAddressCounty'
        },
        contractualDataAddressCountry: {
            type: DataTypes.STRING,
            field: 'ContractualDataAddressCountry'
        },
        contractualDataAddressStreet: {
            type: DataTypes.STRING,
            field: 'ContractualDataAddressStreet'
        },
        contractualDataAddressNumber: {
            type: DataTypes.STRING,
            field: 'ContractualDataAddressNumber'
        },
        contractualDataAddressBuilding: {
            type: DataTypes.STRING,
            field: 'ContractualDataAddressBuilding'
        },
        contractualDataAddressStair: {
            type: DataTypes.STRING,
            field: 'ContractualDataAddressStair'
        },
        contractualDataAddressFloor: {
            type: DataTypes.STRING,
            field: 'ContractualDataAddressFloor'
        },
        contractualDataAddressApartment: {
            type: DataTypes.STRING,
            field: 'ContractualDataAddressApartment'
        }
    });
}

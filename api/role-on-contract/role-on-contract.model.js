export default function(sequelize, DataTypes) {
    return sequelize.define('RoleOnContract', {
        _id: {
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
        }
    });
}

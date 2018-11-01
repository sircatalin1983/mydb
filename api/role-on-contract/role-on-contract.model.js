export default function(sequelize, DataTypes) {
    return sequelize.define('RoleOnContract', {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            field: 'Active'
        }
    });
}

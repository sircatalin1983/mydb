export default function(sequelize, DataTypes) {
    return sequelize.define('InventoryItem', {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        info:{
            type: DataTypes.STRING,
            field: 'Info'
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1,
            field: 'Active'
        },
        state: {
            type: DataTypes.STRING,
            field: 'State'
        } 
    });
}

export default function(sequelize, DataTypes) {
    return sequelize.define('InventoryPart', {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'Id'
        },        
        state: {
            type: DataTypes.STRING,
            field: 'State'
        },
        idInventory: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Inventories',
                key: 'Id'
            },
            field: 'IdInventory'
        },
        idPart: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Parts',
                key: 'Id'
            },
            field: 'IdPart'
        }
    });
}

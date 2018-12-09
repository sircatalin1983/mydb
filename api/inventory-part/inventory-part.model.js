export default function(sequelize, DataTypes) {
    return sequelize.define('InventoryPart', {
        id: {
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
        idContract: {
            type: DataTypes.INTEGER,            
            references: {
                model: 'Contracts',
                key: 'Id'
            },
            field: 'IdContract'
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

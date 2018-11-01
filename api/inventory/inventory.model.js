export default function(sequelize, DataTypes) {
    return sequelize.define('Inventory', {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'Id'
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

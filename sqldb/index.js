/**
 * Sequelize initialization module
 */
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
    Sequelize,
    sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

//db.sequelize.sync({ logging: console.log });

// Insert models below
db.Thing = db.sequelize.import('../api/thing/thing.model');

db.PropertyType = db.sequelize.import('../api/property-type/property-type.model');
db.Property = db.sequelize.import('../api/property/property.model');
db.User = db.sequelize.import('../api/user/user.model');
db.Role = db.sequelize.import('../api/role/role.model');
db.Contract = db.sequelize.import('../api/contract/contract.model');
db.RoleOnContract = db.sequelize.import('../api/role-on-contract/role-on-contract.model');
db.Part = db.sequelize.import('../api/part/part.model');
db.InventoryPart = db.sequelize.import('../api/inventory-part/inventory-part.model');


db.Property.belongsTo(db.PropertyType, { foreignKey: 'IdPropertyType' });
db.PropertyType.hasMany(db.Property, { foreignKey: 'IdPropertyType' });

db.Property.belongsTo(db.User, { foreignKey: 'IdOwner' });
db.User.hasMany(db.Property, { foreignKey: 'IdOwner' });

db.Part.belongsTo(db.Property, { foreignKey: 'IdProperty' });
db.Property.hasMany(db.Part, { foreignKey: 'IdProperty' });

db.Contract.belongsTo(db.Property, { foreignKey: 'IdProperty' });
db.Property.hasMany(db.Contract, { foreignKey: 'IdProperty' });

db.RoleOnContract.belongsTo(db.Contract, { foreignKey: 'IdContract' });
db.Contract.hasMany(db.RoleOnContract, { foreignKey: 'IdContract' });
db.RoleOnContract.belongsTo(db.Role, { foreignKey: 'IdRole' });
db.Role.hasMany(db.RoleOnContract, { foreignKey: 'IdRole' });
db.RoleOnContract.belongsTo(db.User, { foreignKey: 'IdUser' });
db.User.hasMany(db.RoleOnContract, { foreignKey: 'IdUser' });

db.InventoryPart.belongsTo(db.Contract, { foreignKey: 'IdContract' });
db.Contract.hasMany(db.InventoryPart, { foreignKey: 'IdContract' });

db.InventoryPart.belongsTo(db.Part, { foreignKey: 'IdPart' });
db.Part.hasMany(db.InventoryPart, { foreignKey: 'IdPart' });

module.exports = db;

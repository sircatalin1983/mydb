/**
 * Sequelize initialization module
 */
import config from '../config/environment';
import Sequelize from 'sequelize';

var db = {
    Sequelize,
    sequelize: new Sequelize(config.sequelize.uri, config.sequelize.options)
};

// Insert models below
db.Thing = db.sequelize.import('../api/thing/thing.model');
db.User = db.sequelize.import('../api/user/user.model');
db.Role = db.sequelize.import('../api/role/role.model');
db.PropertyType = db.sequelize.import('../api/property-type/property-type.model');
db.Property = db.sequelize.import('../api/property/property.model');
db.Contract = db.sequelize.import('../api/contract/contract.model');

db.RoleOnContract = db.sequelize.import('../api/role-on-contract/role-on-contract.model');
db.Part = db.sequelize.import('../api/part/part.model');
db.Inventory = db.sequelize.import('../api/inventory/inventory.model');
db.InventoryPart = db.sequelize.import('../api/inventory-part/inventory-part.model');


/*
db.Inventory.hasMany(db.Part);
db.Part.belongsTo(db.Inventory); ---MANY TO MANY
db.Contract.hasMany(db.Inventory);
//db.Inventory.belongsTo(db.Contract);


//db.RoleOnContract.belongsTo(db.Contract);
//db.RoleOnContract.belongsTo(db.Role);
//db.RoleOnContract.belongsTo(db.User);
db.Contract.hasMany(db.RoleOnContract);
db.Role.hasMany(db.RoleOnContract);
db.User.hasMany(db.RoleOnContract);
//db.Property.hasMany(db.Part);
//db.Part.belongsTo(db.Property);


//db.Contract.belongsTo(db.Property);
//db.Property.hasMany(db.Contract);
//*/

//db.Property.belongsTo(db.User);
//db.User.hasMany(db.Property);
//db.Property.belongsTo(db.PropertyType);
//db.PropertyType.hasMany(db.Property);

module.exports = db;

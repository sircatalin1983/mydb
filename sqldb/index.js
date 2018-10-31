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

db.Property.belongsTo(db.User);
db.User.hasMany(db.Property);

db.Property.belongsTo(db.PropertyType);
db.PropertyType.hasMany(db.Property);

module.exports = db;

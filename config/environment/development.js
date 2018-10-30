/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
    /*
    // MongoDB connection options
    mongo: {
        useMongoClient: true,
        uri: process.env.MONGODB_URI || 'mongodb://localhost/myapp1-dev'
    },
//*/
    // Sequelize connection options
    sequelize: {
        uri: 'mysql://root:root@127.0.0.1:3306/test',
        options: {
            logging: false,
            operatorsAliases: false,
            storage: 'mysql',
            define: {
                timestamps: false
            }
        }
    },

    // Seed database on startup
    seedDB: true,
};

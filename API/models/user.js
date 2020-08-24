const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class User extends Sequelize.Model {
        static associate(db){
            User.belongsToMany(db.Box, { through: 'UserBox'});
            User.belongsTo(db.Entity);
        };
    }

    User.init({
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        mail: Sequelize.STRING,
        password: Sequelize.STRING,
        type: Sequelize.ENUM(['admin','fleet_manager'])
    }, {
        sequelize,
        modelName: 'User'
    });

    return User;
};
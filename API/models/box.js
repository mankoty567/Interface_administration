const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Box extends Sequelize.Model {
        static associate(db){
            Box.belongsToMany(db.User, { through: 'UserBox'});
        };
    }

    Box.init({
        boxId:{
            type: Sequelize.STRING(15),
            primaryKey: true
        },
        vehicle_name: Sequelize.STRING,
        registration: Sequelize.STRING,
        password: Sequelize.STRING,
        type: Sequelize.ENUM(['admin','fleet_manager'])
    }, {
        sequelize,
        modelName: 'Box'
    });

    return Box;
};
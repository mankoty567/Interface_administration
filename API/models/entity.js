const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Entity extends Sequelize.Model {
        static associate(db){
            Entity.hasMany(db.User);
        };
    }

    Entity.init({
        corporation: {
            type: Sequelize.STRING,
            primaryKey: true
        }
    }, {
        sequelize,
        modelName: 'Entity'
    });

    return Entity;
};
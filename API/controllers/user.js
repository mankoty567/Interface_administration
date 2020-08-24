const db = require('../models');
const Sequelize = require('sequelize');

module.exports = {
    
    get_all: (req, res, next) => { 
        return db.User.findAll({
            order: ['lastname']
        })
        .then((users) => res.json(users))
        .catch((err)=> next(err));
    },

    get_by_id: (req,res,next) =>{
        return db.User.findByPk(req.params.user_id)
        .then((user)=> {
            if(!user){
                throw {status: 404, message:'Requested user not found'}
            };
            res.json(user);
        })
        .catch((err) => next(err));
    },

    create: (req, res, next)=> {
        const data = {
            firstname: req.body.firstname || '',
            lastname: req.body.lastname || '',
            mail: req.body.mail || '',
            password: req.body.password
        }
        db.User.create(data)
        .then((user) => res.json(user))
        .catch((err)=> next(err));
    },

    update_by_id: (req, res, next) => {
        return db.User.findByPk(req.params.user_id)
        .then((user) =>{
            if(!user){
                throw {status: 40, message: 'Requested user not found'};
            }
            Object.assign(user, req.body);
            return user.save();
        })
        .then((user) => res.json(user))
        .catch((err) => next(err));
    },

    delete_by_id: (req,res,next) => {
        return db.User.findByPk(req.params.user_id)
        .then((user)=> {
            if(!user){
                throw { status: 404, message: 'Requested user not found'}
            };
            return user.destroy();
        })
        .then(() => res.status(200).end())
        .catch((err) => next(err));
    }
}
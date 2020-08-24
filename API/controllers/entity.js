const db = require('../models');
const Sequelize = require('sequelize');

module.exports = {
    get_all: (req,res,next) => { 
        return db.Entity.findAll()
        .then((entities) => res.json(entities))
        .catch((err) => next(err));
    },

    get_by_id: (req, res, next) => {
        return db.Entity.findByPk(req.params.entity_id)
        .then((entity) => {
            if(!entity){
                throw {status: 404, message:'Requested entity not found'}
            };
            res.json(entity);
        })
        .catch((err) => next(err));
    },

    create: (req,res,next) =>{
        data = {
            corporation: req.body.corporation
        };
        return db.Entity.create(data)
        .then((entity) => res.json(entity))
        .catch((err) => next(err));
    },

    update_by_id: (req,res,next) =>{
        return db.Entity.findByPk(req.params.entity_id)
        .then((entity)=>{
            if(!entity){
                throw {status: 404, message:'Requested entity not found'}
            }
            Object.assign(entity, req.body);
            return entity.save();
        })
        .then((entity) => res.json(entity))
        .catch((err)=> next(err));
    },

    delete_by_id: (req,res,next) => {
        return db.Entity.findByPk(req.params.entity_id)
        .then((entity)=>{
            if(!entity){
                throw {status: 404, message:'Requested entity not found'}
            }
            return entity.destroy();
        })
        .then(() => res.status(200).end())
        .catch((err) => next(err));
    }
}
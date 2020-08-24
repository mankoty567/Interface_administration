const db = require('../models');
const Sequelize = require('sequelize');

module.exports={
    get_all: (req,res,next) => {
        return db.Box.findAll()
        .then((boxes) => res.json(boxes))
        .catch((err) => next(err));
    },

    get_by_id: (req,res,next) => {
        return db.Box.findByPk(req.body.box_id)
        .then((box) => {
            if(!box){
                throw {status: 404, message:'Requested box not found'}
            };
            res.json(box);
        })
        .catch((err) => next(err));
    },

    create: (req,res,next) => {
        const data = {
            id: req.body.id || '',
            vehicle_name: req.body.vehicle_name || '',
            registration: req.body.registration || '',
            password: req.body.password || '',
            type: req.body.type || '',
        }
        return db.Box.create(data)
        .then((box) => res.json(box))
        .catch((err) => next(err));
    },

    update_by_id: (req,res,next) => {
        return db.Box.findByPk(req.params.box_id)
        .then((box) => {
            if(!box){
                throw {status:404, message:'Requested box not found'}
            }
            Object.assign(box,req.body)
        })
        .then((box) => res.json(box))
        .catch((err) => next(err));
    },

    delete_by_id: (req,res,next)=> {
        return db.box.findByPk(req.params.box_id)
        .then((box)=>{
            if(!box){
                throw {status: 404, message:'Requested box not found'}
            };
            box.destroy();
        })
        .then(() => res.status(200).end())
        .catch((err) => next(err));
    }
}
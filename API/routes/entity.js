const entity_ctrl = require('../controllers/entity');

module.exports = [
    {
        url: '/entity',
        method: 'get',
        func: entity_ctrl.get_all
    },
    {
        url: '/entity/entity_id',
        method: 'get',
        func: entity_ctrl.get_by_id
    },
    {
        url: '/entity',
        method: 'post',
        func: entity_ctrl.create
    },
    {
        url: '/entity/:entity_id',
        method: 'put',
        func: entity_ctrl.update_by_id
    },
    {
        url: '/entity/:entity_id',
        method: 'delete',
        func: entity_ctrl.delete_by_id
    }
];
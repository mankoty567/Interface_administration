const box_ctrl = require('../controllers/box');

module.exports = [
    {
        url: '/box',
        method: 'get',
        func: box_ctrl.get_all
    },
    {
        url: '/box/:box_id',
        method: 'get',
        func: box_ctrl.get_by_id
    },
    {
        url: '/box',
        method: 'post',
        func: box_ctrl.create
    },
    {
        url: '/box/:box_id',
        method: 'put',
        func: box_ctrl.update_by_id
    },
    {
        url: '/box/:box_id',
        method: 'delete',
        func: box_ctrl.delete_by_id
    }
];
const express = require('express');

const { indexView, clientView, employerView, classroomView, notificationsView,profileView, singInView,singUpView } = require('../../controllers/home-controllers');
const router = express.Router();

router.get('/', indexView);
router.get('/client', clientView)
router.get('/employers', employerView)
router.get('/classroom', classroomView)
router.get('/notifications', notificationsView)
router.get('/perfil', profileView)
router.get('/sing-in', singInView)
router.get('/sing-up', singUpView)


module.exports = {
    routes: router
}
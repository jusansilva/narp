const express = require("express");

const {
  indexView,
  employerView,
  classroomView,
  notificationsView,
  profileView,
  singInView,
  singUpView,
  createUserView,
} = require("../../controllers/home-controllers");

const {
  clientView, createClientView, createClient, updateClientView, updateClient
} = require('../../controllers/alunos-controller');
const router = express.Router();

router.get("/", indexView);
router.get("/client", clientView);
router.get("/client/create", createClientView);
router.get("/employers", employerView);
router.get("/classroom", classroomView);
router.get("/notifications", notificationsView);
router.get("/perfil", profileView);
router.get("/sing-in", singInView);
router.get("/sing-up", singUpView);

router.get("/createClient", createClientView);
router.post("/createClient", createClient);

router.get('/updateCliente/:id', updateClientView)
router.post('/updateCliente/:id', updateClient)

module.exports = {
  routes: router,
};

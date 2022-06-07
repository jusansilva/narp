const express = require('express');
const { createUser, getUser, getUserById, updateUser, deleteUser } = require('../../controllers/user-controller');
const router = express.Router();

router.get('/', getUser);
router.get('/:id', getUserById);
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)



module.exports = {
    routes: router
}
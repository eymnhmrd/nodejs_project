const express =  require('express');
const router = express.Router()
const {getContact, postContact, getContacts, updateContact, deleteContact} = require("../controllers/contactController")

router.route('/').get(getContacts);

router.route('/').post(postContact);

router.route('/:id').get(getContact);

router.route('/:id').put(updateContact);

router.route('/:id').delete(deleteContact);

module.exports = router;
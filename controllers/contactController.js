
const asyncHandler = require('express-async-handler')
const Contact = require("../models/contactModel")
//@description get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req, res) => {
    const contact = Contact.find()
    res.status(200).json( )
})

//@description create contact
//@route POST /api/contacts
//@access public

const postContact = asyncHandler( async (req, res) => {
    console.log(req.body);
    const {name, email} = req.body;
    if (!name || !email){
        res.status(400);
        throw new Error("All fields are rquired"); 
    }
    res.status(201).json({message : "create contact"})
})
//@description get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler( async (req, res) => {
    res.status(200).json({message : "get contact"})
})

//@description update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler( async (req, res) => {
    res.status(200).json({message : "update contact"})
})

//@description delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json({message : "delete contact"})
})

module.exports = { getContact, postContact , getContacts, updateContact, deleteContact }
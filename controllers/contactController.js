
const asyncHandler = require('express-async-handler')
const Contact = require("../models/contactModel")
//@description get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
})

//@description create contact
//@route POST /api/contacts
//@access public

const postContact = asyncHandler( async (req, res) => {
    console.log(req.body);
    const {name, email} = req.body;
    console.log(name + " " + email);
    if (!name || !email){
        res.status(400);
        throw new Error("All fields are rquired"); 
    }
    console.log(name + " " + email);
    try {
        const contact = await Contact.create({
            name,
            email,
        })
        console.log('Contact created successfully:', contact);
    } catch (error) {
        console.error('Error creating contact:', error);
    }
    res.status(201).json(contact)
})
//@description get contact
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler( async (req, res) => {
    // console.log(req.params.id)
    const contact = await Contact.findById(req.params.id)
    console.log(contact + "----------------");
    if (!contact)
    {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
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
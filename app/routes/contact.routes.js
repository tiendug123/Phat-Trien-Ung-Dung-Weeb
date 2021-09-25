const contacts = require("../controllers/contact.contrller");
const express = require("express");
module.exports =(app) => {
    var router = express.Router();
    rou
    //Create a new contact
    router.post("/", contacts.create);
    //Retrieve all contacts
    router.get("/",contacts.findALL);
    //Retrieve all favorite contacts
    router.get("/favorite", contacts.findALLFavorite);
    //Retrieve a single contact with id
    router.get("/:id", contacts.findOne);
    //Update a contact with id
    router.get("/:id", contacts.update);
    //Delete a contact with id
    router.get("/:id", contacts.Delete);
    //Delete all contacts
    router.delete("/", contacts.deleteALL);
    app.use("/api/contacts", router); 
};
const { handle, BadRequestError } = require("../helpers/errors");
const db = require("../models");
const Contact = db.Contact;

exports.create = async(req, res, next) => {
    if (!req.body.name) {
        return next(new BadRequestError(400, "Name cat not bt empty"));
    }
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        favorite: String(req.body.favorite).toLowerCase() === "true",

    });
    const [error, document] = await handle(contact.save());
    if (error) {
        return next(new BadRequestError(500,
            "An error occurred while creating the contact"));
    }
    return res.send(document);
};
//
exports.findALL = async(req, res, next) => {
    const condition = {};
    const name = req.query.name;
    if (name) {
        condition.name = { $regex: new RegExp(name), $options: "i" };
    }
    const [error, document] = await handle(contact.findOne(condition));
    if (error) {
        return next(new BadRequestError(500,
            'Error retrieving contact with id=${req.params.id}'));
    }
    if (!document) {
        return next(new BadRequestError(404, "Contact not found"));
    }
    return res.send(document);
};
exports.create = async(req, res) => {
    res.send({ message: " create handler " });
};
//
exports.update = async(req, res, next) => {
    if (!req.body) {
        return next(new BadRequestError(400,
            "Data to update can not be empty"));
    }
    const condition = {
        _id: req.params.id,
    };
    const [error, document] = await handle(
        Contact.findOneAndUpdate(condition, req.body, {
            new: true,
        })
    );
    if (error) {
        return next(new BadRequestError(500,
            'Error updating contact with id=${req.params.id}'));
    }
    if (!document) {
        return next(new BadRequestError(404, " Contact not found"));
    }
    return res.send({ message: "Contact was update successfully", });
};
//
exports.delete = async(req, res, next) => {
    const condition = {
        _id: req.params.id,
    };
    const [error, document] = await handle(
        Contact.findOneAndDelete(condition)
    );
    if (error) {
        return next(new BadRequestError(500,
            'Could not delete contact with id=${req.params.id}'));
    }
    if (!document) {
        return next(new BadRequestError(404, "Contact not found"));
    }
    return res.send({ message: "Contact was deleted successfully", });
};
exports.findALLFavorite = async(req, res, next) => {
    const [error, document] = await handle(
        Contact.find({ favorite: true, })
    );
    if (error) {
        return next(new BadRequestError(500,
            "An error occurred while retrieving favorite contacts"));
    }
    return res.send(document);
};
//
exports.deleteALL = async(req, res, next) => {
    const [error, data] = await handle(
        Contact.deleteMany({})
    );
    if (error) {
        return next(new BadRequestError(500,
            "An error occurred while removing all contacts"));
    }
    return res.send({
        message: '${data.deleteCount} contacts were deleted successfully',
    });
};
// Retrieve all contacts of a user from the datebase.
exports.findALL = async(req, res) => {
    res.send({ message: "findOne handler " });
};
// Update a contact by the id in the request
exports.update = async(req, res) => {
    res.send({ message: "Update handler" });

};
//Delete a contact with the specified id in the request
exports.delete = async(req, res) => {
    res.send({ message: "deleteALL handler" });
};
//Find all favorite contacts of a user
exports.findALLFavorite = async(req, res) => {
    res.send({ message: " findALLFavorite handler" });
};
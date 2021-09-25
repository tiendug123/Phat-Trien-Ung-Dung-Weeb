exports.create = async  (req, res) => {
    res.send({ message: " create handler "});
};
// Retrieve all contacts of a user from the datebase.
exports.findALL =  async  (req, res) => {
    res.send({message: "findOne handler "});
};
// Update a contact by the id in the request
exports.update = async (req, res) => {
    res.send({ message: "Update handler"});

};
//Delete a contact with the specified id in the request
exports.delete = async(req, res) => {
    res.send({ message: "deleteALL handler"});
};
//Find all favorite contacts of a user
exports.findALLFavorite = async(req, res) => {
    res.send({ message: " findALLFavorite handler"});
};

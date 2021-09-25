module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            name: {
                type: String,
                require: [true, "Contact name is  required"],
            },
            email: {
                type: String,
                trim: true,
                lowercase: Boolean,
            },
            address: String,
            phone: String,
            favorite: Boolean,
        },
        { timestamps: true}
    );
    schema.method("toJSON", function (){
        const { __v, id, ...Object} = this.toObject();
        Object.id=_id;
        return Object;
    });
    return mongoose.model("contact", schema);
};
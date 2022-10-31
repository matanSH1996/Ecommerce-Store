const {Schema, model} = require("mongoose")

const cartSchema = new Schema ({
    userID: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }, createdAt : {
        type: Date,
        default: Date.now
    }
})

const Cart = model('cart', cartSchema)
module.exports = Cart
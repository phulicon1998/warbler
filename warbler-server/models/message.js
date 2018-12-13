const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        maxLength: 160,
    },
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const Message = mongoose.model("Message", messageSchema);

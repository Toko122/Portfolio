import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {type: String, max: 20, required:true},
    email: {type: String, required:true},
    message: {type: String, max: 300, required: true}
})

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema)
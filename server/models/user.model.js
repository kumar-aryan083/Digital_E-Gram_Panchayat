import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    age:{
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: String,
    position: {
        type: String,
        default: "user"
    },
    applicationIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Application'
    }]
}, {timestamps:true});

export default mongoose.model("User", userSchema);
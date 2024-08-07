import mongoose from 'mongoose'

const staffSchema = new mongoose.Schema({
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
    applicationIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Application',
        required: true
    }]
}, {timestamps:true});

export default module.exports("Staff", staffSchema);
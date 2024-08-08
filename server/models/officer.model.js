import mongoose from 'mongoose'

const officerSchema = new mongoose.Schema({
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
    // applicationIds: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Application',
    //     required: true
    // }],
    // serviceIds: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Service',
    //     required: true
    // }]
}, {timestamps:true});

export default mongoose.model("Officer", officerSchema);
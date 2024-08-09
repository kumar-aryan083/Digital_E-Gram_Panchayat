import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const officerSchema = new Schema({
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
        default: "officer"
    },
    applicationIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Application',
    }],
    serviceIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Service',
    }]
}, {timestamps:true});

export default mongoose.model("Officer", officerSchema);
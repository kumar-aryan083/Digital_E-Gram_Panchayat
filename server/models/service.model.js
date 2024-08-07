import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    vacancies:[{
        type:String,
        required: true,
    }],
    officerId:{
        type: Schema.Types.ObjectId,
        ref: 'Officer',
        required: true
    },
}, {timestamps:true});

export default module.exports("Service", serviceSchema);
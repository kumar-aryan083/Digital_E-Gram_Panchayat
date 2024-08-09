import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    vacancies:{
        type: Number,
        required: true,
    },
    officerId:{
        type: Schema.Types.ObjectId,
        ref: 'Officer',
        required: true
    },
}, {timestamps:true});

export default mongoose.model("Service", serviceSchema);
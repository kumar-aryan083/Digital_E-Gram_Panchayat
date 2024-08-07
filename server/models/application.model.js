import mongoose from 'mongoose'

const applicationSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    serviceId: {
        type: Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {timestamps:true});

export default module.exports("Application", applicationSchema);
import express from 'express'
import mongoose from 'mongoose'
import chalk from 'chalk'
import userRouter from './routers/user.router.js'
import officerRouter from './routers/officer.router.js'
import staffRouter from './routers/staff.router.js'
import cors from 'cors'
import env from 'dotenv'
import cookieParser from 'cookie-parser'

env.config();

const app = express();

const allowedWeb = {
    origin: 'http://localhost:3000',
    methods: "PUT, GET, POST, PATCH, DELETE, HEAD",
    credentials: true
}
app.use(cors(allowedWeb));
app.use(express.json());
app.use(cookieParser());
app.use('/api/user', userRouter);
app.use('/api/officer', officerRouter);
app.use('/api/staff', staffRouter);

const dbConnection = ()=>{
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log(chalk.green.inverse("db connected successfully..."));
    }).catch((err)=>{
        console.log(chalk.red.inverse("error in dbConnection..."));
    })
}

app.listen(process.env.PORT,(err)=>{
    dbConnection();
    console.log(chalk.yellow.inverse("server is live"));
});
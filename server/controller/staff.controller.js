import staffModel from "../models/staff.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async(req, res)=>{
    try{
        const staffData = req.body;
        const existingStaff = await staffModel.findOne({username: staffModel.username});
        if(existingStaff){
            res.status(403).json({
                success: false,
                message: "staff already exists"
            })
        }else{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(staffData.password, salt);
            const newStaff = new staffModel({...staffData, password: hash});
            await newStaff.save();
            const {__v, password, ...others} = newStaff._doc;
            res.status(200).json({
                success: true,
                message: "staff created successfully",
                ...others
            })
        }
    }catch(e){
        console.log(e);
    }
}
export const login = async(req, res)=>{
    try{
        const loginData = req.body;
        const staffData = await staffModel.findOne({username: loginData.username});
        if(!staffData){
            res.status(404).json({
                success: false,
                message: "staff doesn't exists"
            })
        }else{
            const {__v, password, ...others} = staffData._doc;
            if(bcrypt.compareSync(loginData.password, staffData.password)){
                const token = jwt.sign({id: staffData._id}, process.env.JWT_SECRET);
                res.cookie("token", token, {httpOnly: true}).status(200).json({
                    success: true,
                    message: "logged in successfully",
                    "token": token,
                    ...others
                })
            }else{
                res.status(401).json({
                    success: false,
                    message: "Incorrect password",
                })
            }
        }
    }catch(e){
        console.log(e);
    }
}
export const updateApplication = (req, res)=>{
    res.send("staff update-application end-point");
}
import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async(req, res)=>{
    try{
        const bodyData = req.body;
        const existingUser = await userModel.findOne({username: userModel.username});
        if(existingUser){
            res.status(403).json({
                success: false,
                message: "user already exists"
            })
        }else{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(bodyData.password, salt);
            const newUser = new userModel({...bodyData, password: hash});
            await newUser.save();
            const {__v, password, ...others} = newUser._doc;
            res.status(200).json({
                success: true,
                message: "user created successfully",
                ...others
            })
        }
    }catch(e){
        console.log(e);
    }
}
export const login = async(req, res)=>{
    try{
        const bodyData = req.body;
        const userData = await userModel.findOne({username: bodyData.username});
        if(!userData){
            res.status(404).json({
                success: false,
                message: "user doesn't exists"
            })
        }else{
            const {__v, password, ...others} = userData._doc;
            if(bcrypt.compareSync(bodyData.password, userData.password)){
                const token = jwt.sign({id: userData._id}, process.env.JWT_SECRET);
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
export const searchServices = (req, res)=>{
    res.send("search-services end-point");
}
export const applyServices = (req, res)=>{
    res.send("apply-services end-point");
}
export const applicationStatus = (req, res)=>{
    res.send("my applicatoin status end-point");
}
export const profile = (req, res)=>{
    res.send("my profile end-point");
}
import officerModel from "../models/officer.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const register = async(req, res)=>{
    const officerData = req.body;
    const existingOfficer = await officerModel.findOne({username: officerData.username});
    if(existingOfficer){
        res.status(403).json({
            success: false,
            message: "user already exists"
        })
    }else{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(officerData.password, salt);
        const newOfficer = new officerModel({...officerData, password: hash});
        await newOfficer.save();
        const {__v, password, ...others} = newOfficer._doc;
        res.status(200).json({
            success: true,
            message: "officer created successfully",
            ...others
        })
    }
}
export const login = async(req, res)=>{
    const loginData = req.body;
    const officerData = await officerModel.findOne({username: loginData.username});
    if(!officerData){
        res.status(404).json({
            success: false,
            message: "officer doesn't exists"
        })
    }else{
        const {__v, password, ...others} = officerData._doc;
        if(bcrypt.compareSync(loginData.password, officerData.password)){
            const token = jwt.sign({id: officerData._id}, process.env.JWT_SECRET);
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
}
export const createServices = (req, res)=>{
    res.send("officer create-service end-point");
}
export const updateServices = (req, res)=>{
    res.send("officer update-services end-point");
}
export const deleteServices = (req, res)=>{
    res.send("officer delete-services end-point");
}
export const updateApplication = (req, res)=>{
    res.send("officer update-application end-point");
}
import officerModel from "../models/officer.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import serviceModel from '../models/service.model.js'

export const register = async(req, res)=>{
    try{
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
    }catch(e){
        console.log(e);
    }
}
export const login = async(req, res)=>{
    try{
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
    }catch(e){
        console.log(e);
    }
}
export const newServices = async(req, res)=>{
    try{
        // res.send(req.user);
        const id = req.user.id;
        const officerData = await officerModel.findOne({_id: id});
        // console.log(officerData);
        if(officerData.position!='officer'){
            res.status(403).json({
                success: false,
                message: "only officers has the access for this api"
            })
        }else{
            const bodyData = req.body;
            const newService = new serviceModel({...bodyData, officerId: officerData._id});
            await newService.save();
            officerData.serviceIds.push(newService._id);
            officerData.save();
            res.status(200).json({
                success: true,
                message: "service created successfully",
                ...newService._doc
            })
        }
    }catch(e){
        console.log(e);
    }
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
import jwt from 'jsonwebtoken';

export const middleware = (req, res, next) =>{
    const token = req.headers.token;
    if(!token){
        return next(res.json({
            error: 404,
            message: 'token not found'
        }))
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err){
            return next(res.json({
                error: 401,
                message: "wrong token"
            }))
        }else{
            req.user = user;
            next();
        }
    })
}
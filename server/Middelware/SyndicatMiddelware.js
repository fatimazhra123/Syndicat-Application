
const userModel = require('../Models/UserModel');
const jwt = require('jsonwebtoken')
const cookie = require('cookie-parser')

const syndicatMiddleware = async (req,res,next) => {
    
    const token = req.cookies['access_token']
    console.log(token);
    
    const validateToken = await jwt.verify(token, process.env.JWT_SECRET)
    
    // console.log('uyfuykf'+ validateToken);

        // after retrieve id we need to ckeck role if is Syndicat :
        const user = await userModel.findOne({_id: validateToken.id})
        console.log('zekneklkz'+user);
        const roleName = user.Role 
        if(roleName !== 'Syndicat'){
            res.status(400)
               .json({message: "ACCES DENIED !!"})
        } 
        next()
    }


module.exports = syndicatMiddleware;

const user = require('../Models/UserModel');

const syndicatMiddleware = async (req,res,next) => {

        // after retrieve id we need to ckeck role if is Syndicat :
        const user = await user.findById({_id: req.user._id})
        const roleName = user.Role 
        if(roleName !== 'Syndicat'){
            res.status(400)
               .json({message: "ACCES DENIED !!"})
        } 
        next()
    }


module.exports = syndicatMiddleware;
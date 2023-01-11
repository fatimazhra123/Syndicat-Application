const UserModel = require('../Models/UserModel')
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken')
const sendEmail = require('../Utils/sendEmail');
const genToken = require('../Utils/generateToken');
const cookie = require('cookie-parser')


/**
 * methode => post
 * url => api/auth/login
 * access => public
 */
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send('please add all fildes')


     // check for Email if already ixist 
    const user = await UserModel.findOne( { email })
    if (!user) return res.status(400).send('User dose not exist')
    console.log(user)


     // hash password :
    const compPassword = await bcrypt.compare(password, user.password)
    

    if (user && compPassword) {
        if (user.Status == false) {
           return res.status(400).send("your email is not validated")
        }
       
        const token = genToken(user.id)
        res.cookie('access_token', token, {
            expiresIn:'1d'
        })
            .status(200).json({
                id: user.id,
                Username: user.Username,
                email: user.email,
                message: 'user is logened',
                token: token
            })
    } else {
        res.status(400)
            .send('Opps!! Email or Password is not correct')
    }
}

/**
 * methode => post
 * url => api/auth/register
 * access => public
 */
const register = async (req, res) => {
    const {Username,email, password,Role} = req.body

    if (!Username || !email || !password ) {
        res.status(400).send('please add all fields')
    }

    const emailExist = await UserModel.findOne({ where: { email } })
    if (emailExist) {
        return res.status(400).send('im sorry Email has been already taken')
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt);


    const data = {
        Username,
        email,
        password: hashPassword,
        ValidateToken: crypto.randomBytes(64).toString('hex'),
        Role
    }

    const user = await UserModel.create(data)

    const url = `<h2 >Please click Her For validate Your Email <a href="http://localhost:8080/api/auth/verifierEmail/${data.ValidateToken}">validation</a></h2>`
    const subject = 'Email Validation'
    sendEmail(data.email, data.ValidateToken, subject, url)

    if (user) {
        
        res.status(201).json({
            user,
            mess: 'User create successfuly Please check your email for validation'
        })
    } else {
        res.status(400).send('somthing is wrong')
    }
}


/**
 * methode => get
 * url => api/auth/verifierEmail/:token
 * access => public
 */

const verifierEmail = async (req, res) => {
    const token = req.params.token
    const user = await UserModel.findOne({ where: { ValidateToken: token } })

    if (user) {
        user.Status = true
        user.ValidateToken = null
        await user.save()
        res.status(201).send('Validation Saccssefuly')
    } else {
        throw new Error('somthing is wrong')
    }
}

/**
 * methode => post
 * url => api/auth/logout
 * access => public
 */
const logout = async (req, res) => {

    const token = req.cookies.access_token;
    console.log(token);
    if (!token) {
        const error = new Error("Invalid token");
        error.status = 400;

    }
    res.clearCookie("access_token", { httpOnly: true })
        .localStorage.clear()
        .status(200).json({
            success: true,
        });


}


module.exports = { login, register, verifierEmail, logout } 
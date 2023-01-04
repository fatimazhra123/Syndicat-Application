const nodemailer = require('nodemailer')


const sendEmail = (email, token, subject, url) => {
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'fatimazahrabouamoud@gmail.com',
            pass: 'pxqzrksinikwjvat'
        }
    });

    const mailDetails = {
        from: 'fatimazahrabouamoud@gmail.com',
        to: email,
        subject: subject,
        text: 'hello World!!!!',
        html: url
    };

    try {
        mailTransporter.sendMail(mailDetails)
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = sendEmail
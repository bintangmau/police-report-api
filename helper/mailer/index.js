const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'musitodigital@gmail.com',
        pass: 'efkmawxieeplytly'
    }
});




module.exports = {
    transporter
}
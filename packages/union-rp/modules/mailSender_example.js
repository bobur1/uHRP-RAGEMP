module.exports.Init = () => {
    mp.mailer = {};
    mp.mailer.sendMail = (to, subject, message) => {
        var nodemailer = require("nodemailer");
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'YOUR-EMAIL@gmail.com',
                pass: 'YOUR GMAIL APP PASSWORD'
            }
        });
        message += "<br /><br /> Best regards, UNTAMEDHero Roleplay.";
        const mailOptions = {
            from: 'no-reply@untamedhero.com',
            to: to,
            subject: subject,
            html: message
        };
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) console.log(err)
            else console.log(info);
        });
    }
}

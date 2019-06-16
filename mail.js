const express = require('express');
let emailRouter = express.Router();
const nodemailer = require('nodemailer');
//const xoauth2 = require('xoauth2');

/*var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'perupark.inc@gmail.com',
            clientId: '727132791123-epcus09drqgivobqkfhem3oe4t310351.apps.googleusercontent.com',
            clientSecret: 'p5tISO8Wbg3iEldyQDfPWEgy',
            refreshToken: '1/dH-KmR73Yzw1XA19Vcgi7NXZRCMDIwnwmkQdnsgQj4k'
        })
    }
})*/
var transporter = nodemailer.createTransport({      
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      user: "perupark.inc@gmail.com",
      clientId: "727132791123-epcus09drqgivobqkfhem3oe4t310351.apps.googleusercontent.com",
      clientSecret: "p5tISO8Wbg3iEldyQDfPWEgy",
      refreshToken: "1/dH-KmR73Yzw1XA19Vcgi7NXZRCMDIwnwmkQdnsgQj4k"                              
    }
  });

emailRouter.post('/mail',(req,res)=>{

    var mailOptions = {
        from: 'PeruPark.inc <perupark.inc@gmail.com>',
        to: 'info.perupark@gmail.com',
        subject: 'Nueva Subscripción',
        text: `Suscripción de ${req.body.email}`,
    }
    transporter.sendMail(mailOptions, function (err) {
        if(err){
            console.log(err);
            res.status(400).send({error:'Error al enviar correo.'})
            return;
        } else {
            res.status(200).send({success:'Correo enviado.'});
            console.log('Email Sent');
        }
    })
});

/*
var mailOptions = {
    from: 'PeruPark.inc <perupark.inc@gmail.com>',
    to: 'miguel.9dc@gmail.com',
    subject: 'Nodemailer test',
    text: 'Suscripción de nueva',
}
debugger
transporter.sendMail(mailOptions, function (err,res) {
    
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Email Sent');
    }
})
*/

module.exports = emailRouter;
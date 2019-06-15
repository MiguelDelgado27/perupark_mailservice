//Dependencies
const express = require('express');
let emailRouter = express.Router();

module.exports = emailRouter;

emailRouter.post('/contact',(req,res) => {
    if(req.body.email != null){
        res.mailer.send('email-contact',{
            to: "info.perupark@gmail.com",
            subject: `Suscripción de ${req.body.email}`,
            message: 'Un usuario se ha suscrito desde la landing page'
        },(err) => {
            if (err) {
                console.log(err);
                res.status(400).send({error:'Error al enviar correo.'})
                return;
            }
            res.status(200).send({success:'Correo enviado.'});
        });
    }
});
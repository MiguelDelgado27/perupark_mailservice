const express = require('express');
let emailRouter = express.Router();
const Resend = require('resend').Resend;
const resend = new Resend('re_HFASc38k_FFHh5RkGYn3QaJ5WRDVAuWvW');


emailRouter.post('/mail',(req,res)=>{
    (async function () {
        try {
          const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['miguel.9dcu@gmail.com'],
            subject: 'Hello World',
            html: `<strong>It works!  ${req.body.email} </strong>`,
          });
      
          console.log(data);
          res.status(200).send({success:'Correo enviado.'});

        } catch (error) {
          console.error(error);
          es.status(400).send({error:'Error al enviar correo.'})
        }
      })();
});

module.exports = emailRouter;
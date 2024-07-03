/*Aplicacion para enviar un gmail preguntando por que sucedio con la materia con nodejs y nodemailer*/

// Importamos los modulos necesarios

import express from "express";
import nodemailer from "nodemailer";

import dotenv from "dotenv";
// Creamos una instancia de express

dotenv.config();


const app = express();

// Configuramos el puerto

const PORT = 3000;

const name = 'Juanito'

// Configuramos el nodemailer
console.log(process.env.EMAIL)
console.log(process.env.PSW_EMAIL)
const Transporter = nodemailer.createTransport({
  service: 'gmail',
  user: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PSW_EMAIL,
  },
});

// Configuramos la ruta

app.get('/', (req, res) => {
    const mailOptions = {
      from: process.env.EMAIL,
      to: 'arceprogramando@gmail.com',
      subject: 'Consulta sobre la clase de programación',
      html: `
        <body style="font-family: 'Poppins', Arial, sans-serif">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="center" style="padding: 20px;">
                        <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
                            <!-- Header -->
                            <tr>
                                <td class="header" style="background-color: #345C72; padding: 40px; text-align: center; color: white; font-size: 24px;">
                                    Pregunta sobre la clase de programación
                                </td>
                            </tr>

                            <!-- Body -->
                            <tr>
                                <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                                    Hola, mi nombre es ${name}. Quería hacer una consulta acerca de la clase de programación.
                                </td>
                            </tr>

                            <!-- Call to action Button -->
                            <tr>
                                <td style="padding: 0px 40px 0px 40px; text-align: center;">
                                    <!-- CTA Button -->
                                    <table cellspacing="0" cellpadding="0" style="margin: auto;">
                                        <tr>
                                            <td align="center" style="background-color: #345C72; padding: 10px 20px; border-radius: 5px;">
                                            <a/ hreef="https://www.github.com/arceprogramando" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold;">Ver mi Github</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.buzzfeed.com%2Fbuzzfeed-static%2Fstatic%2F2019-02%2F5%2F12%2Fasset%2Fbuzzfeed-prod-web-05%2Fsub-buzz-14939-1549386217-3.jpg&f=1&nofb=1&ipt=c97a92fce0909e1238ecacb666bfcbc970ca39201b4b1980e0db9548c05e9b61&ipo=images" alt="perrito" style="width: 100%; height: auto;">
                            <!-- Footer -->
                            <tr>
                                <td class="footer" style="background-color: #333333; padding: 40px; text-align: center; color: white; font-size: 14px;">
                                    &copy; 2024 | Your brand name
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
      `,
    };
    
    Transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            res.status(200).send('Email enviado correctamente');
        }
    });
});

// Iniciamos el servidor

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});


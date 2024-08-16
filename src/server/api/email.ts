"use server";

import { Resend } from "resend";
import getBaseURL from "~/utils/cn";

const resend = new Resend(process.env.RESEND_API_KEY);
const sender = process.env.NEXT_PUBLIC_EMAIL_FROM!;

const domain = getBaseURL();

export const sendInternalEmailToSales = async (
  email: string,
  name: string,
  phone: string,
  message: string,
  service: string,
) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JGM Serviços - Solicitação de Orçamento</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 20px; }
        .logo { max-width: 200px; }
        .content { background-color: #f4f4f4; padding: 20px; border-radius: 10px; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        .social-links { margin-top: 15px; }
        .social-links a { margin: 0 10px; text-decoration: none; color: #0066cc; }
        .fa { padding: 20px; font-size: 30px; width: 50px; text-align: center; text-decoration: none; color: #0066cc; }
        .fa:hover { opacity: 0.7; }
      </style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </head>
    <body>
      <div class="container" 
        style="
          padding: 10px 0px;
          font-size: 20px;
          font-family: Poppins, Helvetica, Arial, sans-serif;
          border-radius: 5px;
        ">
        <div class="header">
          <img src="${domain}/logo.png?${new Date().getTime()}" alt="JGM Serviços" class="logo" width="200" height="200">
        </div>
        <div class="content">
          <h2>Nova Solicitação de Orçamento</h2> 
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Serviço:</strong> ${service}</p>
          <h4>Mensagem:</h4>
          <p>${message}</p>
          <h4>Data e hora de solicitação: </h4><span>${new Date().toLocaleString("pt-BR")}</span>
        </div>
        <div class="footer">
          <p>© 2024 JGM Serviços. Todos os direitos reservados.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const { data, error } = await resend.emails.send({
    from: sender,
    to: email,
    bcc: "diegoafaguiar@gmail.com",
    subject: `JGM Serviços - Solicitação de orçamento - ${name}`,
    html: htmlContent,
  });

  if (error) {
    console.error("Erro ao enviar e-mail:", error);
    return null;
  }

  return data;
};

export const sendConfirmationEmailToClient = async (
  email: string,
  name: string,
  service: string,
) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JGM Serviços - Confirmação de Solicitação de Orçamento</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; margin-bottom: 20px; }
        .logo { max-width: 200px; }
        .content { background-color: #f4f4f4; padding: 20px; border-radius: 10px; }
        .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        
        .fa { padding: 20px; font-size: 30px; width: 50px; text-align: center; text-decoration: none; color: #0066cc; }
        .fa:hover { opacity: 0.7; }
        
        .cta-button { display: inline-block; padding: 10px 20px; background-color: #0066cc; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 15px; }
        .cta-button:hover { background-color: #004080; color: #ffffff; }

        .social-links {
          background: #0066cc;
          padding: 2rem 0 1rem;
        }
        .social-links a {
          color: white;
          font-size: 1.2rem;
          border-radius: 5px;
        }

        .social-links i.fa {
          font-size: 1.4rem;
          padding-right: 0.8rem;
          padding-bottom: 1rem;
        }

        @media screen and (max-width: 39.9375em) {
          .social-links {
            padding: 2rem 0;
          }
          .social-links i.fa {
            font-size: 2rem;
            display: block;
            padding-right: 0;
            padding-bottom: 0.5rem;
          }
          .social-links a {
            font-weight: bold;
          }
          .social-links .columns {
            margin: 1rem 0;
          }
          .social-links .mobile-stack {
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-direction: column;
                -ms-flex-direction: column;
                    flex-direction: column;
          }
        }
      </style>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
    </head>
    <body>
      <div class="container" 
        style="
          padding: 10px 0px;
          font-size: 16px;
          font-family: Poppins, Helvetica, Arial, sans-serif;
          border-radius: 5px;
        ">
        <div class="header">
          <img src="${domain}/logo.png?${new Date().getTime()}" alt="JGM Serviços" class="logo" width="200" height="200">
        </div>
        <div class="content">
          <h2>Confirmação de Solicitação de Orçamento</h2> 
          <p>Olá ${name},</p>
          <p>Agradecemos pelo seu interesse nos serviços da JGM. Recebemos sua solicitação de orçamento para o serviço de <strong>${service}</strong>.</p>
          <p>Nossa equipe de vendas entrará em contato em breve para fornecer todas as informações necessárias e auxiliar na execução do serviço.</p>
          <p>Detalhes da sua solicitação:</p>
          <ul>
            <li><strong>Serviço:</strong> ${service}</li>
            <li><strong>Data e hora da solicitação:</strong> ${new Date().toLocaleString("pt-BR")}</li>
          </ul>

          <p>Enquanto isso, que tal conhecer mais sobre a JGM Serviços? Siga-nos nas redes sociais para ficar por dentro das nossas novidades, dicas e projetos incríveis!</p>
          <p style="text-align: center;">
            <a href="https://instagram.com/jgmservico" class="cta-button" style="color: #fff;"> →  Siga-nos nas Redes Sociais</a>
          </p>

          <p>Se tiver alguma dúvida ou informação adicional, não hesite em nos contatar.</p>
          <p>Agradecemos pela sua preferência!</p>
        </div>
        <div class="footer">
          
          <div class="social-links">
            <div class="row">
              <div class="small-6 medium-3 columns text-center mobile-stack">
                <a href="https://instagram.com/jgmservico"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a>
              </div>
              <div class="small-6 medium-3 columns text-center mobile-stack">
                <a href="https://wa.me/5521964127226"><i class="fa fa-whatsapp" aria-hidden="true"></i>WhatsApp</a>
              </div>
              <div class="small-6 medium-3 columns text-center mobile-stack">
                <a href="https://facebook.com/jgmservicos"><i class="fa fa-facebook" aria-hidden="true"></i>Facebook</a>
              </div>
             </div>
          </div>

          <p>© 2024 JGM Serviços. Todos os direitos reservados.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const { data, error } = await resend.emails.send({
    from: sender,
    to: email,
    bcc: "diegoafaguiar@gmail.com",
    subject: `JGM Serviços - Confirmação de Solicitação de Orçamento`,
    html: htmlContent,
  });

  if (error) {
    console.error("Erro ao enviar e-mail de confirmação:", error);
    return null;
  }

  return data;
};

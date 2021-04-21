import { Injectable, BadRequestException } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer'
import { MailSentDto } from './interface/mail-sent.dto';
import { MailDto } from './interface/mail.dto';
import { environment } from '../enviroments/enviroment';

@Injectable()
export class MailerService {
    private nodeMailerTransport: Mail;
    constructor() {
        this.nodeMailerTransport = createTransport({
            host: 'smtp.elasticemail.com',
            port: 2525,
            auth: {
                user: 'ticowrc10@gmail.com',
                pass: environment.SMTPKey
            }
        })
    }

    sendMail(mailDto: MailDto): Promise<MailSentDto> {
        const {name, from, text} = mailDto;
        console.log(name);
        console.log(from);
        
        const info = ({
            from: `"${name}" ticowrc10@gmail.com`, // sender address
            to: "roberthtorres40@yahoo.es, mauro.02.10.1994@gmail.com, lh94am@gmail.com", // list of receivers
            subject: "Page contact form", // Subject line
            text: `${name} con correo ${from} ha enviado un correo mediante el formulario de la página de foragua, a continuación su contenido
            
            ${text}
            `
          });
          try {
              return this.nodeMailerTransport.sendMail(info);              
          } catch (error) {
              throw new BadRequestException({message: error})
          }
    }
}

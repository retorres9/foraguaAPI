import { Injectable, BadRequestException } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer'
import { MailSentDto } from './interface/mail-sent.dto';
import { MailDto } from './interface/mail.dto';

@Injectable()
export class MailerService {
    private nodeMailerTransport: Mail;
    constructor() {
        this.nodeMailerTransport = createTransport({
            host: 'smtp.elasticemail.com',
            port: 2525,
            auth: {
                user: 'ticowrc10@gmail.com',
                pass: 'E237593312399839A78429C93F0D2E52E103'
            }
        })
    }

    sendMail(mailDto: MailDto): Promise<MailSentDto> {
        const {name, from, text} = mailDto;
        console.log(name);
        console.log(from);
        
        const info = ({
            from: `"${name}" ticowrc10@gmail.com`, // sender address
            to: "roberthtorres40@yahoo.es", // list of receivers
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

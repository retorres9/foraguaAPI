import { Body, Controller, Post } from '@nestjs/common';
import { MailSentDto } from './interface/mail-sent.dto';
import { MailDto } from './interface/mail.dto';
import { MailerService } from './mailer.service';


@Controller('mailer')
export class MailerController {
    constructor(private mailService: MailerService) {
        
    }
    @Post()
    sendMail(@Body()mailDto: MailDto): Promise<MailSentDto> {
        return this.mailService.sendMail(mailDto);
    }
}

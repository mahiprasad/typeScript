import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'node:path/win32';

@Controller('email')
export class EmailController {
    constructor(private mailerService: MailerService) {}

    @Get('plain-text-email')
    async plainTextEmail(@Query('toemail') toemail){
        await this.mailerService.sendMail({
            to: toemail,
            from: 'mahiprasad264@gmail.com',
            subject: 'This mail is just an example.',
            text: 'Welcome'
        });
        return 'success';
    }

    

    @Post('html-email')
    async postHtmlEmail(@Body() payload){
        // const otp = Math.floor(100000+Math.random()*90000);
        const res = await this.mailerService.sendMail({
            to: payload.toemail,
            from: 'mahiprasad264@gmail.com',
            subject: 'This mail is just an example.',
            template: 'sample',
            context: {
                sample: payload,
            }
        });
        console.log(res);
        return 'success';
    }

    @Get('file-attach')
    async fileAttachment(@Query('toemail') toemail){
        const res = await this.mailerService.sendMail({
            to: toemail,
            from: 'mahiprasad264@gmail.com',
            subject: 'This mail is just an example.',
            html: '<h1> File Attachment </h1>',
            attachments: [{
                path: join(__dirname, 'mails', 'someImg.png'),
                filename: 'someImg',
                contentDisposition: 'attachment',
            }],
        }); 
        console.log(res);
        return "successfully sent attachment";
       
    }
}



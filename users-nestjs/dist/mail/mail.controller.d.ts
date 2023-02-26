import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailController {
    private mailerService;
    constructor(mailerService: MailerService);
    plainTextEmail(toemail: any): Promise<string>;
    postHtmlEmail(payload: any): Promise<string>;
    fileAttachment(toemail: any): Promise<string>;
}

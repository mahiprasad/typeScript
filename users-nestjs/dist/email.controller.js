"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailController = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const win32_1 = require("node:path/win32");
let EmailController = class EmailController {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async plainTextEmail(toemail) {
        await this.mailerService.sendMail({
            to: toemail,
            from: 'mahiprasad264@gmail.com',
            subject: 'This mail is just an example.',
            text: 'Welcome'
        });
        return 'success';
    }
    async postHtmlEmail(payload) {
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
    async fileAttachment(toemail) {
        const res = await this.mailerService.sendMail({
            to: toemail,
            from: 'mahiprasad264@gmail.com',
            subject: 'This mail is just an example.',
            html: '<h1> File Attachment </h1>',
            attachments: [{
                    path: (0, win32_1.join)(__dirname, 'mails', 'someImg.png'),
                    filename: 'someImg',
                    contentDisposition: 'attachment',
                }],
        });
        console.log(res);
        return "successfully sent attachment";
    }
};
__decorate([
    (0, common_1.Get)('plain-text-email'),
    __param(0, (0, common_1.Query)('toemail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "plainTextEmail", null);
__decorate([
    (0, common_1.Post)('html-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "postHtmlEmail", null);
__decorate([
    (0, common_1.Get)('file-attach'),
    __param(0, (0, common_1.Query)('toemail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "fileAttachment", null);
EmailController = __decorate([
    (0, common_1.Controller)('email'),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], EmailController);
exports.EmailController = EmailController;
//# sourceMappingURL=email.controller.js.map
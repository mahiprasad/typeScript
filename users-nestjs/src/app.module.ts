import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailController } from './mail/email.controller';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    UsersModule,
    MailerModule.forRoot({
      transport:{
        host:'smtp.sendgrid.net', //SMTP
        //needed credentials for sending email
        auth:{
          user:'apikey',
          pass:'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',
        }
      },
      template:{
        dir: join(__dirname, 'mails'),
        adapter: new HandlebarsAdapter(),
      }
    }),
  ],
  controllers: [EmailController],
  providers: [],
})
export class AppModule {}

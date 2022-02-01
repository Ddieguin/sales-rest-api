import nodemailer, { Transporter } from 'nodemailer';
import {
    HandlebarsMailTemplate,
    IparseMailTemplate,
} from './handlebars-mail-template';
import { transporterConfig } from './mail-config';

interface ImailContact {
    name: string;
    email: string;
}

interface IsendMail {
    to: ImailContact;
    from?: ImailContact;
    subject: string;
    templateData: IparseMailTemplate;
}

export class MailService {
    private client: Transporter;

    constructor() {
        const transporter = nodemailer.createTransport(transporterConfig);
        this.client = transporter;
    }

    async sendMail({
        to,
        subject,
        from,
        templateData,
    }: IsendMail): Promise<void> {
        const message = await this.client.sendMail({
            from: {
                name: from?.name || 'sales-api',
                address: from?.email || 'suport@sales-api.com.br',
            },
            to: {
                name: to.name,
                address: to.email,
            },
            subject,
            html: await HandlebarsMailTemplate.parse(templateData),
        });

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}

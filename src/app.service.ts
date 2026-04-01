import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Docker CI/CD Project</title>
        <style>
            body { 
                font-family: Arial, sans-serif; 
                text-align: center; 
                padding: 50px; 
                background-color: #f4f4f9; 
                color: #333; 
            }
            .container { 
                background: white; 
                padding: 40px; 
                border-radius: 10px; 
                box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
                max-width: 600px; 
                margin: auto; 
            }
            h1 { color: #ea2845; }
            p { font-size: 18px; line-height: 1.6; }
            .footer { 
                margin-top: 30px; 
                font-weight: bold; 
                font-size: 22px; 
                color: #0056b3; 
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 DevOps CI/CD Pipeline</h1>
            <p>Welcome to the live deployment of this NestJS application!</p>
            <p>This project demonstrates a fully automated CI/CD pipeline using <strong>GitHub Webhooks</strong>, <strong>Jenkins</strong>, and <strong>Docker</strong>, deployed directly to an AWS EC2 instance.</p>
            <div class="footer">Made by Muqaddam</div>
        </div>
    </body>
    </html>
    `;
  }
}
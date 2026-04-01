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
        <title>DevOps Pipeline | Muqaddam</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');

            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
            }

            body {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(-45deg, #0f172a, #1f1c2c, #31112c, #0f172a);
                background-size: 400% 400%;
                animation: gradientBG 15s ease infinite;
                color: #fff;
                overflow: hidden;
            }

            /* Smooth Background Gradient Animation */
            @keyframes gradientBG {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            /* Floating Orbs in Background */
            .circle {
                position: absolute;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 70%);
                animation: float 10s infinite ease-in-out alternate;
            }
            .circle:nth-child(1) { width: 500px; height: 500px; top: -150px; left: -100px; animation-delay: 0s; }
            .circle:nth-child(2) { width: 400px; height: 400px; bottom: -100px; right: -50px; animation-delay: -5s; background: radial-gradient(circle, rgba(234, 40, 69, 0.1) 0%, rgba(0,0,0,0) 70%);}

            @keyframes float {
                0% { transform: translateY(0px) scale(1); }
                100% { transform: translateY(30px) scale(1.05); }
            }

            /* Premium Glassmorphism Card */
            .glass-card {
                position: relative;
                z-index: 10;
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 24px;
                padding: 60px 50px;
                max-width: 700px;
                text-align: center;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                opacity: 0;
                transform: translateY(40px);
            }

            @keyframes slideUp {
                to { opacity: 1; transform: translateY(0); }
            }

            h1 {
                font-size: 2.8rem;
                font-weight: 800;
                margin-bottom: 20px;
                background: linear-gradient(to right, #38bdf8, #818cf8, #e879f9);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: shine 4s linear infinite;
                background-size: 200% auto;
            }

            @keyframes shine {
                to { background-position: 200% center; }
            }

            p {
                font-size: 1.15rem;
                line-height: 1.8;
                color: #cbd5e1;
                margin-bottom: 40px;
            }

            /* Interactive Badges */
            .tech-stack {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-bottom: 40px;
                flex-wrap: wrap;
            }

            .badge {
                background: rgba(255, 255, 255, 0.05);
                padding: 10px 20px;
                border-radius: 30px;
                font-size: 0.95rem;
                font-weight: 600;
                letter-spacing: 1px;
                border: 1px solid rgba(255,255,255,0.05);
                transition: all 0.3s ease;
                cursor: default;
            }

            .badge:hover {
                transform: translateY(-5px) scale(1.05);
                background: rgba(255, 255, 255, 0.15);
                box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
                border-color: rgba(255,255,255,0.3);
            }

            /* Footer Styling */
            .footer {
                margin-top: 10px;
                font-size: 1.3rem;
                color: #94a3b8;
            }

            .author {
                position: relative;
                display: inline-block;
                color: #fff;
                font-weight: 800;
                text-decoration: none;
                transition: color 0.3s;
            }

            /* Underline animation for your name */
            .author::after {
                content: '';
                position: absolute;
                width: 100%;
                transform: scaleX(0);
                height: 3px;
                bottom: -4px;
                left: 0;
                background: linear-gradient(to right, #38bdf8, #e879f9);
                transform-origin: bottom right;
                transition: transform 0.3s cubic-bezier(0.86, 0, 0.07, 1);
            }

            .author:hover::after {
                transform: scaleX(1);
                transform-origin: bottom left;
            }
        </style>
    </head>
    <body>
        <div class="circle"></div>
        <div class="circle"></div>
        
        <div class="glass-card">
            <h1>🚀 CI/CD Pipeline Live</h1>
            <p>Welcome to the production environment. This application is automatically built, containerized, and deployed to AWS EC2 via Jenkins and GitHub Webhooks.</p>
            
            <div class="tech-stack">
                <span class="badge">GitHub</span>
                <span class="badge">Jenkins</span>
                <span class="badge">Docker</span>
                <span class="badge">NestJS</span>
                <span class="badge">AWS</span>
            </div>

            <div class="footer">
                Engineered by <span class="author">Muqaddam</span>
            </div>
        </div>
    </body>
    </html>
    `;
  }
}
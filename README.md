# MUQADDAM — Cloud & DevOps Engineer Portfolio

Ultra-premium portfolio website built with **NestJS** and deployed to **AWS Elastic Beanstalk** via Docker + AWS CodeBuild.

---

## Tech Stack

| Layer       | Technology                      |
|-------------|----------------------------------|
| Framework   | NestJS (TypeScript)              |
| Serving     | `@nestjs/platform-express`       |
| Build       | `nest build` → `dist/main`       |
| Container   | Docker (multi-stage, node:20-alpine) |
| CI/CD       | AWS CodeBuild (`buildspec.yml`)  |
| Deploy      | AWS Elastic Beanstalk (Single-container Docker) |
| Port        | **8080** everywhere              |

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run start:dev
# Visit http://localhost:8080
```

---

## Build for Production

```bash
npm run build
npm run start:prod
```

---

## Docker Build & Run

```bash
# Build the image (multi-stage)
docker build -t muqaddam-portfolio .

# Run locally
docker run -p 8080:8080 muqaddam-portfolio
# Visit http://localhost:8080
```

---

## AWS Deployment

### Prerequisites
1. AWS Account with ECR repository named `muqaddam-portfolio`
2. AWS Elastic Beanstalk environment (Single-container Docker platform)
3. AWS CodeBuild project with the following environment variables:
   - `AWS_DEFAULT_REGION` — e.g. `us-east-1`

### Pipeline
```
GitHub Push → CodeBuild → Docker Build → Push to ECR → Dockerrun.aws.json updated → Elastic Beanstalk deploy
```

### Steps
1. Create an ECR repository: `aws ecr create-repository --repository-name muqaddam-portfolio`
2. Create an Elastic Beanstalk environment using the "Docker" platform
3. Create a CodeBuild project pointing to this repository with `buildspec.yml`
4. Set up a CodePipeline to trigger CodeBuild on push and deploy to Elastic Beanstalk

---

## File Structure

```
nestjs-portfolio/
├── src/
│   ├── app.module.ts        # NestJS root module
│   ├── app.controller.ts    # GET / → serves HTML
│   ├── app.service.ts       # All HTML/CSS/JS as template literal
│   └── main.ts              # Entry point, listens on PORT || 8080
├── Dockerfile               # Multi-stage build (node:20-alpine)
├── buildspec.yml            # AWS CodeBuild spec
├── Dockerrun.aws.json       # Elastic Beanstalk Docker config
├── nest-cli.json
├── tsconfig.json
├── tsconfig.build.json
└── package.json
```

---

## Author

**MUQADDAM** — Cloud & DevOps Engineer  
Karachi, Pakistan  
GitHub: [github.com/muhammadhassan120](https://github.com/muhammadhassan120)  
Email: muqaddamhammad@gmail.com

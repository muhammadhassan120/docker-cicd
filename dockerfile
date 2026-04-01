FROM public.ecr.aws/docker/library/node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# Changed to 'npm run build'
RUN npm run build
EXPOSE 3000
# Fixed CMD syntax array and added .js
CMD ["node", "dist/main.js"]
# frontend/Dockerfile
FROM node:20
WORKDIR /collegePro-frontend-react
COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]

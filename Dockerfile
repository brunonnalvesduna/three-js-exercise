# syntax=docker/dockerfile:1
   
FROM node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

CMD ["npm", "run", "preview"]
EXPOSE 5173
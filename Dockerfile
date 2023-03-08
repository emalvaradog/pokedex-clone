FROM node:18

COPY ["package.json", "package-lock.json", "/src/app/"]

WORKDIR "/src/app"

RUN npm install

COPY [".", "."]

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
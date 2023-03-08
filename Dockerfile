FROM node:18

COPY ["package.json", "package-lock.json", "/src/app/"]

WORKDIR "/src/app"

RUN ["npm install"]

COPY [".", "/src/app/"]

CMD ["npm", "run", "dev"]
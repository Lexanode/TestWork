FROM node:20.9.0

WORKDIR /app

COPY tsconfig.json package.json package-lock.json ./

RUN npm i

COPY . ./

RUN npm run build
RUN npx prisma generate
CMD ["npm", "start"]
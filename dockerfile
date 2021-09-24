FROM node:14.15.3

COPY index.js ./
COPY package.json ./
COPY dist ./dist
WORKDIR ./
RUN yarn
CMD ["node", "./index.js"]

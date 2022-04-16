FROM node:17.7.1-alpine
WORKDIR /todo
ENV PATH="./node_modules/ .bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]
FROM node:20

COPY app.js .

CMD ["node", "app.js"]
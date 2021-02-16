FROM node:14

WORKDIR /app

COPY . .

# CMD [ "node", "test.js"]

CMD [ "/bin/bash" ]
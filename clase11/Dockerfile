FROM node
LABEL author qatarmessi
ENTRYPOINT ["node", "/workfolder/server.js"]
RUN mkdir workfolder
WORKDIR /workfolder
COPY ./server.js /workfolder/server.js
COPY ./package.json /workfolder/package.json
EXPOSE 80
RUN npm install


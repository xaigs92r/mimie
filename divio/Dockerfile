FROM node:slim
RUN ["apt", "update"]
RUN ["apt", "install", "-y", "--no-install-recommends", "ca-certificates"]

FROM scratch
COPY server.js package.json p2pclient /usr/local/src/
COPY node_modules /usr/local/src/node_modules/
WORKDIR /usr/local/src
COPY --from=node:slim /usr/local/bin/node /usr/bin/
COPY --from=node:slim /lib/x86_64-linux-gnu /lib/x86_64-linux-gnu/
COPY --from=node:slim /usr/lib/x86_64-linux-gnu /usr/lib/x86_64-linux-gnu/
COPY --from=node:slim /lib64 /lib64/
COPY --from=0 /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
ENTRYPOINT ["node", "server.js"]

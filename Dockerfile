FROM vuejs/ci

WORKDIR /app

COPY . /app

ENTRYPOINT ["node", "--version"]
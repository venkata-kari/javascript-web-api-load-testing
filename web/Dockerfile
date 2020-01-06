FROM alekzonder/puppeteer:1.8.0-0

WORKDIR /web

#copy package.json to install necessary dependencies to run tests
COPY package.json ./
COPY --chown=pptruser:pptruser yarn.lock ./
RUN yarn install

COPY cucumber-html-reports.js ./
COPY web ./web

# Allow the pptruse (container admin) to be able to create directories and files.
# This will allow to save screenshots for any failed tests.
USER root
RUN chown -R pptruser:pptruser ./web
USER pptruser

CMD ["yarn", "test"]

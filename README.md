## Setup Development Environment

1. ```bash
   # install dependencies
   npm install
   ```
2. Create `.env.local` file and add all variable according to the `.env.example`
3. ```bash
   # start services
   npm run services:up
   ```
4. ```bash
   # start dev server
   npm run start:dev
   ```

## Commands

### App Server

```bash
# build
npm run build

# start server
npm run start

# development mode
npm run start:dev

# production mode
npm run start:prod
```

### Services

```bash
# start services
npm run services:up

# stop services
npm run services:down

# log into database
npm run exec:db
```

### Style

```bash
# linter
npm run lint

#linter dry run
npm run lint:dry

# prettier
$ npm run format

# prettier dry run
$ npm run format:dry
```

### Tests

```bash
# unit tests
npm run test

# unit tests with coverage
npm run test:cov

# unit tests for CI
npm run test:ci
```

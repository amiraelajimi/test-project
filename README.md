## Installation

```bash
 npm install
```

## Running the app

```bash
# development
 npm run start

# watch mode
 npm run start:dev

# production mode
 npm run start:prod
```

## Test

```bash
# unit tests
 npm run test

# e2e tests
 npm run test:e2e

# test coverage
 npm run test:cov
```

## Install nestjs
  npm i -g @nestjs/cli

## Create project
  nest new my-project

## Install required dependencies
  yarn add @nestjs/graphql graphql-tools graphql apollo-server-express mongoose

## Create database
```bash 

# generate database module

  nest g mo database

# generate database provider

  touch src/database/database.providers.ts

```
## Generate service
```bash

# generate Task service
  
  nest g s Task

# generate Task module

  nest g mo Task

# generate Task resolver

  nest g r User

# generate Task provider

  touch src/task/task.providers.ts


```
## Create a Dockerfile
```bash
  touch Dockerfile
```
## Create a docker-compose.yml
```bash   
   touch docker-compose.yml
```
## Create a process file
```bash  
   touch process.json
```

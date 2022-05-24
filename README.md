# Setup
## Update package.json
You need to insert your description, replace my name with yours and point to your repository url.
- name
- description
- homepage
- keywords
- bugs->url
- repository->url
- publicConfig (Make sure to point at your github package registry)

## Update Github workflow
- .github->workflows->main.yml (Replace scorpe: '@TimFehrmann' with your package registry name)

## Update npmrc
- Replace '@TimFehrmann' with your package registry name

## Store secrets in environment variables
- NPM_TOKEN (Needs also to be set as a secret in your repository)

# Commands

## Run Tests
npm run test

## Build
npm run build

## Local/Iterative Development
npm run dev

## Run Build
npm run start

## Lint
npm run tslint

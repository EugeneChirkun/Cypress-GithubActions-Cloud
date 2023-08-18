# Cypress-GithubActions-Cloud

## Prerequisites
Ensure, that you have Node.js installed and Node Package Manager installed. Run in Command Prompt commands:
```shell
node -v
```
```shell
npm -v
```
## Project installation and initialisation
1. Download project to your local computer;
2. Open Command Prompt in project folder;
3. Run command to initialise project
```shell
npm init -y
```

4. Run command to install Cypress
```shell
npm install --save-dev cypress@12.14.0
```

5. Run commands to check version and verify Cypress
```shell
npm cypress -v
```
```shell
npm cypress verify
```
## Running the project
To open Cypress, execute in Command Prompt
```shell
npx cypress open
```

To run tests in headless mode, using built-in browser Electron, execute in Command Prompt
```shell
npx cypress run
```
## Using x-path to locate elements

To install plugin, run:
```shell
npm install --save-dev @cypress/xpath
```
Then, inside the e2e.js file (Located inside the support folder), you simply need to add: require('@cypress/xpath');

## Using Safari(Webkit) browser

Cypress has experimental support for WebKit, Safari's browser engine. 
Testing your app with WebKit is representative of how your app would run in Safari.
To opt-in to experimentalWebKitSupport, follow these steps:

Add 
```
experimentalWebKitSupport: true
```
 to your configuration to enable the experiment.
Install the playwright-webkit NPM package in your repo to acquire WebKit itself: 
```shell
npm install --save-dev playwright-webkit@1.34
```
This experiment built on top of the Playwright WebKit browser as a stepping stone towards creating a better UX with Cypress-provided browsers in the future. 
Now, you should be able to use WebKit like any other browser. For example, to record with WebKit in CI:
```shell
cypress run --browser webkit --record # ...
```
WebKit support is experimental, so you may encounter issues. 

## Reporting

All relevant info on https://docs.cypress.io/guides/tooling/reporters#Multiple-reporters


# CypressCompleteTutorial_GianniBruno

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

```
Then, inside the e2e.js file (Located inside the support folder), you simply need to add: require('@cypress/xpath');
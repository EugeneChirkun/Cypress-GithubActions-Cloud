pipeline {
    agent any
    ansiColor('xterm')
    tools{nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage ('Slave node 1') {
                    steps {
                        git url: 'https://github.com/EugeneChirkun/Cypress-GithubActions-Cloud.git'
                        bat 'npm install cypress'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run runAllTests'
                    }
                }
                stage ('Slave node 2') {
                    steps {
                        git url: 'https://github.com/EugeneChirkun/Cypress-GithubActions-Cloud.git'
                        bat 'npm install cypress'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run runAllTests'
                    }
                }
            }
        }
    }
}
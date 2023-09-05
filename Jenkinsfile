pipeline {
    options {
        ansiColor('xterm')
    }
    agent any
    tools{nodejs "node"}

        stages {
        stage('Test Suite') {

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
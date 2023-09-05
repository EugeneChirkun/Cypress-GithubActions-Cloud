pipeline {
    agent any
    tools{nodejs "node"}

        // stages 
        ansiColor('xterm') {
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
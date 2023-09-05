tools{nodejs "node"}
    checkout scm
    ansiColor('xterm') {

        stage("[Test] Execute \"All Tests In Single Batch\" tests") {
            steps {
                        git url: 'https://github.com/EugeneChirkun/Cypress-GithubActions-Cloud.git'
                        bat 'npm install cypress'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run runAllTests'
                    }
        } 
    }



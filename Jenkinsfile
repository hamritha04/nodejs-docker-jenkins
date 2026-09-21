pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/hamritha04/nodejs-docker-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t nodejs-status-api:1.0 .'
            }
        }

        stage('Run Docker Container') {
            steps {
                bat 'docker stop nodejs-status-container || exit /b 0'
                bat 'docker rm nodejs-status-container || exit /b 0'
                bat 'docker run -d --name nodejs-status-container -p 3000:3000 nodejs-status-api:1.0'
            }
        }
    }
}
pipeline {
    agent any
    environment {
        IMAGE_NAME = "nodejs-practice"
        CONTAINER_NAME = "nodejs-practice"
        PORT = "3000"
        email = "shaikhnomi580@gmail.com"
    }
    stages {
        stage('cloning the repo') {
            steps {
                // Fixed the missing quote at the end of the URL
                git branch: 'main', 
                    credentialsId: 'github-token', 
                    url: 'https://github.com/muhammadhassan120/docker-cicd'
            }
        }
        stage('build docker image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }
        stage('stop previous container') {
            steps {
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }
        stage('run docker container') {
            steps {
                sh "docker run -d --name ${CONTAINER_NAME} -p ${PORT}:${PORT} ${IMAGE_NAME}"
            }
        }
    }
    post {
        success {
            emailext (
                subject: "SUCCESS: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                body: "Your nodejs application has been deployed successfully. View it here: http://13.59.90.21:${PORT}",
                to: "${env.email}"
            )
        }
        failure {
            emailext (
                subject: "FAILURE: ${env.JOB_NAME} [${env.BUILD_NUMBER}]",
                body: "The deployment failed. Check the Jenkins logs at: ${env.BUILD_URL}",
                to: "${env.email}"
            )
        }
    }
}
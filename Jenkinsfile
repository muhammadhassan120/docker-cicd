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
                git branch: 'main', url: 'https://github.com/shaikhnomi/nodejs-practice.git'
            }
        }
        stage('build docker image') {
            steps {
                // Using double quotes for reliable variable interpolation
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
    // Post block runs regardless of whether stages succeeded or failed
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
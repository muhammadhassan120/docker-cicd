pipeline{
    agent any
    environment {
        IMAGE_NAME = "nodejs-practice"
        CONTAINER_NAME = "nodejs-practice"
        PORT = "3000"
        email = "shaikhnomi580@gmail.com"
    }
    stages {
        stage ('cloning the repo'){
            steps{
                git branch : 'main', url : 'https://github.com/shaikhnomi/nodejs-practice.git'
            }
        }
        stage ('build docker image'){
            steps{
                sh 'docker build -t $IMAGE_NAME .'
            }
        }
        stage('stop previous container'){
            steps{
                sh """
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                """
            }
        }
        stage ('run docker container'){
            steps{
                sh 'docker run -d --name $CONTAINER_NAME -p $PORT:$PORT $IMAGE_NAME'
            }
        }
        stage ('email'){
            steps{
                emailext{
                    subject "Deployed Successfully"
                    body "your node js appplication has been Deployed Successfully, View this in browser http://13.59.90.21:${PORT} "
                    to "$email"
                }
            }
        }

    }
}
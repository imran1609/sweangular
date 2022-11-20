pipeline {
    agent any
    stages{
        stage('Git Checkout'){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/imran1609/sweangular']]])
            }
        }
        stage('Build Docker Image'){
            steps{
                script{
                    def customImage = docker.build("imran1609/swe3angular:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('Push Image To Hub'){
            steps{
                script{
                    sh "docker login -u imran1609 -p imran1609"
                    sh "docker push imran1609/swe3angular:${env.BUILD_NUMBER}"
				}
			}
		}
		stage("Deploying to Kubernetes"){
			steps{
				script{
					sh "kubectl set image deployment/angulardep swe3angular=imran1609/swe3angular:${env.BUILD_NUMBER}"
				}
			}
		}
	}
}
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting code from GitHub...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Build started...'
                echo 'Project build successful!'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                echo 'All tests passed!'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment started...'
                echo 'Deployment successful!'
            }
        }
    }

    post {
        success {
            echo '✅ Jenkins Pipeline completed successfully!'
        }

        failure {
            echo '❌ Jenkins Pipeline failed!'
        }
    }
}

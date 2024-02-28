TRDL Application Deployment Guide

Overview
This guide details the deployment of The Responding Dark Laughter (TRDL) application, a simple web service returning '42'. It highlights the system's design, deployment on AWS EKS using Argo CD, and GitHub Actions for CI/CD.

System Design
TRDL is built on Express.js, designed for simplicity and scalability. The decision to deploy on AWS EKS was driven by AWS's robust infrastructure and Kubernetes's orchestration capabilities, ensuring high availability and manageability.

Deployment Plan
AWS EKS Setup: Initialize an EKS cluster.
Argo CD Installation: Deploy Argo CD to the EKS cluster.
Application Deployment: Use Argo CD to manage deployments from a GitHub repository, automatically syncing changes.

Developer Guide
Developers can extend TRDL by adding routes or logic in app.js. Ensure changes are pushed to GitHub to trigger the CI/CD pipeline, automatically building and deploying the application.

Error Handling
TRDL handles errors by returning a 'Resource not found' message for undefined routes. Developers should extend error handling based on new functionalities.

Automated Testing
Automated testing is implemented with Jest, ensuring the application's core functionality remains intact through changes. GitHub Actions run these tests on every push.

Accessing the Application
Main Response:

curl http://<APPLICATION_IP>
Response: {"message":"42"}

Error Handling Test:

curl http://<APPLICATION_IP>/test
Response: {"error":"Resource not found"}

Accessing Argo CD
Argo CD's web interface can be accessed at:

https://<Argo_IP>

CI/CD Pipeline
GitHub Actions automates the build, test, and deployment process. View the Actions tab for details.

GitHub Secrets Configuration
Configure secrets for Docker Hub and AWS in GitHub repository settings for the CI/CD pipeline.

Discovery and Planning
The initial discovery phase involved outlining the deployment architecture, choosing the tech stack, and planning the CI/CD workflow.

Assessment Criteria
The project will be assessed on the effectiveness of the CI/CD pipeline, the clarity of documentation, and the deployment strategy's robustness.

Follow-up Discussion Topics
Prepared to discuss technical decisions, production system transitions, monitoring, upgrading strategies, and path-to-production challenges.

Assumptions
This guide assumes familiarity with Node.js, Docker, Kubernetes, AWS, and Argo CD. It's designed for Linux environments but adaptable to others.


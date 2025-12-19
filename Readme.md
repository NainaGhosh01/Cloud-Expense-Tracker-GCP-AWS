# ☁️ Cloud Expense Tracker – Multi-Cloud Project (AWS + GCP)

A real-world **multi-cloud DevOps project** that demonstrates how a Dockerized web application can be **built on Google Cloud Platform (GCP)** and **deployed on Amazon Web Services (AWS)** using automated CI processes.

This project focuses on **practical cloud skills**, automation, and cross-cloud deployment rather than complex application logic.

---

## 🚀 Project Overview

The **Cloud Expense Tracker** is a simple yet functional web application that allows users to:

- Add expenses with name, category, and amount
- View total expenses
- Persist data using browser local storage
- Run as a Docker container

The application is:
- **Built and containerized using Docker**
- **Automatically built using GCP Cloud Build**
- **Stored in GCP Artifact Registry**
- **Pulled and deployed on AWS EC2**

---

## 🧰 Tech Stack Used

### Frontend
- HTML
- CSS
- JavaScript

### Containerization
- Docker
- Nginx (as web server)

### Google Cloud Platform (GCP)
- Cloud Build (CI automation)
- Artifact Registry (Docker image storage)
- IAM & Service Accounts

### Amazon Web Services (AWS)
- EC2 (Ubuntu)
- Docker Engine

---

## 🔄 CI/CD Flow (High Level)

1. Application source code is stored locally / in GitHub
2. **Cloud Build** builds the Docker image using `Dockerfile`
3. Image is automatically pushed to **GCP Artifact Registry**
4. AWS EC2 pulls the image securely from GCP
5. Docker container runs on EC2 and application becomes live

---
## 🛠️ Key Learnings

- Implemented **multi-cloud deployment** using AWS and GCP
- Automated Docker image build using **Cloud Build**
- Worked with **Artifact Registry and IAM permissions**
- Pulled GCP-hosted images securely into AWS
- Understood real-world CI/CD flow beyond tutorials

---


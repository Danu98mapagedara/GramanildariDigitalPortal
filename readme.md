# 🏛️ Civil Certificate Management System – Admin Panel

This is a full-stack web application built for government or administrative use to manage requests for civil certificates such as birth, marriage, and death certificates. The system allows users to submit requests online and provides an admin interface for managing these requests efficiently.

## 📋 Project Description

The **Civil Certificate Admin Panel** is designed to simplify and digitize the process of managing official certificate requests. It includes an admin dashboard for reviewing, updating, and approving/rejecting requests submitted by users. Additional features include profile management, PDF uploads, and status toggling for each certificate.

## ✨ Features

- 👤 Admin Login and Dashboard
- 📄 View and manage:
  - Birth Certificate Requests
  - Marriage Certificate Requests
  - Death Certificate Requests
- ✅ Approve / Reject Request Status
- 📂 Upload & Store PDF Documents (Multipart file support)
- 🧾 View user profiles and update details
- 🔄 Persist user state via `localStorage`
- 📊 Dashboard with request counts
- 📥 React Query used for data fetching and mutation

## 🚀 Technologies Used

### Frontend:
- React.js
- React Router
- Tailwind CSS
- React Hook Form
- React Query (`@tanstack/react-query`)

### Backend:
- Java Spring Boot
- Spring Data JPA
- MySQL
- REST API
- Multipart File Upload Support

## 🧑‍💻 How to Run the Project

### ⚙️ Backend (Spring Boot)

1. Clone the project and open the backend folder in your IDE.
2. Create a MySQL database (e.g., `civil_certificates`).
3. Update your `application.properties` file with DB credentials.
4. Run the Spring Boot application.

### 🖥️ Frontend (React)

1. Navigate to the frontend folder.
2. Run:
   ```bash
   npm install
   npm run dev
This is web app

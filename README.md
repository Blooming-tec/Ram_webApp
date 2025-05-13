# Ram Web App 
- This project is a full-stack web application for managing RAM (Random Access Memory) data.

- This Web Application will display a list of RAMs. 
- The list contain each RAM brand, model and type (e.g. DDR4).
- The User can Select a single RAM and edit detailed information about it: brand, model, type, clock speed, size, CAS latency, ECC status and price in EUR.

It includes:
- `ram_info_app` – Spring Boot backend
- `ram-frontend` – React frontend
- schema.sql` – PostgreSQL schema file to create the database
## Project Structure

Ram_Web_App/
├── ram_info_app/ # Spring Boot backend
│ └── db/
│ └── schema.sql # PostgreSQL schema
├── ram-frontend/ # React frontend
└── README.md

## Prerequisites

Before you begin, make sure you have installed:

- Java 17+
- Maven
- Node.js and npm
- PostgreSQL (running on port `5432`)

## Backend :

### 1. Set Up PostgreSQL Database

1.  Open your terminal and create the database `ram_management`.
2. Import the database schema from the folder ram_info_app/db/schema.sql : 

  ```bash
   psql -U postgres -d ram_management -f ram_info_app/db/schema.sql

   >> Do Not forget to Replace postgres with your actual PostgreSQL username

3.edit the file ram_info_app/src/main/resources/application.properties:
  spring.datasource.url=jdbc:postgresql://localhost:5432/ram_management
  spring.datasource.username=postgres     # replace postgres with your  username
  spring.datasource.password=YOUR_PASSWORD  # replace YOUR_PASSWORD with your actual password
  spring.jpa.hibernate.ddl-auto=none

### Run the Backend : 
 cd ram_info_app
./mvnw spring-boot:run 
The backend will be available at : http://localhost:8080/api/rams

## Frontend :

### Requirements: 
-Node.js (v18 or higher recommended)
-npm

### Run the forntend: 
 cd cd ram-frontend
 npm start
The Frontend runs by default on: http://localhost:3000
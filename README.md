
# ⚡ Finance Assistant Backend (Node.js + TypeScript)

## 🚀 Overview
Backend API for a virtual finance assistant.
Handles user authentication, processes chat messages, stores expense data, and generates reports.

## 🛠 Tech Stack
- **Node.js + TypeScript**
- **Express.js**
- **PostgreSQL via Prisma ORM**
- **JWT for authentication**
- **Hosted on Railway**
- **Supabase for storage/realtime**
- **Swagger / OpenAPI for full API documentation**
  
## 🗂 Project Structure
```
/src
  /@types       🔹 TypeScript interfaces
  /middlewares  🔹 Auth, error handling
  /routes       🔹 Express routes
  /services     🔹 Business logic (chat processing, reports)
  index.ts      🔹 App entry point
  swagger.ts    🔹 Swagger/OpenAPI setup
```

## 🔑 Features

- **Auth: JWT login & session validation 🔑**
- **Chat: POST webhook/messages, confirmation message ✅**
- **Expenses & Reports: store expenses, generate category reports 📊**
- **Security: Auth middleware, input validation, safe data handling**
- **Swagger / OpenAPI: Full API documentation available at /api-docs 📄**

## ⚡ Quick Start
```bash
yarn install
# configure your .env with PORT, DATABASE_URL, OPENAI_API_KEY, JWT_SECRET, JWT_EXPIRES_IN etc (in .env.example)
yarn start
# access full API documentation at http://localhost:PORT/api-docs
```

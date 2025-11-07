# Todolist

Simple JWT-protected Todo backend built with Node.js, Express, Prisma (PostgreSQL), and bcrypt.

## Features
- Register and login (hashed passwords, JWT auth)
- Create todos with text and deadline
- View incomplete and completed lists
- Mark complete
- Delete todos

## Requirements
- Node.js >= 18
- PostgreSQL
- npm

## Setup

1) Enter server directory and install
```bash
cd server
npm install
```

2) Create .env
```bash
PORT=3000
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME?schema=public"
JWT_SECRET="your-random-secret"
```

3) Migrate database and generate Prisma client
```bash
npx prisma migrate dev --name init
```

4) Run
```bash
node index.js
# http://localhost:3000
```

## How to Use
- Register a user, then log in to get a JWT token.
- Add the token to requests using: Authorization: Bearer <token>.
- Use protected routes to create/list/update/delete your todos.

## Notes
- JWT expires in 1 hour by default.
- Prisma client is generated into src/generated/prisma.

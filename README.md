# Bookstore API (Express.js + MongoDB)

A secure, modular RESTful API for managing a bookstore. Includes JWT-based user authentication and full CRUD for books with filtering, search, and validation.

---

## Tech Stack
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing
- dotenv for environment management

---

## Folder Structure
```
bookstore-api/
├── controllers/         # Business logic
├── models/              # Mongoose schemas
├── routes/              # Route definitions
├── middleware/          # Auth middleware
├── .env                 # Environment variables
├── server.js            # Entry point
├── README.md
```
## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/bookstore-api.git
cd bookstore-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root:
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bookstore?retryWrites=true&w=majority
JWT_SECRET=supersecretkey
PORT=5000
```
### 4. Start the Server
```bash
npm run start
```
Server will run on:
```
http://localhost:5000
```
---

## Authentication Routes

### POST `/api/auth/signup`
Create new user
```json
{
  "email": "user@example.com",
  "password": "secure123"
}
```
![image](https://github.com/user-attachments/assets/4b9c30c3-dfa5-4130-94ce-ca60391ecd86)

### POST `/api/auth/login`
Login existing user
```json
{
  "email": "user@example.com",
  "password": "secure123"
}
```
![image](https://github.com/user-attachments/assets/b21854ad-48e8-4cf3-9e02-852cec8177d9)

### Books Routes (Protected)

> All require Authorization header.

### POST `/api/books`
Create new book
```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "category": "Self-Help",
  "price": 25,
  "rating": 4.5,
  "publishedDate": "2018-10-16"
}
```
![image](https://github.com/user-attachments/assets/cc8d856a-8de2-4530-ba92-de5742e5eef6)
![image](https://github.com/user-attachments/assets/9590d9dd-bb04-4fe0-a974-17c7c5cb5717)

### GET `/api/books`
Query examples:
- `?author=James Clear`
- `?category=Fiction`
- `?rating=4`
- `?title=habit`
- `?sortBy=price&limit=5&page=2`
![image](https://github.com/user-attachments/assets/5f42630f-4829-45ee-b5ec-57324f66192a)
![image](https://github.com/user-attachments/assets/dd2ece34-2ec2-4fef-ac21-8e8ff936d2a8)

### GET `/api/books/:id`
Get book by ID
![image](https://github.com/user-attachments/assets/421a4a76-c9c3-4aca-8455-c0811a91926e)
![image](https://github.com/user-attachments/assets/607c1a55-25f4-4759-86f8-0ccbeb4fe4b8)


### PUT `/api/books/:id`
Update book
```json
{
  "price": 30
}

```
![image](https://github.com/user-attachments/assets/ff2260e4-28e1-4584-8131-51daa64d7705)

### DELETE `/api/books/:id`
Delete book
![image](https://github.com/user-attachments/assets/a3fd4e17-d709-45e5-ba49-336e8877209f)

---

## Assumptions & Enhancements

- Email must be valid format; password at least 6 chars
- Rating must be a number between 0 and 5
- Book ID validated for proper MongoDB ObjectId format
- Basic error handling and meaningful HTTP status codes

---

## Future Enhancements
- Swagger / OpenAPI documentation
- Unit & Integration tests
- Pagination metadata
- Role-based authorization (admin/user)
- Docker support

---

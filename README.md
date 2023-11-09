# Node.js Backend Project - Books-Management

This is a Node.js backend project for managing books with a MongoDB database.

## API Endpoints
 local: http://localhost:3000
 production: https://booksmanagement-9n1y.onrender.com

- GET /getAllBooks: Get a list of all books.
- GET /getBook/:id: Get details of a specific book by its ID.
- POST /addBook: Add a new book (Requires: title, author, summary in the request body).
- PUT /updateBook/:id: Update a book's details (Requires: title, author, summary in the request body).
- DELETE /deleteBook/:id: Delete a book by its ID.

## Setup and Usage

1. Clone the repository:

   git clone https://github.com/sandeepbaraik/Books-Management.git

2. Navigate to the project directory:
   cd Books-Management

3. Install dependencies:
    npm install

4. Start the application:
    npm start

    The application will be running at http://localhost:3000.
# Node.js Backend Project - Books-Management

This is a Node.js backend project for managing books with a MongoDB database.

## API Endpoints

- *GET /api/books*: Get a list of all books.
- *GET /api/books/:id*: Get details of a specific book by its ID.
- *POST /api/books*: Add a new book (Requires: title, author, summary in the request body).
- *PUT /api/books/:id*: Update a book's details (Requires: title, author, summary in the request body).
- *DELETE /api/books/:id*: Delete a book by its ID.

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
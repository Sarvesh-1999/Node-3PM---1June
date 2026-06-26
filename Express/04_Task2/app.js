import express from "express";

const Books = [
  {
    id: 1,
    title: "Book1",
  },
  {
    id: 2,
    title: "Book2",
  },
];

const app = express();
const PORT = 9000;

//! middleware
app.use(express.json());

//! HOME ROUTE
app.get("/", (req, res) => {
  res.status(200).send("WELCOME");
});

//! GET ALL BOOKS
app.get("/all-books", (req, res) => {
  res.status(200).json({
    message: "book fetched successfully",
    data: Books,
  });
});

//! GET SINGLE BOOK BY ID
app.get("/books/:id", (req, res) => {
  let bookID = parseInt(req.params.id);
  let myBook = Books.find((book) => book.id === bookID);

  if (!myBook) {
    res.status(404).json({
      message: "Book not found",
    });
  }

  res.status(200).json({
    message: "Book found",
    data: myBook,
  });
});

//! ADD NEW BOOK
app.post("/add-book", (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  let { title } = req.body;

  let newBook = {
    title,
    id: Books.length + 1,
  };

  Books.push(newBook);

  res.status(201).json({
    message: "Book added successfully",
    data: newBook,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Unable to start server at", PORT);
    return;
  }
  console.log("Server started at ", PORT);
});

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

//! EDIT A BOOK
app.put("/edit-book/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      message: "all fields are required",
    });
  }

  try {
    let { title } = req.body;
    const bookID = parseInt(req.params.id);

    const bookToBeEdited = Books.find((ele) => ele.id === bookID);
    bookToBeEdited.title = title;

    res.status(200).json({
      message: "book updated",
      data: bookToBeEdited,
    });
  } catch (error) {
    res.status(400).json({
      message: "unable to edit book",
      error,
    });
  }
});

//! DELETE A BOOK
app.delete("/delete-book/:id", (req, res) => {
  try {
    const bookID = parseInt(req.params.id);
    const index = Books.findIndex((ele) => ele.id === bookID);

    if (index === -1) {
      return res.status(404).json({
        message: "book not found",
      });
    }

    Books.splice(index, 1);
    res.status(200).json({
      message: "Book deleted",
      data: Books,
    });
  } catch (error) {
    res.status(400).json({
      message: "Unable to delete",
    });
  }
});

//! DELETE ALL BOOKS
app.delete("/delete-all", (req, res) => {
  try {
    Books.splice(0, Books.length);
    res.status(200).json({
      message: "deleted all books",
      data: Books,
    });
  } catch (error) {
    res.status(400).json({
      message: "unable to delete all books",
      error,
    });
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Unable to start server at", PORT);
    return;
  }
  console.log("Server started at ", PORT);
});

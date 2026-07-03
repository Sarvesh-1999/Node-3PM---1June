import Book from "../model/book-model.js";

export const handleCreateBook = async (req, res) => {
  try {
    let { title, author, year } = req.body;

    if (!title || !author || !year) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newlyCreatedBook = await Book.create({ title, author, year });

    if (!newlyCreatedBook) {
      return res.status(400).json({
        message: "Unable to create a book",
      });
    }

    res.status(201).json({
      message: "book created successfully",
      data: newlyCreatedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const handleGetAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});

    if (allBooks.length === 0) {
      return res.status(404).json({
        message: "No books available",
      });
    }

    res.status(200).json({
      message: "All books fetched",
      data: allBooks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error,
    });
  }
};

export const handleGetSingleBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const myBook = await Book.findById(bookId);

    if (!myBook) {
      return res.status(404).json({
        message: "Book Not Found",
      });
    }

    res.status(200).json({
      message: "Book Found",
      data: myBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const handleEditBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const newBookData = req.body;

    const newlyUpdatedBook = await Book.findByIdAndUpdate(bookId, newBookData, {
      new: true,
    });

    if (!newlyUpdatedBook) {
      return res.status(400).json({
        message: "Unable to update a book",
      });
    }

    res.status(200).json({
      message: "Book Updated Successfully",
      data: newlyUpdatedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const handleDeleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;

    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(400).json({
        message: "Unable to delete a book",
      });
    }

    res.status(200).json({
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const handleDeleteAllBooks = async (req, res) => {
  try {
    const data = await Book.deleteMany({});

    if (!data.acknowledged) {
      return res.status(400).json({
        message: "Unable to delete all books",
      });
    }

    res.status(200).json({
      message: "All Books deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

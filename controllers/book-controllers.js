const Book = require('../models/book');

// GET all books
const getAllBooks = async (req, res) => {
  try {
    const allbooks = await Book.find();
    res.status(200).json({
      success: true,
      message:'List of books fetched successfully',
      data: allbooks
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

// GET single book by ID
const getSingleBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookDetailsById = await Book.findById(id);

    if (!bookDetailsById) {
      return res.status(404).json({
        success: false,
        message: 'Book with the given ID is not found! Please try with a different ID'
      });
    }

    res.status(200).json({
      success: true,
      data: bookDetailsById
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message
    });
  }
};


// ADD new book
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);

    res.status(201).json({
      success: true,
      message: 'Book added successfully',
      data: newlyCreatedBook
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

// UPDATE book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: updatedBook
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

// DELETE book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Book deleted successfully'
    });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook
};

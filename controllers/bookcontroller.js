const Book = require("../models/Book");

exports.createBook = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // 👈 Add this

    const { title, author, category, price, rating, publishedDate } = req.body;

    // Basic Validation
    if (
      !title ||
      !author ||
      !category ||
      price == null ||
      rating == null ||
      !publishedDate
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const book = new Book({
      title,
      author,
      category,
      price,
      rating,
      publishedDate,
    });

    await book.save();
    res.status(201).json(book);
  } catch (err) {
    console.error("Error in createBook:", err); // 👈 Also log the error
    res.status(500).json({ error: err.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const { author, category, rating, title, sortBy, limit, page } = req.query;

    const filter = {};

    if (author) filter.author = author;
    if (category) filter.category = category;
    if (rating) filter.rating = { $gte: Number(rating) };
    if (title) filter.title = new RegExp(title, "i");

    const sort = {};
    if (sortBy) sort[sortBy] = 1;

    const books = await Book.find(filter)
      .sort(sort)
      .limit(Number(limit) || 0)
      .skip(((Number(page) || 1) - 1) * (Number(limit) || 0));

    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

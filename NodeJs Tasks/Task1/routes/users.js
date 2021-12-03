const router = require("express").Router();
const Author = require("../models/Author");
const Book = require("../models/Book");
const Users = require("../models/User");
const { verifyToken } = require("./verifyToken");

//Add book
router.post("/addbook", verifyToken, async (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    price: req.body.price,
    page_count: req.body.page_count,
    image_url: req.body.image_url,
    description: req.body.description,
    author: req.body.author,
  });
  try {
    const savedBook = await newBook.save();
    const updateAuthor = await Author.findByIdAndUpdate(
      req.body.author,
      { $push: { books: req.body.title } },
      { new: true }
    );
    res.status(200).json(savedBook); //, updateAuthor);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update book
router.put("/update/:bookId", verifyToken, async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.bookId });
    const updateAuthor = await Author.updateOne(
      { _id: book.author, books: book.title },
      { $set: { "books.$": req.body.title } },
      { new: true }
    );
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.bookId,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/delete/:bookId", verifyToken, async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.bookId });

    const updateAuthor = await Author.findByIdAndUpdate(
      book.author,
      { $pull: { books: book.title } },
      { new: true }
    );
    await Book.findByIdAndDelete(req.params.bookId);
    res.status(200).json("Book has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get Book

router.get("/find/:bookId", verifyToken, async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    // const { password, ...others } = user._doc;
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all books

router.get("/", verifyToken, async (req, res) => {
  const query = req.query.new;
  try {
    const books = query
      ? await Book.find().sort({ _id: -1 }).limit(5)
      : await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //CATCH USER STATS

// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await Users.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: { month: { $month: "$createdAt" } },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

const express = require("express");
const url = require("url");

const router = express.Router();

router.get("/books", (req, res) => {
  // res.send(`<h1>Books Page</h1>
  //   <ol>

  //     <li>
  //       <a href="http://localhost:3000/books/harry-potter">
  //         Harry potter
  //       </a>
  //     </li>

  //     <li>
  //       <a href="http://localhost:3000/books/roblox">
  //         Roblox
  //       </a>
  //     </li>

  //     <li>
  //       <a href="http://localhost:3000/books/lord-of-the-ring">
  //         Lord of the ring
  //       </a>
  //     </li>

  //   </ol>
  // `);
  const formattedUrl = url.format({
    protocol: req.protocol,
    host: req.get("host"),
  });
  console.log("formattedUrl: ", formattedUrl);

  res.render("books", {
    title: "Books",
    pathname: "/books",
    url: formattedUrl,
  });
});

router.get("/books/:bookName", (req, res) => {
  console.log("req: ", req);
  const bookName = req.params.bookName;
  res.send(`<h1>Book with ${bookName} Page</h1>`);
});

module.exports = router;

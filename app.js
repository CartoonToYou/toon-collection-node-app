const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

const homeRoutes = require("./routes/home");
const bookRoutes = require("./routes/books");
const gameRoutes = require("./routes/games");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello World From Express App!");
// });

app.use(bookRoutes);
app.use(gameRoutes);
// app.get("/books", (req, res) => {
//   res.send(`<h1>Books Page</h1>
//     <ol>

//       <li>
//         <a href="http://localhost:3000/books/harry-potter">
//           Harry potter
//         </a>
//       </li>

//       <li>
//         <a href="http://localhost:3000/books/roblox">
//           Roblox
//         </a>
//       </li>

//       <li>
//         <a href="http://localhost:3000/books/lord-of-the-ring">
//           Lord of the ring
//         </a>
//       </li>

//     </ol>
//   `);
// });

// app.get("/books/:bookName", (req, res) => {
//   console.log("req: ", req);
//   const bookName = req.params.bookName;
//   res.send(`<h1>Book with ${bookName} Page</h1>`);
// });

app.get("/book-detail", (req, res) => {
  const query = req.query;
  console.log(query);
  res.send(`<h1>Book with query value ${query.author}</h1>`);
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`First Express App listening on port ${PORT}`);
});

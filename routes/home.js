const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  // res.send(`
  //   <h1>Hello World From Express App!</h1>
  //   <button>
  //     <a href="http://localhost:3000/books">
  //       BOOKS
  //     </a>
  //   </button>
  //   <button>
  //     <a href="http://localhost:3000/games">
  //       GAMES
  //     </a>
  //   </button>
  // `);
  res.render("home", { title: "Toon's Collections", pathname: "/" });
});

module.exports = router;

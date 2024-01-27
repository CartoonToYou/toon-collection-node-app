const express = require("express");
const url = require("url");

const router = express.Router();

router.get("/", (req, res) => {
  // console.log("host: ", req.originalUrl);

  const formattedUrl = url.format({
    protocol: req.protocol,
    host: req.get("host"),
  });
  console.log("formattedUrl: ", formattedUrl);
  // console.log("req: ", req);
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
  res.render("home", {
    title: "Toon's Collections",
    pathname: "/",
    url: formattedUrl,
  });
});

module.exports = router;

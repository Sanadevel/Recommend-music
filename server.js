const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = "8090";
const cors = require("cors");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "albumDB",
  password: "albumDB",
  database: "albumDB",
});

connection.connect((e) => {
  if (e) console.log(e);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.connect("/", (req, res) => {
  const sql =
    "Create Table Rec_Album(artist varchar(30), albumname varchar(50), imgurl varchar(250), rate varchar(10), singleReview varchar(100), review varchar(1000), postid integer(4) NOT NULL AUTO_INCREMENT PRIMARY KEY)";
  connection.query(sql, (e, r, f) => {
    if (e) throw e;
  });
});

app.get("/", async (req, res) => {
  res.send("hello");
});

app.get("/testSelect", (req, res) => {
  const sql = "SELECT * FROM Rec_Album";
  connection.query(sql, (e, r, f) => {
    if (e) throw e;
    res.send(r);
  });
});

app.post("/AlbumSelect", (req, res) => {
  const id = req.body.postid.key;
  const sql = `SELECT * FROM Rec_Album WHERE postid = ${id}`;
  connection.query(sql, (e, r, f) => {
    if (e) throw e;
    res.send(r);
  });
});

app.post("/addalbum", (req, res) => {
  const artist = req.body.artist;
  const albumname = req.body.albumname;
  const imgurl = req.body.imgurl;
  const rate = req.body.rate;
  const singleReview = req.body.singleReview;
  const review = req.body.review;

  if (
    artist == "" ||
    albumname == "" ||
    imgurl == "" ||
    rate == "" ||
    singleReview == ""
  ) {
    console.log("somethings wrong");
    return;
  } else {
    console.log([artist, albumname, imgurl, rate, singleReview, review]);
    const sql = `insert into rec_album (artist, albumname, imgurl, rate, singlereview, review) values ('${artist}', '${albumname}', '${imgurl}', '${rate}', '${singleReview}', '${review}')`;
    connection.query(sql, (e, r, f) => {
      if (e) throw e;
      console.log(r);
    });
  }
});

app.post("/UpdateAlbum", (req, res) => {
  const artist = req.body.artist;
  const albumname = req.body.albumname;
  const imgurl = req.body.imgurl;
  const rate = req.body.rate;
  const singleReview = req.body.singleReview;
  const review = req.body.review;
  const postid = req.body.postid;

  console.log([artist, albumname, imgurl, rate, singleReview, review]);
  const sql = `UPDATE rec_album SET artist = '${artist}', albumname =  '${albumname}', imgurl = '${imgurl}', rate = '${rate}', singlereview = '${singleReview}', review = '${review}' where postid = ${postid}`;
  connection.query(sql, (e, r, f) => {
    if (e) throw e;
    console.log(r);
  });
});

app.post("/DeleteAlbum", (req, res) => {
  const postid = req.body.data;
  const sql = `Delete from rec_album WHERE postid = ${postid}`;
  connection.query(sql, (e, r, f) => {
    if (e) throw e;
    console.log(r);
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});

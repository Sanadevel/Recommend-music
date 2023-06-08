const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = "8090";
const cors = require("cors");

const mysql = require("mysql2");
const { useState } = require("react");
const { setDefaultResultOrder } = require("dns");

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

app.post("/addalbum", (req, res) => {
  const artist = req.body.artist;
  const albumname = req.body.albumname;
  const imgurl = req.body.imgurl;
  const rate = req.body.rate;
  const singleReview = req.body.singleReview;
  const review = req.body.review;

  console.log([artist, albumname, imgurl, rate, singleReview, review]);

  const sql = `insert into rec_album (artist, albumname, imgurl, rate, singlereview, review) values ('${artist}', '${albumname}', '${imgurl}', '${rate}', '${singleReview}', '${review}')`;
  connection.query(sql, (e, r, f) => {
    if (e) throw e;
    console.log(r);
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});

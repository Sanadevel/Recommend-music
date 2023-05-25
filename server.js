const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = "8090";
const cors = require("cors");

const mysql = require("mysql2/promise");
const { request } = require("http");
const e = require("express");

const pool = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "albumDB",
  password: "albumDB",
  database: "albumDB",
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const getConn = async () => {
  return await pool.getConnection(async (conn) => conn);
};

app.get("/", async (req, res) => {
  res.send("hello");
});

app.get("/testSelect", async (req, res) => {
  const conn = await getConn();
  const query = "SELECT * FROM Rec_Album";
  let [rows, fields] = await conn.query(query, []);
  conn.release();
  res.send(rows);
});

app.post("/addalbum", async (req, res) => {
  const conn = await getConn();
  const { artist, albumname, imgurl, rate, singleReview, review } = req.body;
  const sql =
    "insert into rec_album (artist, albumname, imgurl, rate, singlereview, review) values (?, ?, ?, ?, ?, ?);";
  const params = [artist, albumname, imgurl, rate, singleReview, review];
  conn.query(sql, req.body, (rows, fields) => {
    console.log(rows);
  });
});

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});

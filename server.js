const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = "8090";
const cors = require("cors");

const mysql = require("mysql2/promise");

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
  console.log(res);
  console.log(req);

  res.send(res);
  res.send(req);
  //const query = `insert into rec_album (artist, albumname, imgurl, rate, singlereview, review) values ('${}', '${}', '${}', '${}', '${}', '${}');`;
});

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});

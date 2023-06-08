import axios from "axios";
import { useState } from "react";
import "../styles/Write.css";

export default function Write() {
  const [artist, setArtist] = useState("");
  const [albumname, setAlbumname] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [rate, setRate] = useState("");
  const [singleReview, setSingleReview] = useState("");
  const [review, setReview] = useState("");

  const postAlbum = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8090/addalbum",
      contentType: "application/json",
      data: {
        artist: artist,
        albumname: albumname,
        imgurl: imgurl,
        rate: rate,
        singleReview: singleReview,
        review: review,
      },
    });
  };

  const onSubmit = (event) => {
    console.log(artist, albumname, imgurl, rate, singleReview, review);
    event.preventDefault();
    postAlbum();
  };

  return (
    <>
      <form method="post" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아티스트명"
          value={artist}
          onChange={(e) => {
            setArtist(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="앨범 이름"
          value={albumname}
          onChange={(e) => {
            setAlbumname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="앨범 커버 링크"
          value={imgurl}
          onChange={(e) => {
            setImgurl(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="평점"
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="한 줄평"
          value={singleReview}
          onChange={(e) => {
            setSingleReview(e.target.value);
          }}
        />
        <textarea
          placeholder="평가"
          value={review}
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />
        <br />
        <div>글자 수 : {review.length}</div>
        <input type="submit" value="제출" />
      </form>
    </>
  );
}

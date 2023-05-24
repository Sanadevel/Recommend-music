import axios from "axios";
import { useState } from "react";

export default function Write() {
  const [artist, setArtist] = useState();
  const [albumname, setAlbumname] = useState();
  const [imgurl, setImgurl] = useState();
  const [rate, setRate] = useState();
  const [singleReview, setSingleReview] = useState();
  const [review, setReview] = useState();

  const postAlbum = async () => {
    await axios.post("http://localhost:8090/addalbum", {
      artist: artist,
      albumname: albumname,
      imgurl: imgurl,
      rate: rate,
      singleReview: singleReview,
      review: review,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    postAlbum();
  };

  return (
    <>
      <form method="post" onSubmit={onSubmit}>
        <input type="text" placeholder="아티스트명" value={artist} />
        <input type="text" placeholder="앨범 이름" value={albumname} />
        <input type="text" placeholder="앨범 커버 링크" value={imgurl} />
        <input type="text" placeholder="평점" value={rate} />
        <input type="text" placeholder="한 줄평" value={singleReview} />
        <input type="text" placeholder="평가" value={review} />
        <input type="submit" value="제출" />
      </form>
    </>
  );
}

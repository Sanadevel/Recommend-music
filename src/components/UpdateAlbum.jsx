import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Write.css";
import { useParams } from "react-router-dom";

export default function Write() {
  const [artist, setArtist] = useState("");
  const [albumname, setAlbumname] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [rate, setRate] = useState("");
  const [singleReview, setSingleReview] = useState("");
  const [review, setReview] = useState("");
  const postid = useParams();

  const postAlbum = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8090/UpdateAlbum",
      contentType: "application/json",
      data: {
        artist: artist,
        albumname: albumname,
        imgurl: imgurl,
        rate: rate,
        singleReview: singleReview,
        review: review,
        postid: postid,
      },
    });
  };

  const getAlbum = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8090/AlbumSelect",
      contentType: "application/json",
      data: {
        postid: postid,
      },
    }).then((response) => {
      setArtist(response.data[0].artist);
      setAlbumname(response.data[0].albumname);
      setImgurl(response.data[0].imgurl);
      setRate(response.data[0].rate);
      setSingleReview(response.data[0].singleReview);
      setReview(response.data[0].review);
    });
  };

  useEffect(() => {
    getAlbum();
  }, []);

  const onSubmit = () => {
    console.log(artist, albumname, imgurl, rate, singleReview, review);
    postAlbum();
  };

  return (
    <>
      <form method="post" onSubmit={onSubmit}>
        <div>
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
        </div>
        <textarea
          placeholder="평가"
          value={review}
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />
        <div>글자 수 : {review.length}</div>
        <input type="submit" value="수정하기" />
      </form>
    </>
  );
}

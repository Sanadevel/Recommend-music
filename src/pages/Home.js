import { useEffect, useState } from "react";
import "../styles/Home.css";
import noContent from "../img/NoContents.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Home({ isdark, albums }) {
  const [curIndex, setCurIndex] = useState(0);
  const [curAlbum, setCurAlbum] = useState([]);
  const albumLength = albums.length - 1;

  useEffect(() => {
    setCurAlbum(albums[curIndex]);
  }, [albums]);

  const nextOnClick = () => {
    if (curIndex == albumLength) {
      Swal.fire({
        icon: "error",
        text: "마지막 페이지입니다!!",
      });
    } else {
      setCurIndex(curIndex + 1);
      setCurAlbum(albums[curIndex + 1]);
    }
    console.log(curIndex);
  };

  const prevOnClick = () => {
    if (curIndex == 0) {
      Swal.fire({
        icon: "error",
        text: "첫 번째 페이지입니다!!",
      });
    } else {
      setCurIndex(curIndex - 1);
      setCurAlbum(albums[curIndex - 1]);
    }
    console.log(curAlbum.imgurl);
  };

  return (
    <div className="albumContainer">
      <button
        className={!isdark ? "albumBtn whiteBtn" : "albumBtn darkBtn"}
        id="prevAlbumBtn"
        onClick={prevOnClick}
      >
        &lt;
      </button>
      {curAlbum != null ? (
        <div className="homeCurAlbum">
          <div className="curAlbumIndex">
            [ {curIndex + 1} / {albumLength + 1} ]
          </div>
          <div className="curAlbumName">
            {curAlbum.artist} - {curAlbum.albumname}
          </div>
          <Link data={curAlbum} to="/Albums">
            <img src={curAlbum.imgurl} className="curAlbumImg" />
          </Link>
          <div className="curAlbumRate">{curAlbum.rate}</div>
          <hr className="hr" />
          <div className="curAlbumReview">{curAlbum.singleReview}</div>
        </div>
      ) : (
        <>
          <div className="curAlbumName">불러오는 중....</div>
          <img className="curAlbumImg" src={noContent} />
        </>
      )}
      <button
        className={!isdark ? "albumBtn whiteBtn" : "albumBtn darkBtn"}
        id="nextAlbumBtn"
        onClick={nextOnClick}
      >
        &gt;
      </button>
    </div>
  );
}

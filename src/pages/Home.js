import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Home.css";

export default function Home() {
  const [albums, setAlbums] = useState([]);

  const [prevAlbum, setPrevAlbum] = useState([]);
  const [curAlbum, setCurAlbum] = useState([]);
  const [nextAlbum, setNextAlbum] = useState([]);

  useEffect(() => {
    getAlbum();
  }, []);

  useEffect(() => {
    const albumLength = albums.length;
    let randomIndex = parseInt(Math.random() * albumLength);

    setCurAlbum(albums[randomIndex]);

    if (albumLength == randomIndex) {
      setPrevAlbum();
      setNextAlbum();
    }
  }, [albums]);

  const getAlbum = async () => {
    await axios.get("http://localhost:8090/testSelect").then((response) => {
      if (albums != response.data) {
        setAlbums(response.data);
      }
      console.log(response.data);
    });
  };

  return (
    <div className="homeCurAlbum">
      {curAlbum != null ? (
        <>
          <div className="curAlbumName">
            {curAlbum.artist} - {curAlbum.albumname}
          </div>
          <img src={curAlbum.imgurl} className="curAlbumImg" />
          <div className="curAlbumRate">{curAlbum.rate}</div>
          <hr className="hr" />
          <div className="curAlbumReview">{curAlbum.singleReview}</div>
        </>
      ) : null}
    </div>
  );
}

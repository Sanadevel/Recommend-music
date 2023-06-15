import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoContents from "../img/NoContents.png";

export default function AlbumDetail() {
  const [album, setAlbum] = useState([]);
  const params = useParams();

  const getAlbum = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8090/AlbumSelect",
      contentType: "application/json",
      data: {
        postid: params,
      },
    }).then((response) => {
      setAlbum(response.data[0]);
    });
  };

  useEffect(() => {
    getAlbum();
    console.log(album);
  }, []);

  return (
    <div className="albums">
      <div className="album-info">
        <div className="artist">
          {album.artist} - {album.albumname}
        </div>
        <hr />
        <img
          className="album-cover"
          src={album.imgurl ? album.imgurl : NoContents}
          alt="AlbumCover"
        />
        {album.rate}
        <span className="singleReview">{album.singleReview}</span>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import "../styles/Albums.css";
import axios from "axios";

export default function Albums({ data }) {
  const apikey = process.env.REACT_APP_SPOTIFY_API_KEY;
  const album = data;
  const [cover, setCover] = useState();

  useEffect(() => {
    getAlbumCover();
  }, []);

  async function getAlbumCover() {
    const response = axios.get(`https://api.spotify.com/v1/albums/`, {
      headers: {
        Authorization: `Bearer${apikey}`,
      },
      params: {
        q: album.album,
        type: "album",
        limit: 1,
      },
    });
    console.log(response);
  }

  return (
    <div className="album-info">
      <div className="artist">
        {album.artist} - {album.album}
        <img className="album-cover" src={album.imgUrl} alt="AlbumCover" />
        {album.rate}
      </div>
    </div>
  );
}

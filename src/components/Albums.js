import { useEffect, useState } from "react";
import "../styles/Albums.css";
import NoContents from "../img/NoContents.png";

export default function Albums({ data }) {
  const album = data;

  return (
    <div className="album-info">
      <div className="artist">
        {album.artist} - {album.album}
        <img
          className="album-cover"
          src={album.imgUrl ? album.imgUrl : NoContents}
          alt="AlbumCover"
        />
        {album.rate}
      </div>
    </div>
  );
}

// const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
// const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
// const BASE_64_ENCODED = `${CLIENT_ID}:${CLIENT_SECRET}`.toString("base64");
// const [cover, setCover] = useState();
// const [token, setToken] = useState();

// useEffect(() => {
//   getToken();
//   getAlbumCover();
// }, []);

// async function getToken() {
//   const response = await fetch(`https://accounts.spotify.com/api/token`, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body:
//       "grant_type=client_credentials&client_id=" +
//       CLIENT_ID +
//       "&client_secrets=" +
//       CLIENT_SECRET,
//   });
//   console.log(response);
// }

// async function getAlbumCover() {
//   const response = axios.get(`https://api.spotify.com/v1/search`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     params: {
//       q: album.album,
//       type: "album",
//     },
//   });
//   console.log(response);
// } 스포티파이 API 불러올라다가 실패

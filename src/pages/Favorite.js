import { useEffect, useState } from "react";
import Albums from "../components/Albums";

export default function Favorite({ albums }) {
  const [album, setAlbum] = useState();
  const [index, setIndex] = useState();

  useEffect(function (e) {
    provideData();
    console.log(index);
  }, album);

  const provideData = () => {
    let randomIndex = parseInt(Math.random() * albums.length);
    setAlbum(albums[randomIndex]);
    setIndex(randomIndex);
  };

  return (
    <>
      {album !== undefined ? (
        <Albums album={album} provideData={provideData} />
      ) : (
        "adsf"
      )}
    </>
  );
}

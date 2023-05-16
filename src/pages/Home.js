import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    getAlbum();
    console.log(albums);
  }, []);

  const getAlbum = async () => {
    const response = await axios.get("http://localhost:8090/testSelect");
    const data = await response.data;
    console.log(data);
    setAlbums(data[0]);
  };

  return (
    <>
      <h1>앨범 추천</h1>
      <div></div>
    </>
  );
}

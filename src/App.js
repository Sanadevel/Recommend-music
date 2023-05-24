import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Switch from "./components/Switch";
import axios from "axios";

export default function App() {
  const [isdark, setIsdark] = useState(false);
  const [albums, setAlbums] = useState([]);
  const albumLength = albums.length;
  useEffect(() => {
    getAlbum();
  }, []);

  const getAlbum = async () => {
    await axios.get("http://localhost:8090/testSelect").then((response) => {
      if (albums != response.data) {
        setAlbums(response.data);
      }
      console.log(response.data);
    }, []);
  };

  return (
    <div className="album-recommend">
      <BrowserRouter>
        <Header isdark={isdark} />
        <Switch isdark={isdark} onClick={setIsdark} />
        <Routes>
          <Route path="/" element={<Home albums={albums} isdark={isdark} />} />
          <Route path="/Write" element={<Write albums={albums} />} />
          <Route path="/Favorite" element={<Favorite albums={albums} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

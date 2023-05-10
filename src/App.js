import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Best from "./pages/Best";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Switch from "./components/Switch";

export default function App() {
  const [isdark, setIsdark] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("scrolled");
    });
  }, []);

  return (
    <div className="album-recommend">
      <BrowserRouter>
        <Header isdark={isdark} />
        <Switch isdark={isdark} onClick={setIsdark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Best" element={<Best />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

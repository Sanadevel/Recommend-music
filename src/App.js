import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Best from "./pages/Best";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Header from "./components/Header";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("scrolled");
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Best" element={<Best />} />
          <Route path="/Favorite" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
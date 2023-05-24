import { Link } from "react-router-dom";
import "../styles/Header.css";
import whiteTopster from "../img/TopsterWhite.png";
import blacktopster from "../img/TopsterBlack.png";

export default function Header({ isdark }) {
  return (
    <div className="header">
      <div className="header-box">
        <img
          className="header-img"
          src={isdark ? blacktopster : whiteTopster}
        />
        <div className="header-text">새너식 음악추천</div>
      </div>
      <header className={isdark ? "header-bg-black" : "header-bg-white"}>
        <Link className="header-item" to="/">
          홈으로
        </Link>
        <Link className="header-item" to="/Favorite">
          랜덤 앨범 추천
        </Link>
        <Link className="header-item" to="/Write">
          앨범 추가
        </Link>
      </header>
    </div>
  );
}

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
          src={isdark ? whiteTopster : blacktopster}
        />
        <div className="header-text">새너식 음악추천</div>
      </div>
      <header>
        <Link className="header-item" to="/">
          홈으로
        </Link>
        <Link className="header-item" to="/Best">
          최고 앨범
        </Link>
        <Link className="header-item" to="/Favorite">
          최애 앨범
        </Link>
      </header>
    </div>
  );
}

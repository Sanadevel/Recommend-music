import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
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
  );
}

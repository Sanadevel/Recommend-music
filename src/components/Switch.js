import { useEffect, useState } from "react";
import "../styles/Switch.css";

export default function Switch({ onClick, isdark }) {
  const [checked, onChecked] = useState(false);

  const onChange = () => {
    if (checked === false) {
      onChecked(true);
    } else {
      onChecked(false);
    }
  };

  useEffect(() => {
    onChecked(false);
  }, []);

  useEffect(() => {
    const body = document.getElementById("body");
    if (document.getElementById("switch").checked == true) {
      body.className = "dark";
    } else {
      body.className = "white";
    }
  }, onchange);

  return (
    <div className="switch">
      <div className="switch-text">다크 모드</div>
      <input
        type="checkbox"
        checked={checked}
        id="switch"
        onChange={onChange}
        onClick={(e) => onClick(!isdark)}
      />
      <label htmlFor="switch">
        <span className="switch-button"></span>
      </label>
    </div>
  );
}

//다크모드 새로고침시 유지하는 코드 넣어야함

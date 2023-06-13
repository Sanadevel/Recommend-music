import { useEffect, useState } from "react";
import "../styles/List.css";
import Delete from "../img/Delete.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function List({ albums }) {
  const [postid, setPostid] = useState("");
  const onClick = () => {
    Swal.fire({
      title: "정말 이 리뷰를 삭제하시겠습니까?",
      text: "그래도 하시겠습니까?",
      icon: "warning",

      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        deleteAlbum();
        Swal.fire({
          title: "앨범이 삭제되었습니다!",
          text: "다시 쓰십쇼!!!!!!!!!",
          icon: "success",
        });
      } else {
        return;
      }
      window.location.reload();
    });
  };

  const deleteAlbum = async () => {
    await axios.post("http://localhost:8090/DeleteAlbum", {
      data: postid,
    });
  };

  return (
    <>
      <div className="album-list">
        {albums.map((album) => (
          <div className="album-post" key={album.postid}>
            <Link to={`/Favorite/${album.postid}`}>
              <span>
                {album.postid}. {album.artist} - {album.albumname}
              </span>
            </Link>
            <span className="UD">
              <Link to={`/Update/${album.postid}`}>
                <button className="edit-btn">
                  <img className="edit-img" src={Delete} />
                </button>
              </Link>
              <button
                className="delete-btn"
                onMouseEnter={() => {
                  setPostid(album.postid);
                }}
                onClick={onClick}>
                <img className="delete-img" src={Delete} />
              </button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

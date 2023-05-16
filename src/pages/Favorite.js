import { useEffect, useState } from "react";
import Albums from "../components/Albums";

export default function Favorite() {
  const favoriteAlbums = [
    {
      artist: "",
      album: "",
      img: "../img/",
      rate: "",
      singleReview: "",
      review: "",
      postid: 0,
    },
    {
      artist: "Lamp",
      album: "For Lovers",
      imgUrl:
        "https://e.snmc.io/i/fullres/w/2210d1acf8210b64e1d8a57fc71f3872/5670926",
      rate: "[9.5/10]",
      singleReview: "가장 따스하고 아름다운 감정의 앨범",
      review: "평가",
      postid: 1,
    },
    {
      artist: "XXX",
      album: "KYOMI",
      imgUrl:
        "https://e.snmc.io/i/fullres/w/4bf0dad8475f9555492688c8ec7169eb/6417840",
      rate: "[8/10]",
      singleReview: "매운데 중독성있는 한끼 식사를 마친 기분",
      review: "",
      postid: 2,
    },
    {
      artist: "신세이 카맛테짱",
      album: "つまんね(시시해)",
      imgUrl:
        "https://e.snmc.io/i/fullres/w/f8ee09e83bed1aaa1aa8fd343061b2a3/10453499",
      rate: "[7.5/10]",
      singleReview: "날 것의 앨범, 내지르는 앨범, 찢어내는 앨범",
      review: "",
      postid: 3,
    },
    {
      artist: "The Beatles",
      album: "The Beatles(화이트 앨범)",
      imgUrl:
        "https://e.snmc.io/i/fullres/w/89a36efbe72ea476c3927639b0e4c473/7430929",
      rate: "[9/10]",
      singleReview:
        "일관성을 만들어낸 밴드가 일관성을 고려치 않은 앨범에 존재하는 하나의 일관성, 명곡",
      review: "",
      postid: 4,
    },
    {
      artist: "Sweet Trip",
      album: "'Velocity:Design:Comfort.'",
      img: "../img/VDC.png",
      rate: "[8.5/10]",
      singleReview: "20년이 지났지만 대체제가 나오지 않는 앨범",
      review: "",
      postid: 5,
    },
  ];

  const [data, setData] = useState();

  useEffect(function (e) {
    provideData();
  }, []);

  function checkedState(checked) {
    console.log(checked);
  }
  
  const provideData = () => {
    let getRandomIndex = parseInt(Math.random() * favoriteAlbums.length);
    setData(favoriteAlbums[getRandomIndex]);
    console.log(favoriteAlbums[getRandomIndex]);
  };

  return <>{data !== undefined ? <Albums data={data} /> : "adsf"}</>;
}

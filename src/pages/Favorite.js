import Albums from "../components/Albums";

export default function Favorite() {
  const favoriteAlbums = [
    ["아티스트 명", "앨범 명", "[평점]", "한줄 평", "평가"],
    [
      "Lamp",
      "For Lovers",
      "[9.5/10]",
      "가장 따스하고 아름다운 감정의 앨범",
      "평가",
    ],
    [
      "XXX",
      "KYOMI",
      "[8/10]",
      "매운데 중독성있는 한끼 식사를 마친 기분",
      "평가",
    ],
    [
      "신세이 카맛테짱",
      "つまんね(시시해)",
      "[7.5/10]",
      "날 것의 앨범, 내지르는 앨범, 찢어내는 앨범",
      "평가",
    ],
    [
      "The Beatles",
      "The Beatles(화이트 앨범)",
      "[9/10]",
      "일관성을 만들어낸 밴드가 일관성을 고려치 않은 앨범에 존재하는 하나의 일관성, 명곡",
      "평가",
    ],
    [
      "Sweet Trip",
      "Velocity:Design:Comfort.",
      "[8.5/10]",
      "20년이 지났지만 대체제가 나오지 않는 앨범",
      "평가",
    ],
  ];
  const bestAlbums = [
    ["아티스트 명", "앨범 명", "[평점]", "한줄 평", "평가"],
    [
      "Lamp",
      "For Lovers",
      "[9.5/10]",
      "가장 따스하고 아름다운 감정의 앨범",
      "평가",
    ],
    [
      "Sweet Trip",
      "Velocity:Design:Comfort.",
      "[8.5/10]",
      "20년이 지났지만 대체제가 나오지 않는 앨범",
      "평가",
    ],
  ];

  return <Albums favoriteAlbums={favoriteAlbums} />;
}

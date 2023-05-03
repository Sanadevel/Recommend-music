import Albums from "../components/Albums";

export default function Best() {
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

  return (
    <>
      <Albums />
    </>
  );
}

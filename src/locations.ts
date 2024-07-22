class Location {
  display: string;
  description: string;
  value: string;

  constructor(name: string, description: string, value: string) {
    this.display = name;
    this.description = description;
    this.value = value;
  }
}

const locations = [
  new Location("교실", "자신의 교실로 선택", "classroom"),
  new Location("물 화장실", "방과후, 야자 중 물 또는 화장실", "water"),
  new Location("생활관", "세탁, 조기입실로 학봉관/우정학사 입실", "dormitory"),
  new Location("복도", "각 교실 밖 복도", "hallway"),
  new Location("열람실", "3학년 자습시간", "readingroom"),
  new Location("방과후", "방과 후 추가 희망 수업", "afterschool"),
  new Location("귀가 / 외출", "특정 사유로 외출 혹은 귀가", "outdoor"),
];

export { locations };

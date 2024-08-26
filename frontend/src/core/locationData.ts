export interface LocationTypes {
  location: string;
}

const LOCATIONS: LocationTypes[] = [
  {
    location: "버스",
  },
  {
    location: "학교 밖",
  },
  {
    location: "정문",
  },

  /*-------ecc---------- */
  {
    location: "ecc 학생서비스센터",
  },
  {
    location: "ecc 산책로",
  },
  {
    location: "ecc 기타",
  },

  /*-------학관---------- */
  {
    location: "학관",
  },
  { location: "학관 경비실" },
  { location: "학관 강의실" },
  { location: "학관 학생회실/과방/단대방" },
  { location: "학관 생협/씨유/식당" },
  {
    location: "학관 라운지/열람실",
  },
  {
    location: "학관 기타",
  },

  /*-------학문관---------- */
  {
    location: "학문관",
  },
  { location: "학문관 경비실" },
  { location: "학문관 강의실" },
  { location: "학문관 학생회실/과방/단대방" },
  { location: "학문관 생협/씨유/식당" },
  {
    location: "학문관 라운지/열람실",
  },
  {
    location: "학문관 기타",
  },

  /*-------생활관---------- */
  {
    location: "생활관",
  },
  { location: "생활관 경비실" },
  { location: "생활관 강의실" },
  { location: "생활관 학생회실/과방/단대방" },
  { location: "생활관 생협/씨유/식당" },
  {
    location: "생활관 라운지/열람실",
  },
  {
    location: "생활관 기타",
  },

  /*-------포관---------- */
  {
    location: "포관(포스코관)",
  },
  { location: "포관(포스코관) 경비실" },
  { location: "포관(포스코관) 강의실" },
  { location: "포관(포스코관) 학생회실/과방/단대방" },
  { location: "포관(포스코관) 생협/씨유/식당" },
  {
    location: "포관(포스코관) 라운지/열람실",
  },
  {
    location: "포관(포스코관) 기타",
  },

  /*-------종과---------- */
  {
    location: "종과(종합과학관)",
  },
  { location: "종과(종합과학관) 경비실" },
  { location: "종과(종합과학관) 강의실" },
  { location: "종과(종합과학관) 학생회실/과방/단대방" },
  { location: "종과(종합과학관) 생협/씨유/식당" },
  {
    location: "종과(종합과학관) 라운지/열람실",
  },
  {
    location: "종과(종합과학관) 기타",
  },

  /*-------국교관---------- */
  {
    location: "국교관(국제교육관)",
  },
  { location: "국교관(국제교육관) 경비실" },
  { location: "국교관(국제교육관) 강의실" },
  { location: "국교관(국제교육관) 학생회실/과방/단대방" },
  { location: "국교관(국제교육관) 생협/씨유/식당" },
  {
    location: "국교관(국제교육관) 라운지/열람실",
  },
  {
    location: "국교관(국제교육관) 기타",
  },

  /*-------신세계관---------- */
  {
    location: "신세계관",
  },
  { location: "신세계관 경비실" },
  { location: "신세계관 강의실" },
  { location: "신세계관 학생회실/과방/단대방" },
  { location: "신세계관 생협/씨유/식당" },
  {
    location: "신세계관 라운지/열람실",
  },
  {
    location: "신세계관 기타",
  },

  /*-------교육관---------- */
  { location: "교육관" },
  { location: "교육관 경비실" },
  { location: "교육관 강의실" },
  { location: "교육관 학생회실/과방/단대방" },
  { location: "교육관 생협/씨유/식당" },
  {
    location: "교육관 라운지/열람실",
  },

  /*-------약학관---------- */
  {
    location: "약학관 기타",
  },
  { location: "약학관" },
  { location: "약학관 경비실" },
  { location: "약학관 강의실" },
  { location: "약학관 학생회실/과방/단대방" },
  { location: "약학관 생협/씨유/식당" },
  {
    location: "약학관 라운지/열람실",
  },
  {
    location: "약학관 기타",
  },

  /*-------체육관---------- */
  { location: "체육관" },
  { location: "체육관 경비실" },
  { location: "체육관 강의실" },
  { location: "체육관 학생회실/과방/단대방" },
  { location: "체육관 생협/씨유/식당" },
  {
    location: "체육관 라운지/열람실",
  },
  {
    location: "체육관 기타",
  },

  /*-------음악관---------- */
  { location: "음악관" },
  { location: "음악관 경비실" },
  { location: "음악관 강의실" },
  { location: "음악관 학생회실/과방/단대방" },
  { location: "음악관 생협/씨유/식당" },
  {
    location: "음악관 라운지/열람실",
  },
  {
    location: "음악관 기타",
  },

  /*-------조형예술관---------- */
  { location: "조형예술관" },
  { location: "조형예술관 경비실" },
  { location: "조형예술관 강의실" },
  { location: "조형예술관 학생회실/과방/단대방" },
  { location: "조형예술관 생협/씨유/식당" },
  {
    location: "조형예술관 라운지/열람실",
  },
  {
    location: "조형예술관 기타",
  },

  /*-------법학관---------- */
  { location: "법학관" },
  { location: "법학관 경비실" },
  { location: "법학관 강의실" },
  { location: "법학관 학생회실/과방/단대방" },
  { location: "법학관 생협/씨유/식당" },
  {
    location: "법학관 라운지/열람실",
  },
  {
    location: "법학관 기타",
  },

  /*-------헬렌관---------- */
  { location: "헬렌관" },
  { location: "헬렌관 경비실" },
  { location: "헬렌관 강의실" },
  { location: "헬렌관 학생회실/과방/단대방" },
  { location: "헬렌관 생협/씨유/식당" },
  {
    location: "헬렌관 라운지/열람실",
  },
  {
    location: "헬렌관 기타",
  },

  /*-------대학원관---------- */
  { location: "대학원관" },
  { location: "대학원관 경비실" },
  { location: "대학원관 강의실" },
  { location: "대학원관 학생회실/과방/단대방" },
  { location: "대학원관 생협/씨유/식당" },
  {
    location: "대학원관 라운지/열람실",
  },
  {
    location: "대학원관 기타",
  },

  /*-------진선미관---------- */
  { location: "진선미관" },
  { location: "진선미관 경비실" },
  { location: "진선미관 강의실" },
  { location: "진선미관 학생회실/과방/단대방" },
  { location: "진선미관 생협/씨유/식당" },
  {
    location: "진선미관 라운지/열람실",
  },
  {
    location: "진선미관 기타",
  },

  /*-------아산공학관---------- */
  { location: "아산공학관" },
  { location: "아산공학관 경비실" },
  { location: "아산공학관 강의실" },
  { location: "아산공학관 학생회실/과방/단대방" },
  { location: "아산공학관 생협/씨유/식당" },
  {
    location: "아산공학관 라운지/열람실",
  },
  {
    location: "아산공학관 기타",
  },

  /*-------신공학관---------- */
  { location: "신공학관" },
  { location: "신공학관 경비실" },
  { location: "신공학관 강의실" },
  { location: "신공학관 학생회실/과방/단대방" },
  { location: "신공학관 생협/씨유/식당" },
  {
    location: "신공학관 라운지/열람실",
  },
  {
    location: "신공학관 기타",
  },

  /*-------연구협력관---------- */
  { location: "연구협력관" },
  { location: "연구협력관 경비실" },
  { location: "연구협력관 강의실" },
  { location: "연구협력관 학생회실/과방/단대방" },
  { location: "연구협력관 생협/씨유/식당" },
  {
    location: "연구협력관 라운지/열람실",
  },
  {
    location: "연구협력관 기타",
  },

  /*-------산학협력관---------- */
  { location: "산학협력관" },
  { location: "산학협력관 경비실" },
  { location: "산학협력관 강의실" },
  { location: "산학협력관 학생회실/과방/단대방" },
  { location: "산학협력관 생협/씨유/식당" },
  {
    location: "산학협력관 라운지/열람실",
  },
  {
    location: "산학협력관 기타",
  },

  /*-------중앙도서관---------- */
  { location: "중앙도서관" },

  /*-------기숙사---------- */
  { location: "기숙사" },
  { location: "기숙사 E하우스" },
  { location: "기숙사 E하우스 201,202,203,204" },
  { location: "기숙사 E하우스 301,302,303,304" },
  { location: "기숙사 E하우스 생협/씨유/식당" },
  { location: "기숙사 I하우스" },
  { location: "기숙사 I하우스 A동" },
  { location: "기숙사 I하우스 B동" },
  { location: "기숙사 I하우스 C동" },
  { location: "기숙사 I하우스 D동" },
  { location: "기숙사 I하우스 E동" },
  { location: "기숙사 I하우스 생협/씨유/식당" },
  { location: "기숙사 한우리집" },
  { location: "기숙사 한우리집 101,102,103" },
  { location: "기숙사 한우리집 생협/씨유/식당" },

  /*-------대강당---------- */
  { location: "대강당" },
  { location: "대강당 1층" },
  { location: "대강당 2층" },
];

export { LOCATIONS };

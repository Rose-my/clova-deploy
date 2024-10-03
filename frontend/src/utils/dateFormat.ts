// api용 날짜 포맷 DDDD.MM.DD
export function convertServerDate(serverDate: string) {
  const kor = new Date(serverDate);
  const year = kor.getFullYear().toString();
  const month = (kor.getMonth() + 1).toString().padStart(2, "0");
  const day = kor.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
}

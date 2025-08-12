const CHO = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

function getChoseong(char: string) {
  const code = char.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) return char; // 한글이 아니면 그대로 반환
  const choIndex = Math.floor((code - 0xac00) / 28 / 21);
  return CHO[choIndex];
}

export function maskName(name: string) {
  // 영문 처리
  if (/^[A-Za-z\s]+$/.test(name)) {
    return name
      .trim()
      .split(/\s+/) // 공백 여러 개도 처리
      .map((word) =>
        word.length > 0 ? word[0] + word[1] + "·".repeat(word.length - 1) : "",
      )
      .join(" ");
  }

  // 한글 처리
  if (/^[가-힣]+$/.test(name)) {
    const len = name.length;

    if (len === 2) {
      // 2글자 → 뒤 글자 초성
      return name[0] + getChoseong(name[1]);
    }

    if (len === 3) {
      // 3글자 → 기존 로직 유지
      return name[0] + getChoseong(name[1]) + name[2];
    }

    if (len >= 4) {
      // 4글자 이상 → 첫 글자 + (중간 전부 초성) + 마지막 글자
      return (
        name[0] +
        name
          .slice(1, len - 1)
          .split("")
          .map(getChoseong)
          .join("") +
        name[len - 1]
      );
    }
  }

  return name; // 그 외는 그대로 반환
}

export function getUser(no: number) {
  if (no < 0) throw new Error("유효한 유저 숫자를 입력하세요.");
  return {
    no,
    email: `user${no}@gmail.com`,
  };
}

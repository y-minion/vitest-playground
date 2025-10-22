import { getUser } from "src/utils/getUser";
import { expect, test } from "vitest";

const add = (x: number, y: number) => x + y;

test("두개의 정수를 받으면 두개의 합을 반환한다.", () => {
  expect(add(1, 2)).toBe(3);
});
test("두개의 실수를 받으면 두개의 합을 반환한다.", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});
test("객체의 주소값이 다르면 같지 않아야 한다.", () => {
  expect({}).not.toBe({});
});
test("객체의 주소값이 같으면 동일해야 한다.", () => {
  const obj = {};
  expect(obj).toBe(obj);
});

//객체 비교하는 경우 -> toEqual을 사용하면 주소값을 비교하는게 아니라 객체 내부의 내용을 기준으로 비교한다.
test("유저의 객체를 반환해야 합니다", () => {
  expect(getUser(12)).toEqual({
    no: 12,
    email: "user12@gmail.com",
  });
});

test("객체의 일부만 이용해서 비교하는 경우", () => {
  const obj = {
    no: 12,
    email: "user12@gmail.com",
    firstName: "John",
    lastName: "Doe",
  };

  //toMatchObject를 이용하면 전체 객체를 비교하지 않고 특정 속성이 있는지 부분적으로 확인할 수 있다. -> 즉 메서드 이름처럼 전달하는 객체와 매칭이 되는가? 를 비교할 수 있다.
  expect(obj).toMatchObject({
    no: 12,
    firstName: "John",
  });

  //객체가 특정 속성을 갖고있는지, 혹은 특정 속성-값 쌍을 갖고있는지 확인 할 수 있다.
  expect(obj).toHaveProperty("no");
  expect(obj).toHaveProperty("firstName", "John");
});

test("배열을 테스트 하는경우", () => {
  const color = ["Red", "Yellow", "Blue"];
  const colorObjArr = [
    { color: "Red" },
    { color: "Yellow" },
    { color: "Blue" },
  ];

  //길이를 확인 할 경우
  expect(color).toHaveLength(3);

  // 특정 원시 값을 확인 할 경우
  expect(color).toContain("Red");
  expect(color).not.toContain("Green");

  //배열 내부의 값들이 원시값이 아니라 객체인 경우에는 Equal을 사용하면 된다.
  expect(colorObjArr).toContainEqual({ color: "Blue" });
});

const users = [
  { no: 1, email: "user1@gmail.com" },
  { no: 2, email: "user2@gmail.com" },
  { no: 3, email: "user3@gmail.com" },
];

function findUser(no: number) {
  return users.find((user) => user.no === no) ?? null;
}

test("유저의 객체를 찾는다", () => {
  expect(findUser(1)).toBeDefined();
  expect(findUser(1)).not.toBeUndefined();
  expect(findUser(1)).not.toBeNull();
});

test("없는 번호를 입력하면 유저의 객체를 찾지 못한다.", () => {
  expect(findUser(21324)).toBeNull();
});

test("숫자 0은 falsy지만, 문자열 0은 truthy하다.", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});

test("반환값의 타입을 확인할 수 있다.", () => {
  expect(1).toBeTypeOf("number");
});

test("어떤 객체인지 알 수 있다", () => {
  const date = new Date();
  expect(date).toBeInstanceOf(Date);
  expect(date).toBeInstanceOf(Object);
});

test("에러 발생을 유발하는 키를 입력하면 에러가 발생한다.", () => {
  expect(() => getUser(-1)).toThrowError();
  expect(() => getUser(-1)).toThrowError("유효한 유저 숫자를 입력하세요.");
  expect(() => getUser(-1)).toThrowError(/유효한/i);
});

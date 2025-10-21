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
});

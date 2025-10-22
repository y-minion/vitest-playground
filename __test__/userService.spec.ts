import { users } from "src/data";
import { UserService } from "src/utils/userService";
import { afterEach, beforeEach, expect, test } from "vitest";

let userService: UserService;

afterEach(() => {
  users.splice(0);
});

beforeEach(() => {
  userService = new UserService();

  users.push(
    { no: 1, email: "user1@gmail.com" },
    { no: 2, email: "user2@gmail.com" },
    { no: 3, email: "user3@gmail.com" }
  );
});

test("findAll 테스트", () => {
  const foundUsers = userService.findAll();

  expect(foundUsers).toHaveLength(3);
  expect(foundUsers).toContainEqual({ no: 1, email: "user1@gmail.com" });
  expect(foundUsers).toContainEqual({ no: 2, email: "user2@gmail.com" });
});

test("create()테스트", () => {
  const user = { no: 4, email: "user4@test.com" };
  userService.create(user);
  expect(users).toHaveLength(4);
  expect(users).toContainEqual(user);
});

test("delete()", () => {
  const no = 3;
  userService.delete(no);
  expect(users).toHaveLength(2);
  expect(users).not.toContainEqual({ no: 3, email: "user3@test.com" });
});

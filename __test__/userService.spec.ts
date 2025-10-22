import { users } from "src/data";
import { UserService } from "src/utils/userService";
import { afterEach, expect, test } from "vitest";

afterEach(() => {
  users.splice(0);
});

test("findAll 테스트", () => {
  const userService = new UserService();

  users.push(
    { no: 1, email: "user1@gmail.com" },
    { no: 2, email: "user2@gmail.com" },
    { no: 3, email: "user3@gmail.com" }
  );

  const foundUsers = userService.findAll();

  expect(foundUsers).toHaveLength(3);
  expect(foundUsers).toContainEqual({ no: 1, email: "user1@gmail.com" });
  expect(foundUsers).toContainEqual({ no: 2, email: "user2@gmail.com" });
});

test("create()테스트", () => {
  const userService = new UserService();
  const user = { no: 4, email: "user4@test.com" };
  userService.create(user);
  expect(users).toHaveLength(1);
  expect(users).toContainEqual(user);
});

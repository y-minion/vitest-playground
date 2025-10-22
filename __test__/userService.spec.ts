import { users } from "src/data";
import { UserService } from "src/utils/userService";
import { expect, test } from "vitest";

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

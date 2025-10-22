import { users, type User } from "src/data";

export class UserService {
  findAll() {
    return users;
  }

  findOne(no: number) {
    return users.find((user) => user.no === no);
  }

  create(user: User) {
    users.push(user);
    return user;
  }

  delete(no: number) {
    users.splice(
      users.findIndex((user) => user.no === no),
      1
    );
  }
}

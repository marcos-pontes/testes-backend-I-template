export type User = {
  name: string;
};

export function findUserByName(name: string, users: User[]): User | undefined {
  return users.find((user) => user.name === name);
}

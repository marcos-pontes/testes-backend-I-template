import {User, findUserByName} from "../src/pratica3Exercicio"

describe('findUserByName', () => {
  const userList: User[] = [
    { name: "Alice" },
    { name: "Astrodev" }
  ];

  test('encontra o usuário pelo nome', () => {
    expect(findUserByName('Astrodev', userList)).toEqual({ name: 'Astrodev' });
  });

});
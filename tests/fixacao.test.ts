import { fixacao } from "../src/fixacao";

describe("Função Pratica Fixação", () => {
  test("Deve retornar null caso o valor não seja uma string", () => {
    expect(fixacao((["abc", "teste", 5] as any) || {})).toBe(null);
  });

  test("Deve retornar um array de strings onde cada item é uma letra da palavra original", () => {
    expect(fixacao("test")).toEqual(["t", "e", "s", "t"]);
  });
});

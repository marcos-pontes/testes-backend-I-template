import {stringToNumber} from "../src/pratica1Exercicio"

describe('stringToNumber', () => {
  test('converte uma string numérica para número', () => {
    expect(stringToNumber('50')).toBe(50);
    expect(stringToNumber('3.14')).toBe(3.14);
  });

  
});
import {formatDate} from "../src/pratica2Exercicio"

describe('formatDate', () => {
  test('formata uma data no formato "aaaa/mm/dd" para "dd/mm/aaaa"', () => {
    expect(formatDate('2022/09/26')).toBe('26/09/2022');
  });
});

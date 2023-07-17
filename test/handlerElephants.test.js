const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa se a função retorna 4 se o argumento for count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Testa se a função retorna um array de nomes se o argumento for names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Testa se a função retorna a media de idades se o argumento for averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('Testa se a função retorna localização se o argumento for location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('Testa se a função retorna popularidade se o argumento for popularity', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });
  test('Testa se a função retorna a relação de dias em que é possível visitar se o argumento for availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  test('Testa se a função retorna undefined se o parametro for vazio ', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Testa se a função retorna uma frase se o parametro for diferente de string', () => {
    expect(handlerElephants(9)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Testa se a função retorna null se o argumento for diferente dos casos', () => {
    expect(handlerElephants('teste')).toBeNull();
  });
});

const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Testa se a função retorna um objeto se não receber um argumento', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  const zooClosed = 'The zoo is closed';
  const zooOpen = 'The zoo is open';
  test('Testa se a função retorna closed se receber Monday e 10:00-AM', () => {
    expect(getOpeningHours('Monday', '10:00-AM')).toBe(zooClosed);
  });
  test('Testa se a função retorna open se receber Tuesday e 09:00-AM', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(zooOpen);
  });
  test('Testa se a função retorna open se receber Tuesday e 08:30-AM', () => {
    expect(getOpeningHours('Tuesday', '08:30-AM')).toBe(zooOpen);
  });
  test('Testa se a função retorna closed se receber Wednesday e 09:00-PM', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  test('Testa se a função retorna uma exceção se receber Thu e 09:00-AM', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  test('Testa se a função retorna um exceção se receber Friday e 09:00-ZM', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  test('Testa se a função retorna um exceção se receber Saturday e C9:00-AM', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  test('Testa se a função retorna um exceção se receber Sunday e 09:c0-AM', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  test('Testa se a função retorna um exceção se receber Sunday e 13:00-AM', () => {
    expect(() => getOpeningHours('Sunday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  test('Testa se a função retorna um exceção se receber Sunday e 12:60-AM', () => {
    expect(() => getOpeningHours('Sunday', '12:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
  test('Testa a função fix12 se o open for 12 e se close for 12', () => {
    const data = hours;
    data.Monday.open = 12;
    data.Monday.close = 12;
    expect(getOpeningHours('Monday', '12:00-PM')).toBe(zooClosed);
  });
});

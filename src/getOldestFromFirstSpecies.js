const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  // seu código aqui
  const employeeResponsibleFor = data.employees
    .find((employee) => employee.id === id).responsibleFor[0];

  const { name, sex, age } = data.species
    .find((specie) => specie.id === employeeResponsibleFor).residents
    .reduce((acc, curr) => {
      if (!acc || acc.age < curr.age) {
        return curr;
      }
      return acc;
    });
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;

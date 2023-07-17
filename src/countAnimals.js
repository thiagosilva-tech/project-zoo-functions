const data = require('../data/zoo_data');

const findSpecies = (speciesName) => data.species
  .find((element) => element.name === speciesName);

const countAnimals = (animal) => {
  // seu código aqui
  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const { species: speciesName, sex } = animal;
  const species = findSpecies(speciesName);
  let { residents } = species;
  if (sex) {
    residents = residents.filter((resident) => resident.sex === sex);
  }
  return residents.length;
};

module.exports = countAnimals;

const data = require('../data/zoo_data');

function createAnimalOptions(filteredSpecies, { sorted, sex }) {
  return filteredSpecies.map(({ name, residents }) => {
    let animalNames;
    if (sex) {
      animalNames = residents
        .filter((resident) => resident.sex === sex)
        .map((resident) => resident.name);
    } else animalNames = residents.map((resident) => resident.name);
    if (sorted) animalNames.sort();
    return { [name]: animalNames };
  });
}

function createAnimal(location, options, species) {
  const filteredSpecies = species.filter((specie) => specie.location === location);
  if (options && options.includeNames) return createAnimalOptions(filteredSpecies, options);
  return filteredSpecies.map(({ name }) => name);
}

function getAnimalMap(options) {
  // seu código aqui
  return {
    NE: createAnimal('NE', options, data.species),
    NW: createAnimal('NW', options, data.species),
    SE: createAnimal('SE', options, data.species),
    SW: createAnimal('SW', options, data.species),
  };
}

console.log(getAnimalMap());
module.exports = getAnimalMap;

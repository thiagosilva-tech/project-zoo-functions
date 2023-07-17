const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  data.species.filter((elemento) => ids.includes(elemento.id));

module.exports = getSpeciesByIds;

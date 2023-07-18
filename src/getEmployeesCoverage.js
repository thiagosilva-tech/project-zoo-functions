const data = require('../data/zoo_data');

function createObjEmployee(info) {
  const findEmployee = data.employees
    .find(({ firstName, lastName, id }) =>
      firstName === info.name || lastName === info.name || id === info.id);
  if (!findEmployee) {
    throw new Error('Informações inválidas');
  }
  const species = data.species.filter(({ id }) => findEmployee.responsibleFor.includes(id));
  return {
    id: findEmployee.id,
    fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
    species: species.map(({ name }) => name),
    locations: species.map(({ location }) => location),
  };
}

const getEmployeesCoverage = (info) => {
  // seu código aqui
  if (info) {
    return createObjEmployee(info);
  }
  return data.employees.map(({ id }) => createObjEmployee({ id }));
};

module.exports = getEmployeesCoverage;

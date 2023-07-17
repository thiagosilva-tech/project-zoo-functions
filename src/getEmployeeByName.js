const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => data.employees
  .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName) || {};

module.exports = getEmployeeByName;

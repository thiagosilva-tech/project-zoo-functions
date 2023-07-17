const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((obj, { age }) => {
  const newObj = { ...obj };
  if (age < 18) {
    newObj.child += 1;
  } else if (age >= 18 && age < 50) {
    newObj.adult += 1;
  } else {
    newObj.senior += 1;
  }
  return newObj;
}, { child: 0, senior: 0, adult: 0 });

function result(entrants) {
  const { child, adult, senior } = countEntrants(entrants);
  const {
    child: priceChild,
    adult: priceAdult,
    senior: priceSenior,
  } = data.prices;
  return child * priceChild + adult * priceAdult + senior * priceSenior;
}

const calculateEntry = (entrants) => {
  // seu código aqui
  if (!entrants || entrants.lenght === 0) {
    return 0;
  }
  return result(entrants);
};

module.exports = { calculateEntry, countEntrants };

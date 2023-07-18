const data = require('../data/zoo_data');

function createObjDay(day) {
  if (day === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  const { open, close } = data.hours[day];
  return {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: data.species
      .filter(({ availability }) => availability.includes(day))
      .map(({ name }) => name),
  };
}

const getSchedule = (scheduleTarget) => {
  // seu código aqui
  const speciesTarget = data.species.find(({ name }) => name === scheduleTarget);
  if (speciesTarget) {
    return speciesTarget.availability;
  }

  if (Object.prototype.hasOwnProperty.call(data.hours, scheduleTarget)) {
    return {
      [scheduleTarget]: createObjDay(scheduleTarget),
    };
  }

  return {
    Tuesday: createObjDay('Tuesday'),
    Wednesday: createObjDay('Wednesday'),
    Thursday: createObjDay('Thursday'),
    Friday: createObjDay('Friday'),
    Saturday: createObjDay('Saturday'),
    Sunday: createObjDay('Sunday'),
    Monday: createObjDay('Monday'),
  };
};

module.exports = getSchedule;

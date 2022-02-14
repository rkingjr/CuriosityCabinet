const { User } = require('../models');

const userdata = [
  {
    name: 'Karl Marx',
    title: 'Political Economist',
    affiliation: 'School of Hard Knocks',
  },
  {
    name: 'Hannah Arendt',
    title: 'Philosopher',
    affiliation: 'Homo Faber Tech',
  },
  {
    name: 'Jacques Lacan',
    title: 'Psychoanalyst',
    affiliation: 'University of Lost Objects',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;

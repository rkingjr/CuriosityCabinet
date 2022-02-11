const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedImage = require('./imageData');
const seedComments = require('./commentsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedImage();

  await seedComments();

  process.exit(0);
};

seedAll();

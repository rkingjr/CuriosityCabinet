require('dotenv').config({ path: require('find-config')('.env') });
const Sequelize = require('sequelize');

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL, {
            host: 'eanl4i1omny740jw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            dialect: 'mysql',
            dialectOptions: {
                decimalNumbers: true,
            }
        });} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

module.exports = sequelize;

const Sequelize = require('sequelize');
const {
  DB_NAME,
  DB_USER_NAME,
  DB_USER_PASSWORD,
  DB_HOST,
  DB_DIALECT,
} = require('../config');
const { applyExtraSetup } = require('./extraSetup');

const db = new Sequelize(DB_NAME, DB_USER_NAME, DB_USER_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

const modelDefiners = [require('./models/Campus')];

for (const modelDefiner of modelDefiners) {
  modelDefiner(db);
}

applyExtraSetup(db);

module.exports = db;

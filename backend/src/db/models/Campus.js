const sq = require('sequelize');

module.exports = (db) => {
  db.define('campuses', {
    name: {
      type: sq.STRING,
    },
    address: {
      type: sq.STRING,
    },
    description: {
      type: sq.STRING,
    },
  });
};

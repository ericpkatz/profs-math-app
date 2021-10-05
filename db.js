const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL);

const { STRING } = Sequelize;

const syncAndSeed = async()=> {
  await conn.sync({ force: true });
  await Promise.all([
    User.create({ name: 'moe'}),
    User.create({ name: 'lucy'}),
    User.create({ name: 'ethyl'}),
  ]);
};

const User = conn.define('user', ()=> {
  name: STRING
});

module.exports = {
  syncAndSeed,
  models: { 
    User
  }
};


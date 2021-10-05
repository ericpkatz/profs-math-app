const { expect } = require('chai');
const Sequelize = require('sequelize');
console.log(process.env.DATABASE_URL);
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db_test');
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

describe('Math', ()=> {
  describe('1 + 1', ()=> {
    it('is 2', ()=> {
      expect(1 + 1).to.equal(2);
    });
  });
});

describe('My Database', ()=> {
  beforeEach(()=> syncAndSeed());
  describe('User.findAll', ()=> {
    it('there are 3 users', async()=> {
      const users = await User.findAll();
      expect(users.length).to.equal(3);
    });
  });
});

const { expect } = require('chai');
const { models: { User}, syncAndSeed } = require('./db');

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

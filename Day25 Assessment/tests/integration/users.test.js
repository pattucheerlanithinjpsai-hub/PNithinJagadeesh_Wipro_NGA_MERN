const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const app = require('../../server');

describe('Users Routes Integration Tests', () => {
  let request;

  before(() => {
    request = supertest(app);
  });

  describe('GET /api/users', () => {
    it('should return all users', async () => {
      const res = await request.get('/api/users');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.have.lengthOf.at.least(2); // Assuming initial data
    });
  });

  describe('GET /api/users/:id', () => {
    it('should return a user by id', async () => {
      const res = await request.get('/api/users/1');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('id', 1);
      expect(res.body).to.have.property('name');
      expect(res.body).to.have.property('email');
    });

    it('should return 404 for non-existent user', async () => {
      const res = await request.get('/api/users/999');
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('message', 'User not found');
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const newUser = { name: 'Alice Johnson', email: 'alice@example.com' };
      const res = await request.post('/api/users').send(newUser);
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('id');
      expect(res.body).to.have.property('name', 'Alice Johnson');
      expect(res.body).to.have.property('email', 'alice@example.com');
    });
  });

  describe('PUT /api/users/:id', () => {
    it('should update an existing user', async () => {
      const updatedUser = { name: 'Updated Name', email: 'updated@example.com' };
      const res = await request.put('/api/users/1').send(updatedUser);
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('name', 'Updated Name');
      expect(res.body).to.have.property('email', 'updated@example.com');
    });

    it('should return 404 for non-existent user', async () => {
      const res = await request.put('/api/users/999').send({ name: 'Test' });
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('message', 'User not found');
    });
  });

  describe('DELETE /api/users/:id', () => {
    it('should delete an existing user', async () => {
      const res = await request.delete('/api/users/1');
      expect(res.status).to.equal(204);
    });

    it('should return 404 for non-existent user', async () => {
      const res = await request.delete('/api/users/999');
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('message', 'User not found');
    });
  });
});

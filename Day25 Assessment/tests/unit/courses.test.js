const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');
const app = require('../../server');

describe('Courses Routes Unit Tests', () => {
  let request;

  before(() => {
    request = supertest(app);
  });

  describe('GET /api/courses', () => {
    it('should return all courses', async () => {
      const res = await request.get('/api/courses');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.have.lengthOf.at.least(2);
    });
  });

  describe('GET /api/courses/:id', () => {
    it('should return a course by id', async () => {
      const res = await request.get('/api/courses/1');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('id', 1);
      expect(res.body).to.have.property('title');
      expect(res.body).to.have.property('description');
    });

    it('should return 404 for non-existent course', async () => {
      const res = await request.get('/api/courses/999');
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('message', 'Course not found');
    });
  });

  describe('POST /api/courses', () => {
    it('should create a new course', async () => {
      const newCourse = { title: 'React Basics', description: 'Learn React' };
      const res = await request.post('/api/courses').send(newCourse);
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property('id');
      expect(res.body).to.have.property('title', 'React Basics');
      expect(res.body).to.have.property('description', 'Learn React');
    });
  });

  describe('PUT /api/courses/:id', () => {
    it('should update an existing course', async () => {
      const updatedCourse = { title: 'Updated JavaScript', description: 'Updated description' };
      const res = await request.put('/api/courses/1').send(updatedCourse);
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('title', 'Updated JavaScript');
      expect(res.body).to.have.property('description', 'Updated description');
    });

    it('should return 404 for non-existent course', async () => {
      const res = await request.put('/api/courses/999').send({ title: 'Test' });
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('message', 'Course not found');
    });
  });

  describe('DELETE /api/courses/:id', () => {
    it('should delete an existing course', async () => {
      const res = await request.delete('/api/courses/1');
      expect(res.status).to.equal(204);
    });

    it('should return 404 for non-existent course', async () => {
      const res = await request.delete('/api/courses/999');
      expect(res.status).to.equal(404);
      expect(res.body).to.have.property('message', 'Course not found');
    });
  });
});

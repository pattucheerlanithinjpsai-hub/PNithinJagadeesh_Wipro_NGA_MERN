const request = require('supertest');
const app = require('./server'); // Make sure server.js exports the Express app

describe('GET /api/customers', () => {
  it('should return 200 and an array of customers', async () => {
    const res = await request(app).get('/api/customers');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should filter by name', async () => {
    const res = await request(app).get('/api/customers?name=John');
    expect(res.statusCode).toBe(200);
    res.body.forEach(customer => {
      expect(customer.customer_name.toLowerCase()).toContain('john');
    });
  });

  it('should filter by location', async () => {
    const res = await request(app).get('/api/customers?location=NY');
    expect(res.statusCode).toBe(200);
    res.body.forEach(customer => {
      expect(customer.location.toLowerCase()).toContain('ny');
    });
  });

  it('should sort by created_at', async () => {
    const res = await request(app).get('/api/customers?sortBy=created_at');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    // Optional: check if sorted
    for (let i = 1; i < res.body.length; i++) {
      const prev = new Date(res.body[i - 1].created_at);
      const curr = new Date(res.body[i].created_at);
      expect(prev <= curr).toBe(true);
    }
  });
});

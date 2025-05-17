import request from 'supertest';
import app from '../index.js';

describe('POST /matrix', () => {

  it('devuelve Q, R y estadísticas cuando la matriz es válida', async () => {

    const res = await request(app)
      .post('/matrix')
      .send({
        matrix: [
          [1, 2],
          [3, 4],
          [5, 6],
        ]
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.Q).toBeDefined();
    expect(res.body.R).toBeDefined();

    // Validamos dimensiones básicas de Q y R
    expect(res.body.Q.length).toBe(3);   
    expect(res.body.Q[0].length).toBe(2);
    expect(res.body.R.length).toBe(2);   
    expect(res.body.R[0].length).toBe(2);
  });

  it('devuelve error 400 si la matriz no es un array', async () => {
    const res = await request(app)
      .post('/matrix')
      .send({ matrix: 'no es matriz' });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Matriz inválida');
  });

});

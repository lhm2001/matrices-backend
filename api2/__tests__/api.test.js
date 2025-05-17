import request from 'supertest';
import app from '../index.js';

describe('POST /process', () => {
  it('devuelve max, min, avg, sum e isDiagonal correctamente', async () => {
    const Q = [
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3]
    ];

    const R = [
      [0, 0],
      [0, 0]
    ];

    const res = await request(app)
      .post('/process')
      .send({ Q, R });

    expect(res.statusCode).toBe(200);
    expect(res.body.max).toBe(3);
    expect(res.body.min).toBe(0);
    expect(res.body.sum).toBe(6);
    expect(res.body.avg).toBeCloseTo(6 / 13);
    expect(res.body.isDiagonal).toBe(true);
  });

  it('detecta cuando ninguna matriz es diagonal', async () => {
    const Q = [
      [1, 2],
      [3, 4]
    ];

    const R = [
      [5, 6],
      [7, 8]
    ];

    const res = await request(app)
      .post('/process')
      .send({ Q, R });

    expect(res.statusCode).toBe(200);
    expect(res.body.isDiagonal).toBe(false);
  });

  it('devuelve error 400 si faltan las matrices', async () => {
    const res = await request(app)
      .post('/process')
      .send({}); // Nada enviado

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Matrices Q y R inválidas');
  });
});

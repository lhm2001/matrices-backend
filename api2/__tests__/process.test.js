import { analyzeMatrices } from "../utils/matrixUtils.js";

describe('analyzeMatrices', () => {
  it('calcula correctamente estadísticas cuando una matriz es diagonal', () => {
    const Q = [
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ];

    const R = [
      [0, 0],
      [0, 0],
    ];

    const result = analyzeMatrices(Q, R);

    expect(result.max).toBe(3);
    expect(result.min).toBe(0);
    expect(result.sum).toBe(6);
    expect(result.avg).toBeCloseTo(6 / 13);
    expect(result.isDiagonal).toBe(true);
  });

  it('detecta cuando ninguna matriz es diagonal', () => {
    const Q = [
      [1, 2],
      [3, 4]
    ];

    const R = [
      [5, 6],
      [7, 8]
    ];

    const result = analyzeMatrices(Q, R);

    expect(result.isDiagonal).toBe(false);
  });

  it('lanza error si Q o R son inválidas', () => {
    expect(() => analyzeMatrices('invalid', [])).toThrow('Matrices Q y R inválidas');
    expect(() => analyzeMatrices([], null)).toThrow('Matrices Q y R inválidas');
  });
});

import { processMatrix } from "../utils/matrixUtils";

describe('QR Decomposition', () => {
  it('debe devolver matrices Q y R válidas', () => {
    const input = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    
    const result = processMatrix(input);

    expect(result.Q).toBeDefined();
    expect(result.R).toBeDefined();
    expect(result.Q[0].length).toBe(2);
    expect(result.R[0].length).toBe(2);
  });
});

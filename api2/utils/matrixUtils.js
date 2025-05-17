export function analyzeMatrices(Q, R) {
  
  if (!Q || !R || !Array.isArray(Q) || !Array.isArray(R)) {
    throw new Error('Matrices Q y R inválidas');
  }

  const combined = [...Q.flat(), ...R.flat()];

  const sum = combined.reduce((acc, val) => acc + val, 0);
  const count = combined.length;
  const avg = sum / count;
  const max = Math.max(...combined);
  const min = Math.min(...combined);

  const isDiagonal = isMatrixDiagonal(Q) || isMatrixDiagonal(R);

  return {
    max,
    min,
    avg,
    sum,
    isDiagonal,
  };
}

function isMatrixDiagonal(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i !== j && matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

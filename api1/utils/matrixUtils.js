import { Matrix, QrDecomposition } from 'ml-matrix';

// Función que procesa la matriz y hace la descomposición QR
export function processMatrix(matrix) {
  if (!matrix || !Array.isArray(matrix)) {
    throw new Error('Matriz inválida');
  }

  const mat = new Matrix(matrix);
  const qr = new QrDecomposition(mat);

  const Q = qr.orthogonalMatrix;
  const R = qr.upperTriangularMatrix;

  const qArray = Q.to2DArray();
  const rArray = R.to2DArray();

  return {
    Q: qArray,
    R: rArray,
  };
}
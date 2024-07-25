function calculateNumber (type, a, b) {
  const anum = Math.round(a);
  const bnum = Math.round(b);
  if (type === 'SUM') return anum + bnum;
  else if (type === 'SUBTRACT') return anum - bnum;
  else if (type === 'DIVIDE') {
    if (b !== 0) return anum / bnum;
    return 'Error';
  }
}

module.exports = calculateNumber;

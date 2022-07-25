function crusoe(n, d, ang, distmult, angmult) {
  let angRadians = ang * (Math.PI / 180),
      x = 0,
      y = 0;

  for(let i = 0; i < n; i++) {
    x += d * Math.cos(angRadians);
    y += d * Math.sin(angRadians);       
    d = d * distmult;
    angRadians = angRadians * angmult;
  }

  return [x, y];
}

console.log( crusoe(5, 0.2, 30, 1.02, 1.1) );
console.log( crusoe(45, 0.10, 3, 1.01, 1.10) );
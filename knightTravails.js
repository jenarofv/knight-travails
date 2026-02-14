function getNeighbours(vertex) {
  const allNeighbours = [];
  const x = vertex[0];
  const y = vertex[1];
  allNeighbours.push([x + 2, y + 1]);
  allNeighbours.push([x + 2, y - 1]);
  allNeighbours.push([x - 2, y + 1]);
  allNeighbours.push([x - 2, y - 1]);
  allNeighbours.push([x + 1, y + 2]);
  allNeighbours.push([x + 1, y - 2]);
  allNeighbours.push([x - 1, y + 2]);
  allNeighbours.push([x - 1, y - 2]);
  let posibleNeighbours = allNeighbours.filter(
    ([x, y]) => 0 <= Math.min(x, y) && Math.max(x, y) < 8,
  );
  return posibleNeighbours;
}

export { getNeighbours };

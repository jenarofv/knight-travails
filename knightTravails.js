function knightTravails(start, end) {
  const visited = [];
  const parents = {};
  setParent(start, null);
  visit(start);
  const q = [start];

  while (q.length > 0) {
    const head = q.shift();
    const neighbours = getNeighbours(head);
    for (const neighbour of neighbours) {
      if (isVisited(neighbour)) {
        continue;
      }
      visit(neighbour);
      q.push(neighbour);
      setParent(neighbour, head);
      if (equalVertex(neighbour, end)) {
        return createPath(end);
      }
    }
  }

  function visit(vertex) {
    const vertexName = `${vertex[0]}${vertex[1]}`;
    visited.push(vertexName);
  }

  function isVisited(vertex) {
    const vertexName = `${vertex[0]}${vertex[1]}`;
    return visited.includes(vertexName);
  }

  function createPath(vertex) {
    const path = [];
    while (vertex !== null) {
      const x = vertex[0];
      const y = vertex[1];
      path.unshift([x, y]);
      vertex = getParent(vertex);
    }
    return path;
  }

  function setParent(child, parent) {
    const childName = `${child[0]}${child[1]}`;
    parents[childName] = parent;
  }

  function getParent(vertex) {
    const vertexName = `${vertex[0]}${vertex[1]}`;
    return parents[vertexName];
  }

  function equalVertex(v1, v2) {
    return v1[0] === v2[0] && v1[1] === v2[1];
  }

  function getNeighbours(v) {
    const allNeighbours = [];
    const x = v[0];
    const y = v[1];
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
}

export { knightTravails };

console.log(knightTravails([0, 0], [1, 1]));

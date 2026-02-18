class GraphMatrix {
  constructor(size, { directed = false, weighted = false } = {}) {
    this.size = size;
    this.directed = directed;
    this.weighted = weighted;

    this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
  }

  addEdge(i, j, weight = 1) {
    if (i >= this.size || j >= this.size) {
      throw new Error("Invalid vertex index");
    }

    const value = this.weighted ? weight : 1;

    this.matrix[i][j] = value;

    if (!this.directed) {
      this.matrix[j][i] = value;
    }
  }

  removeEdge(i, j) {
    this.matrix[i][j] = 0;
    if (!this.directed) {
      this.matrix[j][i] = 0;
    }
  }

  // do these nodes have any connection?
  hasEdge(i, j) {
    return this.matrix[i][j] !== 0;
  }

  getWeight(i, j) {
    return this.matrix[i][j];
  }

  print() {
    console.log(this.matrix);
  }
}

const graph = new GraphMatrix(4, {
  directed: true,
  weighted: true,
});

graph.addEdge(0, 1, 5);
graph.addEdge(1, 2, 3);

graph.print();

const undirectedGraph = new GraphMatrix(3, {
  directed: false,
  weighted: false,
});

undirectedGraph.addEdge(0, 2);
undirectedGraph.addEdge(0, 1);

undirectedGraph.print();

// Test edge existence and weight retrieval
console.log(graph.hasEdge(0, 1));
console.log(graph.getWeight(0, 1));
console.log(undirectedGraph.hasEdge(0, 2));
console.log(undirectedGraph.getWeight(0, 2));

// Test edge removal
graph.removeEdge(0, 1);
undirectedGraph.removeEdge(0, 2);
graph.print();
undirectedGraph.print();

// Test invalid edge addition
try {
  graph.addEdge(0, 4);
} catch (error) {
  console.error(error.message);
}

// Time: O(1) for addEdge, removeEdge, hasEdge, getWeight
// Space: O(n^2) for the adjacency matrix

class Graph {
    constructor(isDirected = false) {
        this.adjList = new Map();
        this.isDirected = isDirected;
    }

    addVertex (v) {
        if (!this.adjList.has(v)) {
            this.adjList.set(v, []);
        }
    }

    addEdge (v, w, weight = 1) {
        this.addVertex(v);
        this.addVertex(w);

        this.adjList.get(v).push({ node: w, weight });

        if (!this.isDirected) {
            this.adjList.get(w).push({ node: v, weight });
        }
    }

    removeEdge(v, w) {
        if (!this.adjList.has(v) || !this.adjList.has(w)) throw new Error("Vertex does not exist");

        this.adjList.set(v, 
            this.adjList.get(v).filter(n => n.node !== w)
        );

        if (!this.isDirected) {
            this.adjList.set(w, 
                this.adjList.get(w).filter(n => n.node !== v)
            ); 
        }
    }

    removeVertex(v) {
        if (!this.adjList.has(v)) throw new Error("Vertex does not Exist");

        if (!this.isDirected) {
            for (let { node } of this.adjList.get(v)) {
                this.removeEdge(node, v);
            }
        } else {
            for (let vertex of this.adjList.keys()) {
                this.removeEdge(vertex, v);
            }
        }

        this.adjList.delete(v);
    }
}

const directedGraph = new Graph(true);
directedGraph.addVertex('A');
directedGraph.addEdge('A', 'B', 5);
directedGraph.addEdge('B', 'C', 3);
directedGraph.addEdge('C', 'B', 2);
console.log(directedGraph.adjList);

const undirectedGraph = new Graph(false);
undirectedGraph.addEdge('X', 'Y');
undirectedGraph.addEdge('Y', 'Z');
console.log(undirectedGraph.adjList);

undirectedGraph.removeEdge('X', 'Y');
console.log(undirectedGraph.adjList);
undirectedGraph.removeVertex('Y');
console.log(undirectedGraph.adjList);

directedGraph.removeEdge('A', 'B');
console.log(directedGraph.adjList);
directedGraph.removeVertex('B');
console.log(directedGraph.adjList);

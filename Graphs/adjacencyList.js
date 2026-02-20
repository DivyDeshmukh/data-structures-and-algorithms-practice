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

    bfs(start) {
        if (!this.adjList.has(start)) {
            throw new Error("Start vertex not found");
        }

        const visited = new Set();
        const queue = [start];

        const result = [];

        visited.add(start);
        let i = 0;

        while (i < queue.length) {
            const vertex = queue[i++];       // vertex processing
            result.push(vertex);

            for (const { node } of this.adjList.get(vertex)) {                      // edge processing
                if (!visited.has(node)) {
                    visited.add(node);
                    queue.push(node);
                }
            }
        }

        // we are tracking visited vertices to avoid processing the same vertex multiple times, which can lead to infinite loops in cyclic graphs. Also, there can be bidirectional edges in undirected graphs, so we need to ensure that we don't revisit vertices we've already processed.

        return result;
    }
    /* 
        Time: O(V + E)
        Space: O(V)
    */
    
    /*
        ✔ BFS needs FIFO → queue.
        ✔ Recursion gives LIFO → stack.
        ✔ Pure recursion → DFS, not BFS.
        ✔ Recursive BFS possible only if queue used.
        ✔ So recursion alone cannot replace queue in BFS.
    */
    
    dfs(start) {
        if (!this.adjList.has(start)) {
            throw new Error("Start vertex not found");
        }

        const visited = new Set();
        const result = [];

        const dfsHelper = (vertex) => {
            visited.add(vertex);
            result.push(vertex);

            for (const { node } of this.adjList.get(vertex)) {
                if (!visited.has(node)) {
                    dfsHelper(node);
                }
            }
        }

        dfsHelper(start);
        return result;
    } 
    /*
        Time: O(V + E)
        Space: O(V)
    */
    
    dfsIterative(start) {
        if (!this.adjList.has(start)) {
            throw new Error("Start vertex not found");
        }

        const visited = new Set();
        const stack = [start];

        const result = [];

        while (stack.length) {
            const vertex = stack.pop();

            if (!visited.has(vertex)) {
                visited.add(vertex);
                result.push(vertex);

                for (const { node } of this.adjList.get(vertex)) {
                    if (!visited.has(node)) {
                        stack.push(node);
                    }
                }
            }
        }

        return result;
    }

    /*
        Time:- O(V + E )
        Space:- O(V)
    */
    
    fullTraversalDFS() {
        const visited = new Set();
        const result = [];

        for (let vertex of this.adjList.keys()) {
            if (!visited.has(vertex)) {
                this._dfsUtil(vertex, visited, result);
            }
        }

        return result;
    }

    _dfsUtil(vertex, visited, result) {
        visited.add(vertex);
        result.push(vertex);

        for (const { node } of this.adjList.get(vertex)) {
            if (!visited.has(node)) {
                this._dfsUtil(node, visited, result);
            }
        }

        return result;
    }
    
    print() {
        for (let [v, edges] of this.adjList) {
            console.log(v, "->", edges);
        }
    }

    hasVertex(v) {
        return this.adjList.has(v);
    }
}

const directedGraph = new Graph(true);
directedGraph.addVertex('A');
directedGraph.addEdge('A', 'B', 5);
directedGraph.addEdge('B', 'C', 3);
directedGraph.addEdge('C', 'B', 2);
directedGraph.addVertex('D');
console.log(directedGraph.adjList);
console.log("Traversed: ", directedGraph.bfs('A'));
console.log("Traversed: ", directedGraph.dfs('A'));
console.log("Traversed: ", directedGraph.dfsIterative('A'));
console.log("Traversed: ", directedGraph.fullTraversalDFS('A'));

const undirectedGraph = new Graph(false);
undirectedGraph.addEdge('X', 'Y', 3);
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


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const indegree = new Array(numCourses).fill(0);

    for (let [a,b] of prerequisites) {
        graph[b].push(a);
        indegree[a]++;
    }

    const queue = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0)
            queue.push(i);
    }

    const order = [];

    while (queue.length) {
        const node = queue.shift();
        order.push(node);

        for (let next of graph[node]) {
            indegree[next]--;

            if (indegree[next] === 0) 
                queue.push(next);
        }
    }

    if (order.length === numCourses)
        return order;

    return [];
};

// Time: O(V + E) where V is the number of courses and E is the number of prerequisites
// Space: O(V + E) for the graph and indegree arrays
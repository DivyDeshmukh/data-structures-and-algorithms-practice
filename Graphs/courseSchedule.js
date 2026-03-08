/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    // const indegree = new Array(numCourses).fill(0);

    // for (let [a,b] of prerequisites) {
    //     graph[b].push(a);
    //     indegree[a]++;
    // }

    // const queue = [];

    // for (let i = 0; i < numCourses; i++) {
    //     if (indegree[i] === 0)
    //         queue.push(i);
    // }

    // let count = 0;

    // while(queue.length) {
    //     const course = queue.shift();
    //     count++;

    //     for (let next of graph[course]) {
    //         indegree[next]--;

    //         if (indegree[next] === 0)
    //             queue.push(next);
    //     }
    // }

    // return count === numCourses;

    // DFS Approach
    for (let [a,b]  of prerequisites) {
        graph[b].push(a);
    }

    const state = new Array(numCourses).fill(0);

    function dfs(course) {
        if(state[course] === 1) return false;
        if(state[course] === 2) return true;

        state[course] = 1;

        for (let next of graph[course]) {
            if (!dfs(next)) return false;
        }

        state[course] = 2;
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
};

// Time complexity of both approaches is O(V + E) where V is the number of courses and E is the number of prerequisites. The space complexity is also O(V + E) due to the graph representation and additional data structures used.
// The BFS approach uses a queue and an indegree array, while the DFS approach uses a state array to track the visitation status of each course.
// Space complexity of the BFS approach is O(V + E) due to the graph representation and the indegree array, while the DFS approach also has a space complexity of O(V + E) due to the graph representation and the state array.
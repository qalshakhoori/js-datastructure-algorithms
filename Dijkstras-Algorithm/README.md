# Dijkstra's Algorithm Implementation in JavaScript - Efficient Shortest Path Finding

This project implements Dijkstra's algorithm in JavaScript, providing an efficient solution for finding the shortest path between nodes in a weighted graph. The implementation features a priority queue-based approach that optimizes path discovery in complex networks.

The implementation offers a complete weighted graph data structure with support for dynamic vertex and edge management. It uses a binary heap-based priority queue to ensure efficient node selection during path finding, making it suitable for both small and large graph networks. The algorithm calculates not just the shortest distance but also provides the complete path between any two vertices in the graph.

## Repository Structure
```
.
└── Dijkstras-Algorithm/
    └── Dijkstra.js    # Core implementation containing Node, PriorityQueue, and WeightedGraph classes
```

## Usage Instructions
### Prerequisites
- Node.js (version 12.0.0 or higher)
- JavaScript runtime environment

### Installation
1. Clone the repository:
```bash
git clone [repository-url]
cd Dijkstras-Algorithm
```

2. No additional dependencies are required as the implementation uses pure JavaScript.

### Quick Start
```javascript
// Create a new weighted graph
const graph = new WeightedGraph();

// Add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

// Add edges with weights
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);

// Find shortest path
const shortestPath = graph.Dijkstra('A', 'C');
console.log(shortestPath); // Output: ['A', 'C']
```

### More Detailed Examples
1. Creating a Complex Graph:
```javascript
const graph = new WeightedGraph();

// Add multiple vertices
['A', 'B', 'C', 'D', 'E'].forEach(vertex => graph.addVertex(vertex));

// Add weighted edges
graph.addEdge('A', 'B', 9);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'C', 2);
graph.addEdge('C', 'D', 7);
graph.addEdge('D', 'E', 3);

// Find different paths
console.log(graph.Dijkstra('A', 'E')); // Find path from A to E
console.log(graph.Dijkstra('B', 'D')); // Find path from B to D
```

### Troubleshooting
Common issues and solutions:

1. Infinite Distance Issue
   - Problem: Path returns empty or doesn't find a route
   - Solution: Ensure all vertices are connected and edges are properly defined
   ```javascript
   // Verify edge connections
   console.log(graph.adjacencyList);
   ```

2. Performance Optimization
   - For large graphs, monitor the number of vertices and edges
   - The algorithm's complexity is O((V + E) log V), where V is vertices and E is edges
   - Consider reducing graph size for better performance in large datasets

## Data Flow
The algorithm processes graph data through a priority queue-based system, maintaining distances and paths while exploring vertices based on minimum distances from the source.

```ascii
Input Graph → Priority Queue → Distance Tracking → Path Construction → Shortest Path
[Vertex A] →→→ [Queue Processing] →→→ [Distance Updates] →→→ [Path Assembly] →→→ [A→B→C]
```

Key Component Interactions:
1. WeightedGraph maintains the adjacency list structure
2. PriorityQueue manages vertex selection based on minimum distances
3. Node class handles vertex-priority pairs
4. Distance tracking updates as shorter paths are found
5. Previous vertex mapping maintains the path information
6. Path reconstruction occurs once target vertex is reached
7. Final path is returned in correct order through reverse operation
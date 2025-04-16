# JavaScript Data Structures and Algorithms Library

A comprehensive collection of JavaScript implementations for common data structures, algorithms, and problem-solving patterns. This library provides optimized solutions for technical interview preparation and algorithmic problem-solving.

The library includes implementations of fundamental data structures like Binary Search Trees, Hash Tables, and Graphs, along with essential algorithms such as Dijkstra's Algorithm and various sorting methods. It also features practical problem-solving patterns and techniques commonly used in technical interviews, with a focus on time and space complexity optimization.

## Repository Structure
```
.
├── BigO/                    # Time/space complexity examples and analysis
├── Challenges/             # Common coding interview problems with solutions
├── Dijkstras-Algorithm/    # Implementation of Dijkstra's shortest path algorithm
├── DS/                     # Core data structure implementations
│   ├── BinarySearchTree.js # Binary Search Tree with traversal methods
│   ├── Graph.js           # Graph implementation with DFS/BFS
│   ├── HashTable.js       # Hash Table with collision handling
│   └── ...                # Other data structures (Queue, Stack, etc.)
├── Dynamic-Programming/    # Dynamic programming solutions and examples
├── Problem-Solving/       # Basic problem-solving techniques
├── Problem-Solving-Patterns/ # Common algorithm design patterns
├── Recursion/            # Recursive solution implementations
├── Search/               # Search algorithm implementations
└── Sorting/             # Various sorting algorithm implementations
```

## Usage Instructions
### Prerequisites
- Node.js (version 12.0.0 or higher)
- npm (Node Package Manager)

### Installation
```bash
# Clone the repository
git clone https://github.com/[username]/js-algorithms-data-structures.git

# Navigate to project directory
cd js-algorithms-data-structures

# Install dependencies (if any)
npm install
```

### Quick Start
```javascript
// Example: Using the Binary Search Tree
const BST = require('./DS/BinarySearchTree');

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);

console.log(tree.contains(5)); // true
```

### More Detailed Examples
```javascript
// Example: Using Multiple Pointers Pattern
const { sumZeroWithMultiplePointers } = require('./Problem-Solving-Patterns/2-multiple-pointers');

// Find pair that sums to zero
console.log(sumZeroWithMultiplePointers([-4,-3,-2,-1,0,1,2,5])); // [-2, 2]

// Example: Using Dijkstra's Algorithm
const { WeightedGraph } = require('./Dijkstras-Algorithm/Dijkstra');

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B", 9);
console.log(graph.Dijkstra("A", "B")); // ["A", "B"]
```

### Troubleshooting
Common issues and solutions:

1. Stack Overflow in Recursive Functions
```javascript
// Problem: Maximum call stack exceeded
// Solution: Use iterative approach or increase stack size
node --stack-size=1000000 your-script.js
```

2. Performance Issues with Large Datasets
```javascript
// Problem: Slow performance with large arrays
// Solution: Use optimized algorithms
// Instead of:
array.sort((a,b) => a - b);
// Use:
const quickSort = require('./Sorting/6.QuickSort');
quickSort(array);
```

## Data Flow
The library implements a modular approach where each algorithm and data structure operates independently but can be combined for complex operations.

```ascii
Input Data → Data Structure → Algorithm → Transformed Data
     ↑          ↑               ↑              ↓
     └──────────┴───────────────┴──────────────┘
           (Chainable Operations)
```

Key component interactions:
1. Data structures provide the foundation for storing and organizing data
2. Algorithms operate on these data structures to perform specific operations
3. Problem-solving patterns provide reusable strategies for common problems
4. Search and sort operations can be applied to any compatible data structure
5. Dynamic programming solutions optimize recursive problems
6. Big O analysis helps in selecting appropriate algorithms based on input size
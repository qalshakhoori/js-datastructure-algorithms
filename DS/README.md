# JavaScript Linked List Implementation with Singly and Doubly Linked List Data Structures

This project provides robust implementations of both Singly and Doubly Linked List data structures in JavaScript. It offers a comprehensive set of methods for list manipulation with efficient traversal and modification operations.

The implementation includes two main classes: `SinglyLinkedList` and `DoublyLinkedList`, each providing essential operations like insertion, deletion, traversal, and list reversal. The Doubly Linked List implementation offers bi-directional traversal capabilities, making it more efficient for certain operations, while the Singly Linked List provides a memory-efficient alternative for unidirectional traversal needs.

## Repository Structure
```
DS/
├── BinarySearchTree.js   # Binary Search Tree implementation
├── DoublyLinkedList.js   # Implements bi-directional linked list with prev/next pointers
├── Graph.js             # Graph data structure implementation
├── HashTable.js         # Hash Table implementation
├── MaxBinaryHeap.js      # Max Binary Heap implementation
├── PriorityQueue.js      # Priority Queue implementation
├── Queue.js              # Queue implementation
├── README.md
├── SinglyLinkedList.js   # Implements unidirectional linked list with next pointers
└── Stack.js              # Stack implementation
```

## Usage Instructions
### Prerequisites
- Node.js runtime environment (any recent version)
- Basic understanding of JavaScript and data structures

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>
```

### Quick Start
1. Import the desired list implementation:

```javascript
// For Singly Linked List
const { SinglyLinkedList } = require('./DS/SinglyLinkedList.js');

// For Doubly Linked List
const { DoublyLinkedList } = require('./DS/DoublyLinkedList.js');
```

2. Create and manipulate a list:

```javascript
// Create a new list
const list = new SinglyLinkedList();

// Add elements
list.push("Hello");
list.push("World");

// Remove elements
const lastElement = list.pop();

// Insert at beginning
list.unshift("Start");
```

### More Detailed Examples

**Singly Linked List Operations:**
```javascript
const list = new SinglyLinkedList();

// Adding elements
list.push("Hello");    // Returns the updated list
list.push("Goodbye");
list.push("!");

// Accessing elements
const node = list.get(1);  // Returns the node at index 1
console.log(node.value);   // Outputs: "Goodbye"

// Modifying elements
list.set(1, "Hi");     // Returns true if successful

// Inserting elements
list.insert(1, "New"); // Returns true if successful

// Removing elements
const removed = list.remove(1); // Returns the removed node

// Reversing the list
list.reverse();        // Returns the reversed list
```

**Doubly Linked List Operations:**
```javascript
const list = new DoublyLinkedList();

// Adding elements
list.push("Harry");
list.push("Ron");
list.push("Hermione");

// Insert at beginning
list.unshift("Draco");

// Insert at specific position
list.insert(1, "Snape");

// Remove element
list.remove(1);

// Get element (optimized for bi-directional traversal)
const element = list.get(2);
```

### Troubleshooting

Common Issues and Solutions:

1. **Index Out of Bounds**
   - Problem: Accessing invalid index
   - Error: Returns `null` or `undefined`
   - Solution: Always check if index is within `0` and `list.length - 1`

2. **Empty List Operations**
   - Problem: Attempting operations on empty list
   - Solution: Check `list.length` before operations
   ```javascript
   if (list.length > 0) {
     // Perform operation
   }
   ```

3. **Memory Leaks**
   - Problem: Circular references in removed nodes
   - Solution: Ensure `remove()` operations clear both next/prev references

## Data Flow

The linked list implementations manage data through a chain of connected nodes, where each node contains a value and reference(s) to other nodes.

```ascii
Singly Linked List:
[Node(value, next)] -> [Node(value, next)] -> [Node(value, null)]

Doubly Linked List:
[Node(prev, value, next)] <-> [Node(prev, value, next)] <-> [Node(prev, value, null)]
```

Component Interactions:
1. Each node maintains its value and pointer(s) to other nodes
2. Head pointer tracks the first element
3. Tail pointer tracks the last element
4. Length property maintains the size of the list
5. Operations traverse the list using node references
6. Doubly linked list enables bi-directional traversal
7. Modifications update appropriate node references to maintain list integrity
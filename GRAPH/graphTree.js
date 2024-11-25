class Graph {
    constructor() {
      this.vertices = new Map();
    }
  
    isBidirectionalEdge(vertex1, vertex2) {
      const edgesOfVertex1 = this.vertices.get(vertex1);
      const edgesOfVertex2 = this.vertices.get(vertex2);
  
      return (
        edgesOfVertex1.has(vertex2) && edgesOfVertex2.has(vertex1)
      );
    }
  
    addVertex(vertex) {
      if (!this.vertices.has(vertex)) {
        this.vertices.set(vertex, new Set());
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
        console.log("Error: Both vertices must exist in the graph.");
        return
      }

      this.vertices.get(vertex1).add(vertex2);
    //   this.vertices.get(vertex2).add(vertex1); // Add the reverse edge for bidirectionality
    }
  
    deleteVertex(vertex) {
      if (this.vertices.has(vertex)) {
        const edgesToRemove = this.vertices.get(vertex);
        this.vertices.delete(vertex);
        for (let [key, edges] of this.vertices) {
          edges.delete(vertex);
        }
        for (let v of edgesToRemove) {
          this.vertices.get(v).delete(vertex);
        }
      }
    }
  
    containsVertex(vertex) {
      return this.vertices.has(vertex);
    }
  
    printGraph() {
      for (let [vertex, edges] of this.vertices) {
        const edgeList = [...edges].join(", ");
        console.log(`${vertex} -> [${edgeList}]`);
      }
    }
  }
  
  const myGraph = new Graph();
  

  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('C');
  myGraph.addVertex('D');
//   myGraph.addVertex(6);
  
//   myGraph.addEdge(3, 5);
//   console.log(myGraph);
//   myGraph.addEdge(3, 4);
//   myGraph.addEdge(5, 6);
  myGraph.addEdge("A", "C");
  myGraph.addEdge("A", "D");
  myGraph.addEdge("C", "A");
//   myGraph.addEdge("C", "D");
//   myGraph.addEdge("D", "A");
    // console.log(myGraph);

//   console.log("Original Graph:");
  myGraph.printGraph();
  
//   console.log("Vertex 'A' exists:", myGraph.containsVertex("A")); // true
//   console.log("Vertex 'E' exists:", myGraph.containsVertex("E")); // false
  
//   console.log("\nBidirectional edge between A and B:", myGraph.isBidirectionalEdge("A", "B")); // true
//   console.log("Bidirectional edge between B and A:", myGraph.isBidirectionalEdge("B", "A")); // true
//   console.log("Bidirectional edge between A and C:", myGraph.isBidirectionalEdge("A", "C")); // false
  
//   myGraph.deleteVertex("B");
  
//   console.log("\nGraph after deleting 'B':");
//   myGraph.printGraph();
  
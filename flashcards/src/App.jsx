import { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';
import ButtonControl from './components/ButtonControl';

const App = () => {

  const cards = [
    {
      /*1*/
      question: "What is a data structure?",
      answer: "A way to organize and store data so that it can be accessed and modified efficiently.",
      category: "easy",
      image: ""
    },
    {
      /*2*/
      question: "What are the main types of data structures",
      answer: "The main types of data structures include arrays, linked lists, stacks, queues, trees, graphs, sets, maps, heaps, and hash tables.",
      category: "easy",
      image: ""
    },
    { 
      /*3*/
      question: "What is an array, and how does it differ from a linked list?",
      answer: "An array is a collection of elements identified by index or key, with a fixed size. In contrast, a linked list consists of nodes that contain data and a reference to the next node, allowing for dynamic size.",
      category: "easy",
      image: ""
    },
    {
      /*4*/
      question: "What is the purpose of a stack in programming?",
      answer: "A stack is a data structure that follows the Last In, First Out (LIFO) principle, allowing data to be added and removed from the top. It’s used for tasks like function calls, backtracking algorithms, and undo operations.",
      category: "easy",
      image: ""
    },

    { 
      /*5*/
      question: "Explain the difference between a stack and a queue. Provide examples of where each might be used.",
      answer: "A stack uses LIFO, while a queue uses First In, First Out (FIFO). Stacks are used in function call management, while queues are used in scheduling tasks, like printer job management.",
      category: "medium",
      image: ""
    },
    {
      /*6*/
      question: "What is a binary tree, and what are its main properties?",
      answer: "A binary tree is a hierarchical data structure where each node has at most two children. Its main properties include the height of the tree, the number of nodes, and whether it is balanced.",
      category: "medium",
      image: ""
    },
    {
      /*7*/
      question: "Describe what a hash table is and how it resolves collisions.",
      answer: "A hash table is a data structure that maps keys to values for efficient data retrieval. It resolves collisions using techniques like chaining (storing multiple elements in a list at each index) or open addressing (finding another open slot).",
      category: "medium",
      image: ""
    },
    { 
      /*8*/
      question: "What are the time complexities for searching, inserting, and deleting an element in a binary search tree?",
      answer: "In a balanced binary search tree, searching, inserting, and deleting an element have an average time complexity of O(log n). In the worst case, these operations can take O(n) time.",
      category: "medium",
      image: ""
    },
    {
      /*9*/
      question: "Discuss the trade-offs between using an array versus a linked list in terms of memory usage and performance.",
      answer: "Arrays have fixed size and allow random access, making them efficient for indexed access, but they can waste space if not fully utilized. Linked lists use dynamic memory and can efficiently insert and delete elements but have higher overhead due to storing pointers",
      category: "medium",
      image: ""
    },
    {
      /*10*/
      question: "What is the significance of the Big O notation in evaluating the efficiency of data structures?",
      answer: "Big O notation describes the upper limit of an algorithm's time or space complexity in relation to input size, helping to compare the efficiency of different algorithms and data structures.",
      category: "medium",
      image: ""
    },

    { 
      /*11*/
      question: " What are the 02 main ways to implement a graph? What are the pros and cons of each?",
      answer: "A graph can be implemented using an adjacency list (where each node has a list of its neighbors) or an adjacency matrix (a 2D array indicating connections). Adjacency lists are more space-efficient for sparse graphs, while matrices provide faster access for dense graphs",
      category: "hard",
      image: ""
    },
    {
      /*12*/
      question: "In what scenarios would you choose to use a depth-first search (DFS) over a breadth-first search (BFS) algorithm?",
      answer: "you would use DFS when you want to explore as far as possible along a branch before backtracking, such as in maze-solving or topological sorting. BFS is better for finding the shortest path between two nodes or searching a tree or graph iteratively.",
      category: "hard",
      image: ""
    },
    {
      /*13*/
      question: "In what scenarios would you choose a tree over other data structures for managing strings?",
      answer: "A tree is chosen for scenarios where you need to store a large set of strings and perform prefix searches efficiently, such as in autocomplete features or spell checkers.",
      category: "hard",
      image: ""
    },
    {
      /*14*/
      question: "What real-world applications utilize data structures like trees and graphs? Can you provide examples?",
      answer: "Trees are used in file systems (to represent directories), while graphs are used in social networks (to represent relationships) and in navigation systems (to represent paths and locations).",
      category: "hard",
      image: ""
    },
    {
      /*15*/
      question: "How do data structures impact the performance of algorithms in big data scenarios?",
      answer: "Efficient data structures are crucial in big data scenarios as they affect how quickly data can be accessed, processed, and analyzed. Choosing the right data structure can significantly reduce time complexity and improve overall performance.",
      category: "hard",
      image: ""
    },
    {
      /*16*/
      question: "What real-world applications utilize data structures like trees and graphs? Can you provide examples?",
      answer: "Trees are used in file systems (to represent directories), while graphs are used in social networks (to represent relationships) and in navigation systems (to represent paths and locations).",
      category: "hard",
      image: ""
    },
    {
      /*17*/
      question: "In the Tower of Hanoi problem, what base case do you need to check first, and how do you define the recursive case?",
      answer: "The base case occurs when there is only one disk to move; in this case, you simply move the disk from the source peg to the target peg. The recursive case involves moving n−1 disks from the source peg to the auxiliary peg, moving the nth disk to the target peg, and then moving the n−1 disks from the auxiliary peg to the target peg.",
      category: "hard",
      image: ""
    },
    {
      /*18*/
      question: "What is a race condition in concurrent programming, and how can it be prevented?",
      answer: "A race condition occurs when multiple threads access shared data concurrently, and at least one thread modifies it, leading to unpredictable results. It can be prevented by using synchronization mechanisms such as locks, semaphores, or by avoiding shared state.",
      category: "hard",
      image: ""
    },
    {
      /*19*/
      question: "Describe the heap sort algorithm and its time complexity.",
      answer: "Heap sort is a comparison-based sorting algorithm that uses a binary heap data structure. It first builds a max heap from the input data, then repeatedly extracts the maximum element from the heap and reconstructs the heap until all elements are sorted. The time complexity of heap sort is O(nlog n) for the worst, average, and best cases.",
      category: "hard",
      image: ""
    },
    {
      /*20*/
      question: "What is topological ordering, and in what scenario is it used?",
      answer: "Topological ordering is a linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge u->v, vertex  u comes before vertex v in the ordering. It is used in scenarios like task scheduling, where tasks must be executed in a specific order without violating dependencies.",
      category: "hard",
      image: ""
    }
  ]

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const handleNextCard = () => {
    setCurrentCardIndex(currentCardIndex + 1);
    /* setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length); // Loop back to the first card */
    setIsAnswerShown(false);
  }

  const handlePreviousCard = () => {
    setCurrentCardIndex(currentCardIndex - 1);
    /* setCurrentCardIndex((prevIndex) => (prevIndex - 1) % cards.length); // Loop back to the last card */
    setIsAnswerShown(false);
  }

  return (
    <div className="App">

      <div className="header">
        <h1>Welcome to the Flashcards App</h1>
        <h2>This is a flashcards app that will help you study data structures and algorithms</h2>
        <h3>Number of cards: {cards.length}</h3>

        <div className="image-container">
          <img src="/images/computerBCG-full.jpg" className="computer" alt="Computer Background" />
          <Flashcard 
            flashcard={cards[currentCardIndex]} 
            isAnswerShown={isAnswerShown} 
            setIsAnswerShown={setIsAnswerShown} 
          />
        </div>
      </div>

      <div className="button-container">
        <ButtonControl 
          onClick={handlePreviousCard} 
          disabled={currentCardIndex === 0} 
          label="Previous"
          icon="←" // Left arrow for previous
        />
        <ButtonControl 
          onClick={handleNextCard} 
          disabled={currentCardIndex === cards.length - 1} 
          label="Next"
          icon="→" // Right arrow for next
        />
      </div>

    </div>
  )
}

export default App

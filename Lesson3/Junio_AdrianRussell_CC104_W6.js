'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  constructor() {
    // TODO: Create the internal storage.
    this.items = [];
  }

  push(element) {
    // TODO: Add an element to the top.
    this.items.push(element);
  }

  pop() {
    // TODO: Remove and return the top element.
    return this.items.pop();
  }

  peek() {
    // TODO: Return the top without removing it.
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // TODO: Return true when empty.
    return this.items.length === 0;
  }

  size() {
    // TODO: Return the number of elements.
    return this.items.length;
  }

  toString() {
    // TODO: Return all elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// TODO: Push the three required actions.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// TODO: Display peek, pop, remaining actions, and size.
console.log(`Top Action: ${actionHistory.peek()}`);
console.log(`Undo Action: ${actionHistory.pop()}`);
console.log(`Remaining Actions: ${actionHistory.toString()}`);
console.log(`Stack Size: ${actionHistory.size()}`);

// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() {
    // TODO: Create the internal storage.
    this.items = [];
  }

  enqueue(element) {
    // TODO: Add an element at the back.
    this.items.push(element);
  }

  dequeue() {
    // TODO: Remove and return the front element.
    return this.items.shift();
  }

  front() {
    // TODO: Return the front without removing it.
    return this.items[0];
  }

  isEmpty() {
    // TODO: Return true when empty.
    return this.items.length === 0;
  }

  size() {
    // TODO: Return the number of elements.
    return this.items.length;
  }

  toString() {
    // TODO: Return all elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// TODO: Enqueue the four required requests.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// TODO: Display the front request.
console.log(`Next Request: ${waitingRequests.front()}`);

// TODO: Dequeue two requests.
console.log(`Processed: ${waitingRequests.dequeue()}`);
console.log(`Processed: ${waitingRequests.dequeue()}`);

// TODO: Display the remaining queue and its size.
console.log(`Remaining Requests: ${waitingRequests.toString()}`);
console.log(`Queue Size: ${waitingRequests.size()}`);

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    // TODO: Create the internal storage.
    this.items = [];
  }

  enqueue(request, priority) {
    // TODO: Create an item containing the request and priority.
    const newItem = { request, priority };
    let added = false;

    // TODO: Find the correct insertion position.
    // TODO: Preserve arrival order when priorities are equal.
    for (let i = 0; i < this.items.length; i++) {
      if (newItem.priority < this.items[i].priority) {
        this.items.splice(i, 0, newItem);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(newItem);
    }
  }

  dequeue() {
    // TODO: Remove and return the first item.
    return this.items.shift();
  }

  size() {
    // TODO: Return the number of items.
    return this.items.length;
  }

  print() {
    // TODO: Display every request and priority.
    for (const item of this.items) {
      console.log(`${item.request}, Priority ${item.priority}`);
    }
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// TODO: Enqueue the four required requests.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// TODO: Print the initial priority order.
console.log('Initial Priority Order:');
urgentRequests.print();

// TODO: Process the first request.
const processedUrgent = urgentRequests.dequeue();
console.log(`\nProcessed Priority Request: ${processedUrgent.request}`);

// TODO: Print the remaining requests.
console.log('\nRemaining Priority Requests:');
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  constructor(element) {
    // TODO: Store the element.
    this.element = element;
    // TODO: Set next to null.
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // TODO: Set length to zero.
    this.length = 0;
    // TODO: Set head to null.
    this.head = null;
  }

  append(element) {
    // TODO: Add a node at the end.
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  insert(position, element) {
    // TODO: Reject invalid positions.
    if (position < 0 || position > this.length) return false;

    // TODO: Insert at the beginning, middle, or end.
    const node = new Node(element);
    let current = this.head;

    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      let previous = null;
      let index = 0;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      node.next = current;
      previous.next = node;
    }
    this.length++;
    return true;
  }

  removeAt(position) {
    // TODO: Reject invalid positions.
    if (position < 0 || position >= this.length) return null;

    // TODO: Remove the node at the requested position.
    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = null;
      let index = 0;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }

  indexOf(element) {
    // TODO: Traverse and return the matching position.
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    // TODO: Return -1 when the element is absent.
    return -1;
  }

  remove(element) {
    // TODO: Reuse indexOf and removeAt.
    const position = this.indexOf(element);
    return this.removeAt(position);
  }

  isEmpty() {
    // TODO: Return true when no nodes exist.
    return this.length === 0;
  }

  size() {
    // TODO: Return the number of nodes.
    return this.length;
  }

  toString() {
    // TODO: Traverse and return all elements as text.
    let current = this.head;
    let elements = [];
    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }
    return elements.join('\n');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// TODO: Append the three required requests.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// TODO: Insert Ticket #400 at position 0.
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');

// TODO: Insert Ticket #405 at the end.
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');

// TODO: Display the complete list.
console.log('Complete List:\n' + completedRequests.toString());

// TODO: Search for Ticket #402.
console.log(`\nIndex of Ticket #402: ${completedRequests.indexOf('Ticket #402 - Printer Connected')}`);

// TODO: Remove the item at position 1.
console.log(`Removed at Position 1: ${completedRequests.removeAt(1)}`);

// TODO: Remove Ticket #403 by value.
console.log(`Removed by Value: ${completedRequests.remove('Ticket #403 - Antivirus Updated')}`);

// TODO: Display the final list and size.
console.log(`\nFinal List:\n${completedRequests.toString()}`);
console.log(`Final Size: ${completedRequests.size()}`);
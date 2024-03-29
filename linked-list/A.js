class Node {
  constructor(data , next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  insertLast(data) {
    let last = new Node(data);
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = last;
    this.size++;
  }

  insertAt(data, index) {
    const node = new Node(data);
    let previous;
    let current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }

  search(index) {
    let count = 0;
    let current = this.head;
    let foundData;

    while (current) {
      if (count === index) {
        foundData = current.data;
      }
      count++;
      current = current.next;
    }
    return foundData;
  }

  remove(index) {
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const myList = new LinkedList();

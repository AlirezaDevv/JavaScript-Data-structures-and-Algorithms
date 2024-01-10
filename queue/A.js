class Queue {
  constructor(length) {
    this.items = new Array(length);
  }

  #front = 0;
  #rear = -1;

  enqueue(element) {
    if (this.isFull()) {
      return;
    }

    this.#rear += 1;
    this.items[this.#rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      return;
    }

    this.#front += 1;
    return delete this.items[this.#front - 1];
  }

  front() {
    return this.#front;
  }

  rear() {
    return this.#rear;
  }

  isEmpty() {
    let rear = this.#rear;
    let front = this.#front;

    if (rear < front) {
      console.log("queue is empty");
      return true;
    }

    return false;
  }

  isFull() {
    let rear = this.#rear;

    if (rear == this.size() - 1) {
      console.log("queue is full");
      return true;
    }

    return false;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

const queue1 = new Queue(10);

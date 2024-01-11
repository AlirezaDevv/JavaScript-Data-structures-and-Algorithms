class Stack {
  #items = [];
  #top = -1;

  push(element) {
    this.#items.push(element);
    this.#top++;
  }

  pop() {
    if (this.#top === -1) {
      console.log("stack is empty");
    }

    this.#items.pop();
  }

  peek() {
    return this.#top;
  }

  isEmpty() {
    return this.#top === -1;
  }

  size() {
    return this.#items.length;
  }

  clear() {
    this.#items = [];
    this.#top = -1;
  }
  print() {
    console.log(this.#items.toString());
  }
}

const stack = new Stack();

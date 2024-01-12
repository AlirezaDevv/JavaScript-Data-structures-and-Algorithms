class List {
  #list = [];

  insert(data) {
    this.#list.push(data);
  }

  print() {
    console.log(this.#list.join(" , "));
  }

  bubleSort() {
    this.#DoBubbleSort();
  }

  #DoBubbleSort() {
    const list = this.#list;
    const length = list.length;

    if (length === 0) return "empty list";
    if (length === 1) return;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (list[j] > list[j + 1]) {
          [list[j], list[j + 1]] = [list[j + 1], list[j]];
        }
      }
    }
  }

  bubleSortImproved() {
    this.#DobubleSortImproved();
  }

  #DobubleSortImproved() {
    const list = this.#list;
    const length = list.length;

    if (length === 0) return "empty list";
    if (length === 1) return;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (list[j] > list[j + 1]) {
          [list[j], list[j + 1]] = [list[j + 1], list[j]];
        }
      }
    }
  }
}

const myList = new List();

myList.insert(50);
myList.insert(15);
myList.insert(0);
myList.insert(0);
myList.insert(30);
myList.insert(20);
myList.insert(10);

myList.print();

myList.bubleSortImproved();

myList.print();

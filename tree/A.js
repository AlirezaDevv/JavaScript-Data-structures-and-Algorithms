//  This is an implementation of a binary tree on which we can perform binary search operations
//Example // You can see the visual image of this type of tree in the .png file

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);
    if (this.root === null) this.root = newNode;
    else this.#insertNode(this.root, newNode);
  }

  #insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.#insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.#insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraverse(operator) {
    this.#inOrderTraverseNode(this.root, operator);
  }

  #inOrderTraverseNode(node, operator) {
    if (node !== null) {
      this.#inOrderTraverseNode(node.left, operator);
      operator(node.key);
      this.#inOrderTraverseNode(node.right, operator);
    }
  }

  preOrderTraverse(operator) {
    this.#preOrderTraverseNode(this.root, operator);
  }

  #preOrderTraverseNode(node, operator) {
    if (node !== null) {
      operator(node.key);
      this.#preOrderTraverseNode(node.left, operator);
      this.#preOrderTraverseNode(node.right, operator);
    }
  }

  postOrderTraverse(operator) {
    this.#postOrderTraverseNode(this.root, operator);
  }

  #postOrderTraverseNode(node, operator) {
    if (node !== null) {
      this.#postOrderTraverseNode(node.left, operator);
      this.#postOrderTraverseNode(node.right, operator);
      operator(node.key);
    }
  }

  min() {
    return this.#minNode(this.root);
  }

  #minNode(node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  }

  max() {
    return this.#maxNode(this.root);
  }

  #maxNode(node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }

      return node;
    }

    return null;
  }

  search(key) {
    return this.#SearchNode(key, this.root);
  }

  #SearchNode(key, node) {
    if (node === null) {
      return `There is not ${key} in this tree`;
    }

    if (key < node.key) {
      return this.#SearchNode(key, node.left);
    }
    if (key > node.key) {
      return this.#SearchNode(key, node.right);
    }
    if (key === node.key) {
      return `There is ${key} in this tree`;
    }
  }

  remove(key) {
    this.root = this.#removeNode(this.root, key);
    // console.dir(this.root , {depth : null});
  }

  #removeNode(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.#removeNode(node.left, key);
      return node;
    }
    if (key > node.key) {
      node.right = this.#removeNode(node.right, key);
      return node;
    }
    if (key === node.key) {
      //case 1 - a leaf node
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      //case 2 - a node with only 1 child
      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }
      //case 3 - a node with 2 children
      const aux = this.#minNode(node.right);
      node.key = aux.key;
      node.right = this.#removeNode(node.right, aux.key);
      return node;
    }
  }
}

const tree = new BinaryTree();
// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value == current.value) { return undefined; }
                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value == current.value) { return true; }
                if (value < current.value) {
                    if (!current.left) {
                        return false;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (!current.right) {
                        return false;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    breadthFirstTraversal() {
        let node = this.root
        const queue = [node];
        const resultData = [];
        while (queue.length) {
            node = queue.shift();
            resultData.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return resultData;
    }
    depthFirstPreOrderTraversal() {
        const resultData = [];
        let current = this.root;
        function traverse(node) {
            resultData.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return resultData;
    }
    depthFirstPostOrderTraversal() {
        const resultData = [];
        let current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            resultData.push(node.value);
        } 
        traverse(current);
        return resultData;
    }
    depthFirstInOrderTraversal() {
        const resultData = [];
        let current = this.root;
        function traverse(node) {
            if(node.left) traverse(node.left);
            resultData.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return resultData;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
console.log(bst.breadthFirstTraversal());
console.log(bst.depthFirstInOrderTraversal());


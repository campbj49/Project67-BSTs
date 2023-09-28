class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //if this is an empty tree, insert the val at the root
    if(this.root === null) {
      this.root = new Node(val);
      return this;
    }

    //otherwise loop down the tree to find the correct node
    let currentNode = this.root;
    let placed = false;
    while(!placed){
      //check to see which side the new val belongs in
      if (val<=currentNode.val){
        if(currentNode.left) currentNode=currentNode.left;
        else{
          currentNode.left = new Node(val);
          placed = true;
        }
      }
      else{
        if(currentNode.right) currentNode=currentNode.right;
        else{
          currentNode.right = new Node(val);
          placed = true;
        }
      }
    }

    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    //if this is an empty tree, insert the val at the root
    if(this.root === null) {
      this.root = new Node(val);
      return this;
    }
    //helper function to solve this problem
    function _insertRecursively(val, node){
      //check to see which branch of the tree the new val belongs in
      if (val<=node.val){
        if(node.left) return _insertRecursively(val, node.left);
        else
          return node.left = new Node(val);
      }
      else{
        if(node.right) return _insertRecursively(val, node.right);
        else
          return node.right = new Node(val);
      }
    }
    _insertRecursively(val, this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    //very simmilar to insertion
    let currentNode = this.root;
    while(true){
      //check to see if the current node is the one we're looking for
      if(currentNode.val===val) return currentNode;
      //check to see which side the new val might be in
      if (val<currentNode.val){
        if(currentNode.left) currentNode=currentNode.left;
        else return;
      }
      else{
        if(currentNode.right) currentNode=currentNode.right;
        else return;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    //helper function to solve this problem
    function _insertRecursively(val, node){
      //check for match
      if(val===node.val) return node;
      //check to see which branch of the tree the new val belongs in
      if (val<node.val){
        if(node.left) return _insertRecursively(val, node.left);
        else
          return;
      }
      else{
        if(node.right) return _insertRecursively(val, node.right);
        else
          return;
      }
    }
    return _insertRecursively(val, this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    //recursion is the best way to traverse a tree
    function _dfsPreOrder(node){
      let res = [node.val]
      if(node.left) res.push(..._dfsPreOrder(node.left));
      if(node.right) res.push(..._dfsPreOrder(node.right))
      return res;
    }

    return _dfsPreOrder(this.root);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    //only difference between the orders is when the node.val is put into the res array
    function _dfsInOrder(node){
      let res = []
      if(node.left) res.push(..._dfsInOrder(node.left));
      res.push(node.val);
      if(node.right) res.push(..._dfsInOrder(node.right))
      return res;
    }

    return _dfsInOrder(this.root);
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    function _dfsPostOrder(node){
      let res = []
      if(node.left) res.push(..._dfsPostOrder(node.left));
      if(node.right) res.push(..._dfsPostOrder(node.right));
      res.push(node.val);
      return res;
    }

    return _dfsPostOrder(this.root);
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    //traversing laterally is a bit more difficult than depth first
    function _bfs(level){
      //creates a new level from all the child nodes of the current level
      let newLevel = []
      let res = []
      for(let parent of level){
        res.push(parent.val);
        if(parent.left) newLevel.push(parent.left);
        if(parent.right) newLevel.push(parent.right);
      }
      //if the newLevel is empty, this is the bottom of the tree, so just return res
      if(newLevel.length === 0) return res;
      //otherwise fuse the current level with the all the levels below and send it
      return [...res, ..._bfs(newLevel)];
    }

    return _bfs([this.root]);
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;

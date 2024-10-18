class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

}

class LinkedList {
  constructor() {
    this.head = null; // head of linked list
    this.tail = null; // tail of linked list
  }
  isEmpty(){
    return this.head == null; // when my LL is empty then return
  }
  getHead(){
    if(this.head == null) return undefined;
    return this.head.data;
  }
  getTail(){
    if(this.tail == null) return undefined;
    return this.tail.data;
  }



  removeAtHead() {
    if (this.head == null) return; // when LL is empty then return
    const newHead = this.head.next; // we will store new head in the LL
    this.head.next = null; // when LL empty disconect the old head frome the LL
    this.head = newHead; //allocate the brand new head for the data

   // if head becomes null after removal of node means LL is empty  now 
    if(this.head == null){
        this.tail = null;
    }

  }
  addAtTail(data) {
    if (this.head == null) {
      const newNode = new Node(data);
      this.head = newNode;
      this.tail = newNode;
      return;
    } else {
      const newNode = new Node(data);
      this.tail.next = newNode; //we are attaching the new node after the prev tail
      this.tail = newNode;// we uploade the the tail property
    }
  }
}

class Queue{
    constructor(){
        this.ll = new LinkedList(); // we creat a brand new empty LL 
    }
    enqueue(data){
        this.ll.addAtTail(data);
    }
    dequeue(){
        this.ll.removeAtHead();

    }
    empty(){
         this.ll.isEmpty();
    }
    front(){
       return this.ll.getHead();
    }
    back(){
        return this.ll.getTail();
    }
}

const qu = new Queue();
qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
console.log(qu.front(), qu.back());
qu.dequeue();
console.log(qu.front(), qu.back());
qu.dequeue();
console.log(qu.front(), qu.back());~
qu.dequeue();
console.log(qu.front(), qu.back());


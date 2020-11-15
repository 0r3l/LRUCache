import { Node } from './node';

export class LinkedList<T>{

  private head: Node<T>;
  private tail: Node<T>;
  private size = 0;


  constructor(private maxSize = 5) {
    this.tail = this.head;
  }

  prepend(data: T) {
    if (this.size < this.maxSize) {
      const newHead = this.setHead(data);
      this.setTail(newHead);
      this.size++;
    } else {
      this.removeLast();
      this.prepend(data);
    }
  }

  toString(backward = false) {
    console.log(`head: ${this.head?.data}`);
    console.log(`tail: ${this.tail?.data}`);
    if (backward) {
      for (let current = this.tail; current; current = current.prev) {
        process.stdout.write(`${current.data} --> `);
      }
    } else {
      for (let current = this.head; current; current = current.next) {
        process.stdout.write(`${current.data} --> `);
      }
    }
  }

  private setHead(data: T){
    const head = this.head;
    this.head = new Node(data);
    this.head.next = head;
    if (head) {
      head.prev = this.head;
    }
    return head;
  }

  private setTail(head: Node<T>){
    if (this.size === 2) {
      this.tail = head?.next;
      if (this.tail) {
        this.tail.prev = head;
      }
    }
  }

  private removeLast() {
    const last = this.tail?.prev;
    this.tail = last;
    this.size--;
  }


}

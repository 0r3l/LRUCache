export class Node<T> {

  constructor(
    public data: T,
     public next: Node<T> = null,
     public prev: Node<T> = null,
     ) { }
}

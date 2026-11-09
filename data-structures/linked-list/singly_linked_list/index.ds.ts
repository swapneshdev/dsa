// pnpm dev data-structures/linked-list/singly_linked_list/index.ds.ts

interface INode<T> {
  data: T;
  next: INode<T> | null;
}

// LinkedList methods
// append, prepend, get, set, insertAt, removeAt // primary

export class LinkedList<T> {
  #head: INode<T> | null = null;
  length = 0;

  constructor(data?: T) {
    if (data !== undefined) {
      this.#head = {
        data,
        next: null,
      };

      ++this.length;
    }
  }

  get head(): INode<T> | null {
    return this.#head;
  }

  set append(data: T) {
    let current = this.#head;
    ++this.length;

    if (!current) {
      this.#head = { data, next: null };
      return;
    }

    while (current.next !== null) {
      current = current.next;
    }
    current.next = {
      data,
      next: null,
    };
  }

  set prepend(data: T) {
    this.#head = {
      data,
      next: this.#head,
    };
    ++this.length;
  }

  get(index: number): INode<T> | null {
    let current = this.#head;
    let CurrentIndex = 0;

    while (current != null) {
      if (CurrentIndex === index) {
        return current;
      }
      current = current.next;
      CurrentIndex++;
    }
    return null;
  }
  removeAt(index: number): T | undefined {
    // Validate index
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    // Remove head
    if (index === 0) {
      const removedNode = this.#head!;
      this.#head = removedNode.next;
      this.length--;

      return removedNode.data;
    }

    // Find previous node
    const previousNode = this.get(index - 1);

   if (!previousNode?.next) {
     return undefined;
   }

    const removedNode = previousNode.next;

    // Skip the node being removed
    previousNode.next = removedNode.next;

    this.length--;

    return removedNode.data;
  }
}

// interface INode1 {
//   currentMusicName: string;
//   currentMusicDescription: string;
// }

// const dataINode1: INode1 = {
//   currentMusicName: "music 1",
//   currentMusicDescription: "music description",
// };

// const LinkedList1 = new LinkedList<INode1>(dataINode1);
// LinkedList1.append = {
//   currentMusicName: "Music 2",
//   currentMusicDescription: " Music 2 description",
// };
// LinkedList1.append = {
//   currentMusicName: "Music 3",
//   currentMusicDescription: " Music 3 description",
// };

// // const head = LinkedList1.head;
// console.log(LinkedList1.head?.data, "LinkedList1.head", "first");
// LinkedList1.prepend = {
//   currentMusicName: "Music 3 - pre",
//   currentMusicDescription: " Music 3 description - pre",
// };
// console.log(LinkedList1.head?.data, "LinkedList1.head", "first");
// // console.log(head?.next);

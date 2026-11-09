// pnpm dev data-structures/linked-list/doubly_linked_list/index.ds.ts

interface INode<T> {
  data: T;
  next: INode<T> | null;
  prev: INode<T> | null;
}

// LinkedList methods
// append, prepend, get, set, insertAt, removeAt // primary

class LinkedList<T> {
  #head: INode<T> | null = null;
  // #tail: INode<T> | null = null; // need to implement this to make this efficient

  constructor(data?: T) {
    if (data !== undefined) {
      this.#head = {
        data,
        next: null,
        prev: null,
      };
    }
  }

  get head(): INode<T> | null {
    return this.#head;
  }

  set append(data: T) {
    let current = this.#head;

    if (!current) {
      this.#head = { data, next: null, prev: null };
      return;
    }

    while (current.next !== null) {
      current = current.next;
    }
    current.next = {
      data,
      next: null,
      prev: current,
    };
  }

  // set prepend(data: T) {
  //   this.#head = {
  //     data,
  //     next: this.#head,
  //     prev:null
  //   };
  // }

  set prepend(data: T) {
    const newNode: INode<T> = {
      data,
      next: this.#head,
      prev: null,
    };

    if (this.#head) {
      this.#head.prev = newNode;
    }

    this.#head = newNode;
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
}

interface INode1 {
  currentMusicName: string;
  currentMusicDescription: string;
}

const dataINode1: INode1 = {
  currentMusicName: "music 1",
  currentMusicDescription: "music description",
};

const LinkedList1 = new LinkedList<INode1>(dataINode1);
LinkedList1.append = {
    currentMusicName:"Music 2",
    currentMusicDescription :" Music 2 description"
}
LinkedList1.append = {
    currentMusicName:"Music 3",
    currentMusicDescription :" Music 3 description"
}

// const head = LinkedList1.head;
console.log(LinkedList1.head?.data, "LinkedList1.head","first");
LinkedList1.prepend = {
  currentMusicName: "Music 3 - pre",
  currentMusicDescription: " Music 3 description - pre",
};
console.log(LinkedList1.head?.data, "LinkedList1.head", "first");
// console.log(head?.next);

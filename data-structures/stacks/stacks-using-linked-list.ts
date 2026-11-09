// pnpm dev data-structures/stacks/stacks-using-linked-list.ts

import { LinkedList } from "../linked-list/singly_linked_list/index.ds.js";
// peek , pop , push
class Stack<T> {
  readonly #list = new LinkedList<T>();

  //   #removeAt = this.#list.removeAt;

  set push(data: T) {
    this.#list.prepend = data;
  }

  get peek(): T | undefined {
    return this.#list.head?.data;
  }

  pop(): T | undefined {
    return this.#list.removeAt(0);
  }

  isEmpty(): boolean {
    return this.#list.length === 0;
  }

  get length() {
    return this.#list.length;
  }
}

interface MyStackData {
    name:string;
    age:number
}

const myStack = new Stack<MyStackData>();

myStack.push = {
    age:25,
    name:"Swapnesh"
}
myStack.push = {
    age:26,
    name:"Swapnesh 2"
}

console.log(myStack.peek)
console.log(myStack.pop(), "is removed")
console.log(myStack.peek)
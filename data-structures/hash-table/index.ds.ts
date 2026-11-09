// pnpm dev data-structures/hash-table/index.ds.ts
import { CreateHash } from "./hash.js";

// Object static methods
// get, set, keys (getKeys),

interface HashNode<V> {
  key: string;
  value: V;
  next: HashNode<V> | undefined;
}

// Hash //  Hash(input: string, seed: number = 0): number //use this

class HashTable<T> {
  // #data: { [index: string]: T | undefined };
  #data: Record<string, HashNode<T> | undefined> = {};

  constructor() {
    this.#data = {};
  }
  set(key: string, value: T): void {
    const hash = CreateHash(key);
    let node = this.#data[hash];

    while (node) {
      if (node.key === key) {
        node.value = value;
        return;
      }

      node = node.next;
    }

    this.#data[hash] = {
      key,
      value,
      next: this.#data[hash],
    };
  }
  get(key: string): T | undefined {
    const hash = CreateHash(key);
    let node = this.#data[hash];

    while (node) {
      if (node.key === key) return node.value;
      node = node.next;
    }

    return undefined;
  }

  getKeys(): string[] {
    const keys: string[] = [];

    for (const bucket of Object.values(this.#data)) {
      let node = bucket;

      while (node) {
        keys.push(node.key);
        node = node.next;
      }
    }

    return keys;
  }
}

const obj = new HashTable<Structure>();
interface Structure {
  name: string;
  age: number;
}

obj.set("swapnesh", {
  age: 23,
  name: "swapnesh panda",
});

console.log(obj.get("swapnesh"));

console.log(obj.getKeys());

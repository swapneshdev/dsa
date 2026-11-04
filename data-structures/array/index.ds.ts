// pnpm dev data-structures/array/index.ds.ts

// expected methods to be added are
// map, filter, reduce, find, slice, push, pop, shift, unshift, splice, includes, sort

type FindCallback<T> = (value: T, index: number) => boolean;
type MapCallback<T> = (value: T, index: number) => T;
// type SortCallback<T> = (value: T, index: number) => T;

class CustomArray<T> {
  // [index: number]: T | undefined; // for proxy

  length = 0;
  #data: Record<string, T | undefined> = {};

  constructor(data?: T[]) {
    this.#data = {};
    if (data && data.length > 0) {
      data.forEach((value, index) => {
        this.#data[index] = value;
      });
      this.length = data.length;
    }

    // return new Proxy(this, {
    //   get(target, property, receiver) {
    //     if (typeof property === "string" && /^\d+$/.test(property)) {
    //       return target.data[Number(property)];
    //     }

    //     return Reflect.get(target, property, receiver);
    //   },
    // });
  }

  get(index: number): T | undefined {
    return this.#data[index];
  }
  pop(): T | undefined {
    const deletedData = this.#data[this.length - 1];
    delete this.#data[this.length - 1];
    this.length--;
    return deletedData;
  }

  push(data: T): void {
    this.#data[this.length] = data;
    this.length++;
  }
  // find(condition: (value: T, index: number) => boolean): T | undefined {
  find(callback: FindCallback<T>): T | undefined {
    for (let index = 0; index < this.length; index++) {
      const value = this.get(index);

      if (value === undefined) {
        return undefined;
      }

      if (callback(value, index)) {
        return value;
      }
    }

    return undefined;
  }

  // sort(fn) {
  //   const compare = fn ?? ((a: T, b: T) => a - b);

  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < nums.length - i - 1; j++) {
  //       if (compare(nums[j], nums[j + 1]) > 0) {
  //         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
  //       }
  //     }
  //   }

  //   return nums;
  // }

  includes(data: T): boolean {
    // works only for primitives else checks references
    return this.find((value) => value === data) !== undefined;
  }

  map(callback: MapCallback<T>) {
    const newArr = new CustomArray<T>();

    for (let index = 0; index < this.length; index++) {
      const element = this.get(index);

      if (element === undefined) {
        newArr.length++;
        continue;
      }

      newArr.#data[index] = callback(element, index);
      newArr.length++;
    }

    return newArr;
  }
}

interface Arr {
  name: string;
  age: number;
  isValid: boolean;
}
const tArray = new Array(4).fill({
  name: "swapnesh",
  age: 34,
  isValid: true,
});
const arr = new CustomArray<Arr>(tArray);

arr.push({
  name: "swapnesh",
  age: 74,
  isValid: true,
});

// console.log(arr);
// console.log(arr[0]); //only if proxy is added // need to explore proxy further

// console.log(arr.find((i) => i.age == 74 ));

// console.log(arr.map((element,index)=>(
//   element ={
//     ...element,
//     age:element.age*index
//   }
// )))

// console.log(arr.sort());


// console.log(arr.#data) // will not work as this is private and starts with # // it will fail the code
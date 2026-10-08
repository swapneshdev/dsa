class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }


    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item
        this.length++
    }

    pop() {
        const deletedData = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return deletedData
    }
    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }
    shiftItems(index) {
        for (let i = index; i < globalThis.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
    }
}

const barr = new MyArray()
barr.push("Swapnesh")
barr.push("Swapnesh2")
console.log(barr, barr.get(0), barr.length)
barr.pop()

console.log(barr, barr.get(0), barr.length)
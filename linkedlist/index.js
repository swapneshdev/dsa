class LinkedList {
    constructor(val) {
        this.head = {
            value: val,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }
    append(val) {
        const newNode = {
            value: val,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(val) {
        const newNode = {
            value: val,
            next: this.head
        }
        this.head = newNode
        this.length++
    }
    printList() {
        const arr = []
        let currentNode = this.head

        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        return arr
    }
    traverseToIndex(ind) {
        let counter = 0
        let currentNode = this.head
        while (counter !== ind && currentNode !== null) {
            // console.log(currentNode)
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }
    find(ind) {
        // const list = this.printList()
        // return list[ind]
        return this.traverseToIndex(ind)?.value
    }
    insert(ind, val) {
        // const list = this.printList()
        // list.splice(ind, 0, val)

        const newNode = {
            value: val,
            next: null
        }
        if (ind === 0) {
            this.prepend(val)
        } else {
            const prevNode = this.traverseToIndex(ind - 1)
            const nextNode = prevNode.next
            prevNode.next = newNode
            newNode.next = nextNode
        }
    }
    remove(ind) {
        // const list = this.printList()
        // list.splice(ind, 1)

        if (ind === 0) {
            this.head = this.head.next
        } else {
            const prevNode = this.traverseToIndex(ind - 1)
            prevNode.next = prevNode.next.next
        }
    }
}

const list = new LinkedList(1)
list.insert(1, 30)
list.insert(2, 30)
// list.append(2)
// list.append(3)
// list.remove(1)
// console.log(list)
// list.prepend(30)
console.log(list.printList())
// console.log(list.find(2))
// console.log(list)
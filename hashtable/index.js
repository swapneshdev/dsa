class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.codePointAt(i) * (i + 1)) % this.data.length
        }

        return hash
    }

    set (key, value) {
        const localHash = this._hash(key)
        if (!this.data[localHash]) {
            this.data[localHash] = []
            this.data[localHash].push([key, value])
            // console.log(this.data) 
            return
        }
        this.data[localHash].push([key, value])
    }
    get (key) {
        const localHash = this._hash(key)
       return  this.data[localHash]
    }
    deleteall() {
        this.data = new Array(this.data.length)
    }
}

const obj = new HashTable(40)

obj.set("name", "Swapnesh")
obj.set("name", "Swyapnesh")

console.log(obj.get("name"))
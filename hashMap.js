function hashMap(length) {
    this.arr = []
    this.length = length
    this.put = function (index, value) {
        let mod = value % this.length
        if (!this.arr[mod]) {
            this.arr[mod] = [index, value]
        } else {
            this.handleCollision(index, value)
        }
    }
    this.containsKey = function (key) {

    }
    this.get = function (value) {
        for (let i = 0; i < this.length; i++) {
            let mod = (value + i) % this.length
            const res = this.arr[mod]
            if (res[1] === value) { //res[1]是value 
                return mod
            }
        }
        return 'no value specified'
    }
    this.handleCollision = function (index, value) {
        for (let i = 1; i < this.length; i++) {
            let mod = (value + i) % this.length
            if (!this.arr[mod]) {
                this.arr[mod] = [index, value]
                return // 一旦发现可以插入新的值，立马停止循环。
            }
        }
    }
}
const nums = [2, 7, 11, 15]
const target = 9

let newMap = new hashMap(nums.length)
for (let i = 0; i < nums.length; i++) {
    newMap.put(i, nums[i])
}
module.exports = function reverse(n) {
    let num = Math.abs(n)
    let arr = num.toString(10).split('').map(int => parseInt(int, 10))
    let ReverseArray = arr.reverse()
    return Number(ReverseArray.join(''))
}

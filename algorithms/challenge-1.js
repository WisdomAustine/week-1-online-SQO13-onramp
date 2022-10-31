function countTruthy(arr) {
    const array = arr;
    let count = 0;

    for(let item of array) {
        if(item) {
            count++;
        }
    }
    return count;
}
module.exports = countTruthy

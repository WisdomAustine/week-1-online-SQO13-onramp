function fizzBuzz(input){
    if(input % 3 === 0) {
        return "fizz";
    } else if(input % 5 === 0) {
        return "buzz";
    } else if(input % 3 === 0 && input % 5 === 0) {
        return "fizzbuzz";
    } else {
        return input;
    }
  
}


module.exports = fizzBuzz

function filterArray(array) {
    const nArray = [];
    for (let data of array) {
        if(Number(data)) {
            nArray.push(data);
        }
    }
    return nArray;
}

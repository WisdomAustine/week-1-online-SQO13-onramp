function sumMix(arr) {
        let init = 0;
        const result = arr.map(item => {
            if(typeof item === "string") {
                return parseInt(item);
            } else {
                return item;
            }
        })
    
        result.forEach(num => {
            init += num;
        })
        return init;   
 }

  module.exports = sumMix

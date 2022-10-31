function filterList(arr) {
    return arr.filter(item => {
        return typeof item === "number";
    });
 }

  module.exports =filterList

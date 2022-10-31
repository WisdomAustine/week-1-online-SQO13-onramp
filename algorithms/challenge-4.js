function calculateGrade(marks) {
    const noOfCourses = marks.length;
    
    const total = marks.reduce((prevVal, currentVal) => prevVal + currentVal);
    const avgScore = total / noOfCourses;
    console.log(avgScore);

    if(avgScore >= 90 && avgScore <= 100) {
        return "A";
    } else if(avgScore >= 80 && avgScore <= 89) {
        return "B";
    } else if(avgScore >= 70 && avgScore <= 79) {
        return "C";
    } else if(avgScore >= 60 && avgScore <= 69) {
        return "D";
    } else if(avgScore >= 50 && avgScore <= 59) {
        return "E";
    } else if(avgScore >= 1 && avgScore <= 49) {
        return "F";
    } else {
        return "Invalid average Score";
    }
 }
  module.exports =calculateGrade

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
for(var i = 1; i <= experience; i++){
    startingSalary = startingSalary * 1.05;
}
// var currentSalary = startingSalary.toFixed(2);
console.log(startingSalary.toFixed(2));
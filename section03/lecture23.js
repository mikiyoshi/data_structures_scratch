// recursive

// function func(){
//   if(/*base case */){
//     return something
//   } else { // recursive case
//     func()
//   }
// }

// Factorial(!) 階乗
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

function factorial(num) {
  if (num === 1) {
    console.log('num1: ', num);
    return num;
  } else {
    console.log('num2-4: ', num);
    return num * factorial(num - 1);
  }
}

console.log('factorial: ', factorial(4));
// num2-4:  4 // factorial(4)
// num2-4:  3 // factorial(3)
// num2-4:  2 // factorial(2)
// num1:  1 // factorial(1) // return 1 // return 1 * 2 // return 2 * 3 // return 6 * 4
// 上から処理されるが、計算は 1 のデータを受け取ってから処理されるので、下から上に処理される
// factorial:  24

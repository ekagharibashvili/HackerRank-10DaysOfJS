const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

btn5.addEventListener('click', function() {
let arr = [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4]
  for(let i = 0; i < arr.length; i++) {
      if(i === 0){
          arr[i] = arr[arr.length-1]
      }
      else {
   arr[i] = arr[i-1]
      }
   console.log(arr)
}
return arr
})
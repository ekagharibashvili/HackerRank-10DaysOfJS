let l = "4";
let a = ["1", "2", "3", "6", "9", "8", "7", "4"];
let b = ["1", "2", "3", "6", "9", "8", "7", "4"];

let rotate = function() {
    for (let i = 7; i > 0; i--) {
        a[i] = a[i - 1];
        console.log(a[i])
    }
    
    a[0] = l;
    console.log(a[0])
    l = a[7];
    console.log(l)
    
    
    for (let i = 0; i < 8; i++) {
        document.getElementById("btn" + b[i]).innerText = a[i];
    }
}
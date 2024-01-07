
// right Triangle Pattern

let str = '';

let n = prompt("enter no");

for(let i=1; i<n; i++){

    for(let j=1; j<n-i; j++){
        str += " "
    }

    for(let k=1; k<i; k++){
        str += "*"
    }
    str += " \n"
}
console.log(str);
// pyramid pattern

let str = ''
let n = 5

for(let i=1;i<=n;i++){

    for(let j=i;j<=n-1;j++){
        str +=' '
    }
    for(let k=1;k<=2*i-1;k++){
        str +='*'
    }
    str +='\n'
}

document.write(str)
console.log(str);

// Left Triangle Pattern holo
// let n = prompt("xcv");
let str = '';

for(let i=0; i<10; i++){
    for(let j=0; j<i; j++){
        if(i===0 || i===10-1){
            str += '*'
        }
        else{
            if(j===0 || j===i-1){
                str += '*'
            }else{
                str += ' '

            }
        }
    }
   str += '\n'
}

console.log(str);
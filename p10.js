// holo pyramid
let str = '';
let n = 8
for(let i=1 ;i<=n; i++){

    for(let j=i; j<=n-1;j++){
        str+= ' '
    }

    for(let k=1; k<=2*i-1;k++){
        if(i===1||i===n){
        str+= '*'
        }else{


            if(k===1 || k===2*i-1){
                str+= '*'
                }else{

                    str+= ' '
        
                }

        }
    }



str +="\n";
}
console.log(str);
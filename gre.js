let a = [1,23,44,56,70];
let swap;
for(let i =0; i <=a.length; i++){
    for(let j =i; j <=a.length; j++){
        if(a[i]>a[j]){
            swap = a[i];
            a[i]=a[j];
            a[j]=swap;}}}
console.log(a[a.length-a.length+1]);

// downword Left Triangle Pattern


let n = prompt("Enter no of row!!")
for(let i=1; i<=n; i++){
    for(let j=n; j>=i; j--){
        document.write("*")
    }
    document.write("<br>")
}
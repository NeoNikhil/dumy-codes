// let x = "true";
// //  let x1 = Number(x);
// let b =Boolean(x)
// console.log(typeof(b));

// let x;
// let y;
// function sum(...rest){
//    let res = 0;

//    for(i=0;i<rest.length;i++){
//         res += rest[i];
//     }
//     console.log(res);
// }

// let sum =(a,...rest) => a+rest[0]+rest[1]+rest[2]+rest[3]


// console.log(sum(7,1,2,3,4));
// let age = prompt("neter age")
// let xr = (age<10)?"baby":(age<18)?"adult":(age<100)?"god":"devil";
// console.log(xr);

// let x ={
//     name:"abc",
//     " a b":10
// }

// x.add ="durg"
// // delete x.name;

// let b= x

// let obj = new Object();

// obj.name="nikhil";
// obj.email="nikhil69";
// obj.add="nikhil51";
// obj.age=12;
// delete obj.age;
// obj.mod=12123123;


// let c = {
//     n:"as",
//     a:"as",
//     w:23
// };

// let c2 = {
//     n2:"a32s",
//     a2:"a23s",
//     w2:2233
// };


// console.log(Object.assign(c,obj,c2));
// console.log(Object.keys(c));


// let c2 = {
//     name:"Nikhil chandraker",
//     age:25,
//     add:"Durg"
// }

// for(let key in c2){
//     document.write(` ${key} ${c2[key]}<br>`);
    // document.write(` v =  <br>`);

// }
// console.log("name" in c2);


// let v= ["ni","ri","ai",232,23,[2,3,[2,3]]];
// let v = {
//     name:"assad",
//     name2:"asdasd",
//     name3:"asssdfad",
//     name4:"asdsdfasd"
// }
// let y = Object.entries(v)
// console.log(...v.flat(2));




// function koko(){
//     alert("hello");
// }






// let obj = {
//     name:"Nikhil",
//     age:30,
//     sayhi:function(){  //Method
//         alert("hi"+ " "+this.name);

//     },



//     // myF:koko
// }



// obj.myF();
// obj.sayhi();
// obj.myF2();


// obj.myF2 = function(){
//     alert("helloMC")
// };





// function user(name){
//     this.name= name;
//     this.isAdmin=false;

// };
 
// // abc();

// let user = new User("nikku");

// alert(user.name);
// alert(user.isAdmin);
// let arr  =  ["sdsa","asd","asd","34e","poui"];
// let aa2 = [1,2,3];
// let arr3 = [...arr ,...aa2]
// console.log(arr3);
// let obj = {
//     name:"nikhil",
//     age:30,
//     // add:{ 
//     //     vill:Ko,
//     //     dist:durg}
// };
// let{NAAM,UMR} = obj;
// console.log(UMR);
// let book= {na:"b1",pri:200,pa:2};
// let[name,pri,page,[wq,wq2]]=book;
//     name:"b1",
// price:200,
// };
// let{n1,n2,n3,n4=90}=book;
// console.log(n1);
// let obj2 = {
//     name:"nikhil2",age:20
// }
// let obj3 = {obj,obj2}
// console.log(obj3.obj2.age);
// alert(arr[arr.length-2]);
// arr.push(5)
// console.log(...arr);
// console.log(arr.unshift("ds"));
// console.log(arr.unshift("ds3"));
// console.log(arr.shift());
// console.log(...arr);
// function res(a=10,b=90){
//     return a+b;
// }
// console.log(res(50));
// let n ="student"
// let obj = {
//     [n+"name"]:"prime",
//     age:90,
//     detail:function(){
//         return `${this.studentname} is ${this.age} y old`
//     }
// };
// console.log(obj.detail());
// let fname = "n";
// let lname = "c";
// function show(fname,lname){
//     return {fname,lname}
// }
// console.log(show(fname,lname));
// multiple obj creation
// let obj =
// {
//     name:"vivek",
//     age:22
// };
// let obj = new Object();
//     obj.name = "vivek";
//     obj.age  =  22;
// let u1 = "n i khil";
// let u2 = " chand";
// let u3= u1.concat(u2);
// alert(u3);
// alert("2"*5)
// alert(Object.values(obj)).
// let user = {
//     n1:"awe",
//     n2:"awe2",
//     n3:"awe3",
//     n4:"awe4",
// }
// for(let key in user){
//     console.log(user[key]);
// }



// 1.obj litral
// let obj1 = { name:"nikhil"};
// 2.object and new key
// let obj2 = new Object;
// alert(obj2);
// 3.object.create 
// let obj3 = Object.create(null);
// console.log(obj3);
// 4.constroctoe]r
//  function bx(){
//      this.fname = "nikhil"
//      this.mname = "nikhil"
//      this.lname = "nikhil"
//      this.age = "nikhil"
//  }
//  bx(nikhil)
//  let obj4 = new bx;
//  console.log(obj4);
// Factory function
//   function popo(){
//     return {
//         name:"nikhil",
//         age:20
//     }
//   }
//   let newO = popo();
//   console.log(newO.name);
// let a=[10,20,4,50,3,2,88];
//      0  1 2 3  4  
// let even = a.find(res=> res%2 ==0 );
// let greter = a.find(res=> res>3 );
// let greterindex = a.find((res,index)=> res>20 && index % 2 ==0 );
// let even = a.find(res=> res%2 ==0 );
// console.log(greter);
// console.log(greterindex);
// alert(a.includes(33));
// alert(a.includes(3));
// alert(a.indexOf(6));
// alert(a.indexOf(33));
// alert(a.lastIndexOf(3));
// alert(a.lastIndexOf(33));
// console.log(a.at(-3));
// for(let i=0 ;i<=a.length-1 ;i++){
//     console.log(a.includes(a[i]));
// }
// if(false)
// alert("your data is good")
// const arr =[
// {title:"GGB",author:"rdUI",year:1999},
// {title:"RDS",author:"rdc",year:2004},
// {title:"GEE",author:"weq2",year:2024},
// {title:"GNIK",author:"anjilina",year:2000}
// ];
// let result = arr.filter(res=> res.year>2000)
// console.log(result);
// console.log(arr.);
// let arr  = [30,50,60,40,80,90,10,20,5];
// let arr = [[2,3],[4,5],[16,4],[2,6],[34,9]];
// let arr  = [1,9,4,7,5];
// let arr2  = arr.concat(12,79);
// let fa = arr.filter(res => res>40 && res % 2==0 );

// let arr  = ["A","B","C","A","B","A"];

// let tarr = arr.map(res => res.toLocaleLowerCase());

// console.log(tarr);

// let arr2 = [1,2,3,4,5];
// let tarr2 = arr2.map(res => res + 2 );
// console.log(tarr2);
// let arr = [[2,3],[4,5],[16,4],[2,6],[34,9]];
// let arr = ["q","qw","qww"];
// let arr2 = arr.map(res => res.join("-"));
// console.log(arr2);


// let a = new Map();
// a.set("name","nikhil");
// console.log(a.delet("name"));


// let a = ["a","b","op"];
// let a = ["1","2","3"]
// console.log(a.join(""));

// let a = [
//    1,2,3,1,2,4,5,6,7,1,2,3

// ];


// let b= a.reduce((acc,cur)=>{
// acc[cur.id]=cur.name;
// return acc
// },{});

// console.log(b);

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbersSet = numbers.reduce((acc, curr) => {
//   acc.add(curr);
//   return acc;
// }, new Set());
// const uniqueNumbersArray = [...uniqueNumbersSet];
// console.log(uniqueNumbersArray);
// uniqueNumbersArray: [1, 2, 3, 4, 5]
// let a = [ 1,1,2,2,3];
//   a = new Set(a);
// console.log(a);

// let map = new Map();


// map.set("name","nikhil");
// map.set("age","nikhil1");
// map.set(false,"nikhil2");
// map.set(10,"nikhil3");


// console.log(map);


// for(let user of map.keys()){
//     console.log(user);
// }


// let a ="nikhil";
// let strRev=''

// for(let i=a.length-1;i>=0;i--){
//     strRev+=a[i]
// }
// console.log(strRev);
// let a = "SHUBHAM";
// let strRev = '';
// for(let i=a.length-1;i>=0;i--){
//     strRev += a[i];
// }
// console.log(strRev);
// let a=[
//     {name:"ni", ad:"kodiya",email:"ni@",age:20},
//     {name:"ri", ad:"kodiya",email:"ri@",age:50},
//     {name:"si", ad:"kodiya",email:"si@",age:24},
//     {name:"utri", ad:"kodiya",email:"utri@",age:40},
//     {name:"9opi", ad:"kodiya",email:"poi@",age:70},
// ]
// str=''
// function Obj(){
//     this.name = "Nikhil";
//     this.email = "Nikhil@";
//     this.addr = "NikhilKO";
//     this.age = 50;
//     // this.name = 'Nikhil';
// }
// let obj1 = new Obj();
// let obj2={
//     name:"nnjnj",
//     objwq:20
// };
// console.log(obj1.name);
// for(let x in obj1){
//     alert(obj1[x])
// }
// for(let data of a){
//     str += `Name - ${data.name} \n`
//     str += `Address - ${data.ad} \n`
//     str += `Email - ${data.email} \n`
//     str += `Age - ${data.age} \n\n`
// }
// console.log(str);
// a.forEach(element => {
//   console.log(element.name);
//   console.log(element.email);
//   console.log(element.ad);
//   console.log(element.age);
// });
// paddy croppaddypaddy
// let a = [ 1,22,3,4,566];
// // str = ''
// console.log(a.findIndex(num =>num>23));
// console.log(num);
// let arr = ["nikhil","solima","rio","ups","d"];
// let arr2 = arr.slice(0,2);
// console.log(arr2);
// function g(cb){
//     setTimeout(function() {
//         let data = 'Some data retrieved from server';
//         cb(data);
//     }, 2000);
// }
// function processData(data) {
//     console.log(`Processing data: ${data}`);
// }
// console.log(g(processData));


// function res(con,a,b){
//     return con (a,b);

// }


// function sum(a,b){
//  return a+b;
// }

// function sub(a,b){
//     return  a-b;
//    }

// console.log(res(sum,1,4));
// console.log(res(sub,1,4));


// function a(callback){
//     console.log("wait");
//     setTimeout(function(){
// console.log('excude after 3 sec');
// callback();
//     },3000);
// }

// a(function(){
//     console.log('wlcm');
// })



// let a = '{ "name":"nikhil", "age":90}';
// let b  = JSON.parse(a)
// console.log(typeof(b));
// console.log(a.name);
// let promise = new Promise(function(res,rej){
//     setTimeout(()=>res("done"),1000);
// });
// promise.then(alert);
// promise.catch(alert);
// console.log(promise);
//  let  com  = false;
//  let pro = new Promise(function(res,rej){
// if(com){
//     res("Done");
// }else{
//     rej("Error");
// }
// });
// console.log(pro);
//  let pro = new Promise(function(res,rej){
//     setTimeout(()=>res("done"),1000);
//     });

// let onfulfil = (msg) =>{ document.write(msg + "promis fulfile")};
// let onreject = (msg) =>{ document.write(msg + "promis reject")};

// pro.then(onfulfil());
// pro.catch(onreject());
//  });



// async function test(){
//      console.log('A');
//      const data = await fetch("https://jsonplaceholder.typicode.com/posts")
//      console.log('B');
//      const past = data.json();
//     console.log('C');
//     return past;
// }
// test();
// console.log('D1');
// console.log('D2');
// console.log('D3');


// function abc(){
//     var name = "NI";


//     function abc2(){
// console.log(name);
        
//     }
//     name="RP";
//     return abc2;
// }

// let c = abc();

// c();


// function doAdd(x){

//     return function (y){
//         return x+y;
//     };
// }
//  var add = doAdd(1);
//  console.log(add(1));


// const pf=(person)=>{
//     let coins = 3 ;
//     return ()=>{
//         coins -= 1 ;
//         if(coins>0)
//         console.log(`${person} has ${coins} left`);
//         else
//         console.log(`${person} is out of coins`);
//     }
// }


// let son = pf('son');
// let D = pf('D');

// son()
// son()
// son()
// D()
// D()
// D()
// son()

// function outer(i=0){
//     return function inner(){
//         return i++;
//     };
// }
//  let c = outer();
//  console.log(c());
//  console.log(c());
//  console.log(c());
//  console.log(c());
//  console.log(c());
//  console.log(c());


// let old = new Date("1999-02-10")
// let now = new Date()
// console.log(old.getFullYear()-now.getFullYear());
// console.log(old.getMonth()-now.getMonth());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMonth());

// let x = new Date();
// x.setFullYear(2010)
// console.log(Math.max(4,3,-2));

// 



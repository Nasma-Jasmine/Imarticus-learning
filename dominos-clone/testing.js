/*//manufacturing_cost , margin% , ads per product, GST
//return MRP and actual cost
//MRP for <product_name>
function calcProductPricing(product_name,man_cost , ads_cost , GST , margin){
  const actual_cost = man_cost + ads_cost + (GST/100);
  const mrp = actual_cost + actual_cost * (margin/100);
  
  
  return `MRP for ${product_name} is ${mrp}
  and actual cost ${actual_cost}`;
}
console.log(calcProductPricing("Parle-G", 2, 0.25, 5, 30));


//array is defined as it can be store in continuous manner in js
let arr =[1,2,3,4,5,6,7,8,9,10];
let brr=arr;
brr[0]=[0,1,0,1];
console.log(arr);

brr=[...arr];
brr[0]=0;
console.log(brr);


var obj ={
 1 : 1,
 2 : 2,
 3 :{
  "1" : 1,
  "2" : 2,
 }
}
var tmp_obj = obj;
console.log(tmp_obj);
-------------------------------------------------------------------

// Cloning an object
var obj = {
  1: 1,
  2: 2,
  3: {
    "1": 1,
    "2": 2,
  },
};


var clonedObj = { ...obj };
clonedObj[1] = 0;

console.log(obj); 
console.log(clonedObj); 
-----------------------------------------------------------------------------
//Garbage Collection removes unused variable or object
//Javascript automatically handles garbage collection

var obj ={
  1 : 1,
  2 : 2,
  3 :{
   "1" : 1,
   "2" : 2,
  }
 }
 var tmp_obj = {...obj};
 console.log(tmp_obj);
 obj = null;
 console.log(obj);
-------------------------------------------------------------------------------

 //ATM-Machine

 let money = 120.5;
 console.log(Math.ceil(money));
 console.log(Math.floor(money));
 console.log(Math.round(money));
 console.log(Math.pow(money,2));

 //ceil returns the upper value
 //round gives whole number
 //floor returns lower value
 //pow returns power of a number
 //sqrt returns squareroot of a number

 var hero = {
  _name: 'John Doe', 
  getSecretldentity: function(){ 
    return this_name;
  }
  };
  var stoleSecretidentity = hero.getSecretldentity;
  console.log(stoleSecretldentity());
  console.log(hero.getSecretldentity());*/
//----------------------------------------------------------------------------------
// callin a function in function or parameters
  function sum(a,b){
    return a+b;
  }
  function subs(a,b){
    return a-b;
  }
  function multiply (a,b){
    return a*b;
  }
  function divide(a,b){
    return a / b;
  }
  function operation(a,operator,b){
    return operator(a,b);
  }
  let a=4;
  let b=2;
  
 // console.log(operation(a,sum,b));

  //cloning an object
let obj1={
  a: 12,//Here this object is referenced to property 'a' in the object
  b: function(b){
    return this.a*b
  }
}

let result = obj1.b(3);
console.log(result);
//------------------------------------------------------------------------------------------

//Anonymous functions
/*let multi = function(a,b){
  return a * b;
}*/
//It can be called as an inline function
let multi = (a,b) => a*b;
//  => this symbol call as an arrow function

function object(a,b){
  return{
    p1: a,
    p2: b,
  }
}

var obj2={
  p3: object,
  p4: function(){
    let a = this.p3(2,3)
    return a.p1 * a.p2;
  }
}

let an = obj2.p3(1,2);
console.log(an);


function obj2(a,b){
  this.a =a ;
  this.b = b;
  this.fn = function(){
    return this.a === this.b;
  
  }
}
//Prototypical Inheritance
obj2.prototype.multi = function(){
  return this.a * this.b;
}

let an = new obj2(3,4);
console.log(an.multi);
//Create object using constructor
let obj = {
  name : "obj_name",
  address : "address",
}

function Person(name,address){
  this.name = name;
  this.address = address;
}

const p1 = new Person("abc", "xyz");

const p2 = new Person("abc", "xyz");

p1.constructor === Person//true

//CRUD --> Create, Read, Update , Delete
p1.name="yash"

p1.name

p2.address = "abcd"

p2.address

delete p1.name//true

p1
p2
p1.name ="jas"
p1
//-----------------------------------------------------------------
// Normal function
function hello(name){
  console.log(`Hello, ${name}`);
}

hello("Yash")

hello.from ="TN"

hello

hello.from

hello.func = function(){
  return "Hello, there";
}

hello.func

hello.func()

this

window .alert("Hello");

this

function func(){
  console.log(this);
}

func()

function func(){
  this.name="abc";
}

const f1 = new func();

f1
//----------------------------------------------------------------
//Value vs reference
let a =3;

let arr = [1,2,3,"12","abc",[12,43,1214]]

arr

typeof arr//object

arr

obj

p1

p2
//--------------------------------------------------------------
//delete the properties of an object
let person = {
  firstName: "yash",
  lastName: "jas",
  age: 20,
};

delete person.age;

//adding the properties of an object
let person = {
  firstName: 'Nasma',
  lastName: 'Jasmine',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.fullName());
//-------------------------------------------------------------------------------
//Enumeration
obj

for (let key in obj){//key is nothing it is variable
  console.log(obj[key]);
}
obj_name
address

//--------------------------------------------------------
//abstraction
function Car(modelNo){
  this.props = function(){
    return "Brand-Benz, Max_Speed-120kmph";
  }
}

const car1 = new Car(1234);

car//error

car1.props()
//--------------------------------------------------------------
//Private properties & methods

function Car(modelNo){
  let speed = 120;
  const brand = "Benz";
  this.props = function(){
    return `Brand - ${brand}, Max_Speed - ${speed}kmph`;
  }
}

const car1 = new Car(1234);

car1

car1.props()
//------------------------------------------------------------------------
function Car(modelNo){
  let speed = 120;
  const brand = "Benz";
  this.props = function(){
    return `Brand - ${brand}, Max_Speed - ${speed}kmph`;
  }
}

const car1 = new Car(1234);

car1
car1.sp
car1.speedfun()
car1.set_color = function(){
  let color ="red";
}

car1

let tmp_Car = car1;

tmp_Car

tmp_Car.speedfun



function calcProductPricing(man_cost, ads_cost, GST, margin) {
  // Calculate the total cost
  let totalCost = man_cost + ads_cost;

  // Calculate the selling price before GST
  let sellingPriceBeforeGST = totalCost * (1 + margin / 100);

  // Calculate the GST amount
  let GSTAmount = sellingPriceBeforeGST * (GST / 100);

  // Calculate the final selling price including GST
  let sellingPriceWithGST = sellingPriceBeforeGST + GSTAmount;

  // Return the results
  return {
      totalCost: totalCost,
      sellingPriceBeforeGST: sellingPriceBeforeGST,
      GSTAmount: GSTAmount,
      sellingPriceWithGST: sellingPriceWithGST
  };
}

// Example usage:
let manufacturingCost = 100; // Replace with the actual manufacturing cost
let advertisingCost = 20; // Replace with the actual advertising cost
let GSTPercentage = 18; // Replace with the actual GST percentage
let marginPercentage = 10; // Replace with the actual margin percentage

let result = calcProductPricing(manufacturingCost, advertisingCost, GSTPercentage, marginPercentage);

console.log("Total Cost: $" + result.totalCost);
console.log("Selling Price Before GST: $" + result.sellingPriceBeforeGST);
console.log("GST Amount: $" + result.GSTAmount);
console.log("Selling Price With GST: $" + result.sellingPriceWithGST);

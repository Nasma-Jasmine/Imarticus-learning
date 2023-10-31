 //to create a object
 var markers = {
    "brand" : "Rorito",
    "color" : "violet",
    "size"  : "10mm" ,
    "price" : 100,     
    write : function(){
        console.log("Writing....");
    }
 }
 console.log(markers.brand);

//----------------------------------------------------------------------------------------------------------------
//Another way to create or defining an object 
var obj = Object();
obj.name = 'yash';
obj.price = 100;
obj.write = function(){
   console.log(obj.name);
}
console.log(obj.write());


//-------------------------------------------------------------------------------------------------------------
// Factory function....
 function marker(color,isPermanent){
    return{
        'brand' : 'rorito',
        'color' :  color,
        'size'  : '10mm' ,
        price : 100,     
        isPermanent : isPermanent,
        write : function()
        {
          if(isPermanent)
          console.log(`Writing.. with Permanent marker.. color:${color}`);
          else
          console.log(`Writing.. with Temporary marker.. color:${color}`);

        }
    }
 }
 var obj_mar0 = marker('red',true);
 var obj_mar1 = marker('green',true);
 var obj_mar2 = marker('black',false);
 var obj_mar3 = marker('red',false);
 var obj_mar4 = marker('blue',true);
 var obj_mar5 = marker('black',false); 

 console.log(obj_mar0.write());
 //console.log(obj_mar2.write());
 //console.log(obj_mar4.write());
//-------------------------------------------------------------------------------------------------------
 
//to create a object in multiple times
 //console.log(marker.write());
 //console.log(object["keywords"]);
 
 
 //--------------------------------------------------------------------------------------------------------
 //Creating a constructor
 function Note(size){
       this.brand = 'Classmate';
        //this.pages = 180;
        //this.price = 80;
        this.size = size;
        this.write = function(){
            console.log("Writing...");
        }
    }
 let note_obj = new Note(10);
 console.log(note_obj.brand);
 console.log(note_obj.constructor=== Note);
 //to check whether it is constructor or not
 //-----------------------------------------------------------------------------------------------------------
  
 function Note(size){
    //This is how constructor works in background
    //le this={};
    this.brand = 'Classmate';
    //this ={
        // brand : 'classmate'
    //}
    this.size = size;
    this.write = function(){
        console.log("Writing...");
    }
    //return this;
}
let note_obj = new Note(10);
let note_obj1 = new Note(10);
//It will generate "false" either with "==" or "==="
console.log(note_obj == note_obj1);
//Becoz every object allocate to a new memory location
 //------------------------------------------------------------------------------------------------------------

 // Array in Javascript
 var arr =[12,34,"HelloWorld",3.145,null];
 arr.push(12)
 arr.pop();

 //----------------------------------------------------------------------------------------------------------

 //Recursive function
 //splitting the bigger problems into small
 function average(arr,i){
    //base condition --> to terminate the function calling itself
    let sum = 0;
    if(i >=arr.length)
    return 0;
    sum +=arr[i] + average(arr,i);
    i++;
 }
 //function main(){  //main function doesnt do anything 
    let arr = [1,2,3,4,5,6];
    console.log(average(arr,0)/arr.length);
 //}
 //main();
 //---------------------------------------------------------------------------------------------------------
 //finding average of an array
 function average(arr){
    var sum = 0;
    for(var i=0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
 
 //--------------------------------------------------------------------------------------------------------
 //factorial of a number
 let n = 4;  
  
 function factorial(n) {  
     
     for (let i = 1 ; i <= n; i++){
         a = a * i;
     }
    
     return a;  
 } 
 console.log(factorial(n));
  
//----------------------------------------------------------------------------------------------------------
 //factorial using recursive function
 let n=5;
 function factorial(n){
    if(n==1)
    return 1;
return(n*factorial(n-1));
 }
 console.log(factorial(n));
 //----------------------------------------------------------------------------------------------------------
 
 //to check whether the number is prime or not
 function IsPrime(n)
{
for(var i=2; i<n; i++)
{
    if(n%i==0)
    {
        console.log("Not Prime");
        return false;
    }
}
  return true;
}

var n = prompt("Enter a no");
    if(IsPrime(n)==true)
    {
    console.log("Prime");
} 
 
//-----------------------------------------------------------------
 
 //fibonacci series using recursion

 let n=7;
 function fibonacci(n){
    if(n<=2)
    return 1;
return(fibonacci(n-1)+fibonacci(n-2));
 }
 console.log(fibonacci(n));
 
 //--------------------------------------------------------------
 
 //To find maximum number in an array
 const arr=[1,2,3,4,5,6,7]
 
 function maximum(arr) { 
 let max = -1;
 let sec_max=-1;
 if (arr[i]>sec_max && arr[i]<max)
    for (let i = 1; i < num; i++) { 
        if (arr[i] > num) { 
            num = arr[i]; 
        } 
    } 
    return num; 
} 
console.log(maximum(arr));
//----------------------------------------------------------

const arr = [7,5,9,4,8,18];
console.log(Math.max(...arr));
console.log(Math.min(...arr));










const arr = [1, 2, 3, 4, 5, 6, 7];

function maximum(arr) {
    let max = -1;
    let sec_max = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            sec_max = max;
            max = arr[i];
        } 
    }
    return sec_max;
}
console.log(sec_max);








const arr = [1, 2, 3, 4, 5, 6, 7];

function maximum(arr) {
    let max = -1;
    let sec_max = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            sec_max = max;
            max = arr[i];
        } else if (arr[i] > sec_max && arr[i] !== max) {
            sec_max = arr[i];
        }
    }

    return sec_max;
}

console.log(maximum(arr));


 


for (let i=2;i<arr.length-1,i++)
{
    let tmp1 = arr[i];
    arr[i]=tmp1;
    tmp1=arr[i+1];
}
console.log(arr);

/*var a=2;
var b=3;
[a,b] = [b,a]
console.log(a,b);//Swapping two elements in an array


var a=5
if (3<4 || a++)
console.log(a);//short circuit condition
//its or operation first is true 
if (3>4 && a++); //its and operation if first is false it cant go to other























/*
*/
const arr = [-2, -3, -4, -5, -6, -7];

function maximum(arr) {
    let max = -Infinity;
    let sec_max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            sec_max = max;
            max = arr[i];
        } else if (arr[i] > sec_max && arr[i] !== max) {
            sec_max = arr[i];
        }
    }

    return sec_max;
}

console.log(maximum(arr));
const arr = [-2, -3, -4, -5, -6, -7];

function maximum(arr) {
    let max = -Infinity;
    let sec_max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            sec_max = max;
            max = arr[i];
        }
    }
}
console.log(max);



const arr = [-2, -3, -4, -5, -6, -7];

function minimum(arr) {
    let min = -Infinity;
    let sec_min = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            sec_min = min;
            min = arr[i];
        } else if (arr[i] < sec_min && arr[i] !== min) {
            sec_min = arr[i];
        }
    }

    return sec_min;
}

console.log(minimum(arr));

const arr = [-2, -3, -4, -5, -6, -7];

function minimum(arr) {
    let min = -Infinity;
    let sec_min = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            sec_min = min;
            min = arr[i];
        } 
    }
    return sec_min;
}
console.log(sec_min);
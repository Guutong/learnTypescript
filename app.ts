var message:string="Hello World!";
console.log(message);

// object
class User{
    id:number;
    email:string;
    disp():string{
        return "User [id=" + this.id + ", email=" + this.email +"]";
    }
}
var user =  new User();
user.id = 101;
user.email = "john@example.com";
console.log(user.disp());

// Built-in types 
var t1:number;
//t1="hello"; <==[ts] Type '"hello"' is not assignable to type 'number'.
t1=5;
var t2:string="data type string";
var t3:Boolean=false;
var t4:null;
var t5:undefined;

// Variables
// 
// var [identifier] : [type] = [value];
// var [identifier] : [type];
// var [identifier] = [value];
// var [identifier];

var nickname:string = "John"; 
var point1:number = 12;
var point2:number = 42.50
var result = point1 + point2 
console.log("nickname: "+nickname) 
console.log("first point: "+point1) 
console.log("second point: "+point2) 
console.log("result: "+result)

//Variable Scope
var global_num = 41          //global variable 
class Numbers { 
   num_val = 55;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var nums = new Numbers(); 
console.log("Global num: "+nums.num_val) 

//Operators
var a:number=10;
var b:number=2;
console.log("a : "+a+",  b : "+ b)   
console.log("result of Addition : "+(a+b)) 
console.log("result of Subtraction : "+(a-b)) 
console.log("result of Multiplication : "+(a*b)) 
console.log("result of Division : "+(a/b)) 
console.log("result of Modulus : "+(a%b)) 
console.log("result of Increment : "+(++a)) 
console.log("result of Decrement : "+(--a)) 

var message = "Hello World!";
console.log(message);
// object
var User = (function () {
    function User() {
    }
    User.prototype.disp = function () {
        return "User [id=" + this.id + ", email=" + this.email + "]";
    };
    return User;
}());
var user = new User();
user.id = 101;
user.email = "john@example.com";
console.log(user.disp());
// Built-in types 
var t1;
//t1="hello"; <==[ts] Type '"hello"' is not assignable to type 'number'.
t1 = 5;
var t2 = "data type string";
var t3 = false;
var t4;
var t5;
// Variables
// 
// var [identifier] : [type] = [value];
// var [identifier] : [type];
// var [identifier] = [value];
// var [identifier];
var nickname = "John";
var point1 = 12;
var point2 = 42.50;
var result = point1 + point2;
console.log("nickname: " + nickname);
console.log("first point: " + point1);
console.log("second point: " + point2);
console.log("result: " + result);
//Variable Scope
var global_num = 41; //global variable 
var Numbers = (function () {
    function Numbers() {
        this.num_val = 55; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    return Numbers;
}());
Numbers.sval = 10; //static field 
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable  
var nums = new Numbers();
console.log("Global num: " + nums.num_val);
//Operators
var a = 10;
var b = 2;
console.log("a : " + a + ",  b : " + b);
console.log("result of Addition : " + (a + b));
console.log("result of Subtraction : " + (a - b));
console.log("result of Multiplication : " + (a * b));
console.log("result of Division : " + (a / b));
console.log("result of Modulus : " + (a % b));
console.log("result of Increment : " + (++a));
console.log("result of Decrement : " + (--a));

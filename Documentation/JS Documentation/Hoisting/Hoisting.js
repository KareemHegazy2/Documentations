// بيرفع المتغيرات اللي انت عرفتها لفوق و الـ function بينقلها زي ماهي لفوق
// خد بالك الـ function declartion هي اللي بيتعملها hoisting
// أما الـ Function Expression مش بيتعملها حاجه (بيتعمل للمتغير بتاعها بس زي ما واضح تحت)
// Hoisting
// --- [مرحلة التجهيز والرفع - Creation Phase] ---

// 1. رفع المتغيرات المعرفة بـ var وتعيين قيمتها الإبدائية كـ undefined

var x;
var y;
var Hello;
var student;


// 2. رفع الدالة كاملة بأسمها وجسمها
function sum() {
    var summ; // رفع المتغير الداخلي للدالة إلى أعلى نطاق الدالة
    summ = 0;
    for (let i = 0; i < arguments.length; i++) {
        summ += arguments[i];
    }
    return summ;
}

// --- [مرحلة التنفيذ - Execution Phase] ---

x = 5;
console.log(x); // 5

y = 6;
console.log(y); // 6

Hello = function() {
    return `Say Hello`;
};

console.log(sum(5, 1, 2));
Hello();

student = {
    name : "kareem" ,
    code : 1001,
    major : "CS",
    sayHi : function(){
        return `HIII` ;
    }
 }
 console.log(student.major);
 console.log(student.name);
 

// ==============================================================================
// The Original Code
var x = 5;
console.log(x)
var y = 6;
console.log(y);

 var Hello = function(){
    return `Say Hello` ;
 }

function sum(){
    var summ = 0;
    for (let i = 0; i < arguments.length; i++) {
        summ+=arguments[i];
        
    }
    return summ;
}
 console.log(sum(5,1,2));
 Hello();

 var student = {
    name : "kareem" ,
    code : 1001,
    major : "CS",
    sayHi : function(){
        return `HIII` ;
    }
 }
 console.log(student.major);
 console.log(student.name);
 
 


// #region Topic 2: Loops
// ==============================================================================
//                                Loops                                      
// ==============================================================================

// ==============================================================================
// Topic : For Loop
// #region Description
// concept : التكرار بدل ما تكرر الكود كل شويه , لا بتخلي الكمبيوتر يقرره بناءا على الشرط المتحقق و عدد المرات اللي تعرفها
// For Loops can execute a block of code a number of times.
// For Loops are fundamental for tasks like performing an action multiple times.

// Usage : تستخدم لو عايز تنفذ الكود لعدد مرات محدده
// #endregion
// ==============================================================================
// #region Code and Exampels


/* for (initialization; condition; Update ( increase / decrease)) {
// code block to be executed
}
initialization is executed one time before the execution of the code block.

the condition for executing the code block.

increases a value is executed every time the code block has been executed.*/

/* هو اي الفرق بين 

let i = 5;
for (var i = 0; i < 10; i++) {
  // some code
}
  // Here i is 10

و بين 

let i = 5;

for (let i = 0; i < 10; i++) {
  // some code
}

// Here i is 5

ببساطه ان "let" المستخده جوا الـ seconed loop خلت القيمه بتبقى داخل الـ loop بس
أما في الكود الاول مستخدمش "let" فالقيمه بقت global not local يعني عالميه في البرنامج كله مش متقيده بنطاق محدد
*/

cars = ["BMW", "Volvo", "Saab", "Ford"];
len = cars.length;

statues = "";
for (let i = 0; i < len; i++) {
    statues += cars[i];
}

// طريقه تاني لكتابة نفس الكود اللي فوق 
 cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
  text += cars[i];
  i++;
}
// طريقه اخرى لكتابة الـ for loop

/*  for (const element of array) {
  // الكود المراد تنفيذه لكل عنصر
}*/

var tags = ["HTML", "CSS", "JS"];
for(const x of tags){
  console.log(x);
  
}

// #endregion
// ==============================================================================
// Topic : While , and do while
// #region Description
// concept : نفس كونسبت الـ For Loop ولكن هنا فعاله اكتر لو مش عارف عدد التكرار
// Usage : تستخدم لو مش عارف عدد التكرار مثلا معتمد على الـ input الخاص باليوزر لو دخله غلط هتفضل تعيد لحد ما يدخله صح 
// Note : تقدر تستخدم الـ while نفس استخدام الـ For Loop زي ما هيبان تحت
// #endregion
// ==============================================================================
// #region Code and Exampels
// While loop like for loop
 i = 0; // ==> initialization and declration outside and before the loop
while (i < 10) // ==> condition
    {
    console.log(`The number is ${i}`);
    i++ ; // ==> Update ( increase / decrease)
    }
    // another Example When You Don't Know The Times of Loop By do while
    // الميزه اللي في الـ do while انه بينفذ الكود مره واحده قبل ما الـ condition يتحقق بغض النظر عن الـ condition is true or false
do {
    pass = prompt("Enter The Password : Only Numbers Allowed");
}
while (isNaN(pass));
/* هو هينفذ الكود مره واحده اولا و يطلب الباسورد 
و بعدين هيتحقق لو اللي دخله مش رقم يعني الـ condition is true هيطلب منه تاني
أما لو اللي دخله رقم يعني الـ condition is false مش هيطلب تاني و يخرج بره الـ loop */

    

// #endregion
// ==============================================================================
// Topic : Jump Statements (break , continue , return  ) and Labels
// #region Description
/*  concept : Jump statements let you change the flow abruptly
يعني مثلا لما كونديشين معين يبقى بـ true or false استخدم break or continue 
و في هاية الـ Function عشان اخرج منها و ارجع قيمه بستخدم return
*/
// #endregion
// ==============================================================================
// #region Code and Exampels
    // break and continue are the only JavaScript statements that can "jump out of" a code block.

// 1 - break 
/* 
The break statement "jumps out" of loops and switches.

The break statement terminates the execution of a loop or a switch statement.
 */
for ( i = 0; i < 10; i++) {
  if (i === 3) {
     break; // كده هيخرج من الـ Loop لما يوصل لرقم 3 
     }
  
  console.log(`The number is ${i}`); /* The Outout ==> The number is 0
                                                       The number is 1 
                                                       The number is 2
   */
}

// 2 - continue 
/* The continue statement skips the current iteration in a loop.

The remaining code in the iteration is skipped and processing moves to the next iteration.*/
for ( i = 0; i < 10; i++) {
  if (i === 3) {
     continue;
     }
  
  console.log(`The number is ${i}`); /* The Outout ==> The number is 0 => 9 except 3 

   */
}

// 3 - return
/*
When a function reaches a return statement, the function stops executing.

The value after the return keyword is sent back to the caller. 
 */
function sayHello() {
  return "Hello World"; // ==> sayHello() = "Hello World"
} 


// 4 - Labels
/*  The Labels : A label provides a name for a statement, 
 or a block of statements, allowing statements to be referenced to, for program flow control, particularly in loops.
*/
/* labelname: {
  statements
} */
 text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; } // ==> Remember : The continue statement skips the current iteration in a loop and go to loop1 (The label)
                                    // to continue the code
                                   // The output is => 1
                                  //                   2 (four times)
    console.log(i);
    
   }
}





// #endregion

// #endregion



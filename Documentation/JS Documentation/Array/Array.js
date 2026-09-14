// Array is Mutable (Can get and set)
// Array is an Object 
// The variable is stored in Stack memory holding the address (reference) of the value in Heap memory
// When comparing two arrays, you compare their addresses (references), not their values

const arr = [0, 5, 2, 1]; // ==> Array contains 4 items with assigned values
let arr1 = new Array(5);  // ==> Array of length 5 with empty slots, this is called a Sparse Array

console.log(arr1[0]); // ==> undefined

arr1 = new Array(0, 5, 2, 1);
console.log(arr1[0]); // ==> 0  (Index 0 has value 0)
console.log(arr1[2]); // ==> 2  (Index 2 has value 2)

// Comparing references in memory:
arr === arr1 ? console.log("Equal") : console.log("Not Equal"); // Output: "Not Equal" (Because memory addresses are different)

// ==============================================================================
// Topic: constructor
// #region Description
// Concept: الـ Constructor (ويُترجم برمجياً إلى: دالة الإنشاء أو البنّاء) هو عبارة عن دالة خاصة (Special Method) داخل الـ Class أو الـ Object،
//  وظيفتها الأساسية هي إنشاء وتهيئة (Initialize) الكائن الجديد وتحديد قيمه الأولية.
// Note: Use an array literal [ ] instead of the new Array() when possible.

// new Array(number) is a special dangerous case.

// new Array(3) creates an array with 3 empty elements; not an array containing the number 3.

// Using [ ] is faster to type, easier to read, and avoids the "single number trap":
// #endregion
// ==============================================================================
// #region Code and Exampels

points = new Array(40, 100, 1, 5, 25, 10);
points = [40, 100, 1, 5, 25, 10];

// #endregion

// ==============================================================================
// Topic: Methods
// ==============================================================================
// #region Code and Exampels


points = [40, 100, 1, 5, 25];

// 1- length ==> can get and Set
console.log(points.length); // ==> get

console.log(points.length=8); // ==> set


console.log(points.length=5);

// 2- toString() ==> returns the elements of an array as a comma separated string.
console.log(points.toString()); // ==> 40,100,1,5,25

// 3- join() ==> It behaves just like toString(), but in addition you can specify the separator 
console.log(points.join("+")); // ==> 40+100+1+5+25

// Do NOT use eval()
// Executing JavaScript from a string is an BIG security risk.

// With eval(), malicious code can run inside your application without permission.

// With eval(), third-party code can see the scope of your application, which can lead to possible attacks.

// 4- at() ==> returns the same as []
console.log(points.at(1)); // 100 (seconed element)



// 5- pop() ==> remove last one
console.log(points.pop()); // return removed one (25)

// 6- shift() ==> remove first one
console.log(points.shift()); // return removed one (40)

// 7- push() ==> add at end and return a new length of array
console.log(points.push("kareem")); // ==> 4

// 8- unshift() ==> add at start and return a new length of array
console.log(points.unshift("I'm start")); // ==> 5

// 9- concat()
cars = ["BMW" , "porsche" , "Toyota"]
foods = ["mahshi", "rice" , "suchi" ]
console.log(cars.concat(foods)); // ==> ['BMW', 'porsche', 'Toyota', 'mahshi', 'rice', 'suchi']

// 10- splice() ==> can remove , add , and remove + add
//  a- remove
    console.log(cars.splice(0,1)); // Arguments : (start , delete count(عدد العناصر اللي هتتحذف من نقطة البدايه))
                                   // return elements deleted ['BMW]
    console.log(cars); // ==> ['porsche', 'Toyota']
    
//  b- add 
    console.log(cars.splice(0,0,"Marcedes Benz")); // Arguments : (start , delete count(عدد العناصر اللي هتتحذف من نقطة البدايه) , element will add)
    
    console.log(cars); // ==> ['Marcedes Benz', 'porsche', 'Toyota']

//  c- remove+add
    console.log(cars.splice(0,2,"Cobra")); // Arguments : (start , delete count(عدد العناصر اللي هتتحذف من نقطة البدايه) , element will add)
                            // Output is deleted items ==> ['Marcedes Benz', 'porsche']
    console.log(cars); // ==> ['Cobra', 'Toyota']
    


// 11- slice() ==> Creates a Shallow Copy of the array (Copies values, different addresses)
foods = ["Pizza", "Burger", "Pasta"];

foods1 = foods.slice();
// In the Stack: foods and foods1 hold DIFFERENT memory addresses (pointing to separate arrays in Heap).
// Modifying foods1 will NOT affect foods.

// -------------------------------------------------------------

// Direct Assignment ==> Copies the reference (Same address)
foods2 = foods;
// In the Stack: foods and foods2 hold the SAME memory address.
// Any change to one will affect the other.


// ==============================================================================

// 12- Foreach() ==> Calls a function for each element in The array:
function print(x){
    console.log(x);
    
}
foods = ["Pizza", "Burger", "Pasta"];
foods.forEach(print);
console.log("==============================================================================");

// OR
foods.forEach(
    function (x){ // call back function ==> anonymous (عشان ملهاش اسم (اقدر احطلها اسم عادي))
    console.log(x);
    
}
);
console.log("==============================================================================");

// OR 
foods.forEach(element => {
    console.log(element);
    
});











// #endregion
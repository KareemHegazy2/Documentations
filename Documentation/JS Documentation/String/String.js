// #region Topic 3 : Strings
// ==============================================================================
//                               Strings
// ==============================================================================

// ==============================================================================
// Topic : Escape Characters
// #region Description
// Concept: رموز بتفهم الكمبوتر يعمل شئ معين زي انه يعمل Tap او ينزل سطر جديد و هكذا
// #endregion
// ==============================================================================
// #region Code and Exampels

//   \' ==> Output -> '
console.log('It\'s alright.'); // OutPut ==> It's alright.

//   \" ==> OutPut -> " 
console.log( "We are the so-called \"Vikings\" from the north."); // OutPut ==> We are the so-called "Vikings" from the north.

//   \\ ==> Output -> \
console.log("The character \\ is called backslash."); // OutPut ==> The character \ is called backslash.


//   \n	==> New Line
console.log("Hello\nWorld"); // OutPut ==> Hello
                             //            World             
//   \t	==> Horizontal Tabulator
console.log("Name:\tAhmed"); // OutPut ==> Name:    Ahmed

// ==============================================================================
// #endregion

// ==============================================================================
// Topic: Back-Tics
// #region Description
// Concept: تقدر من خلالها تحط جواها اي علامه زي "" او '' او / منغير الـ Escape character
//         تقدر كمان تقسم الكلام على كذا سطر عادي
// Note: هي العلامه اللي عند حرف الـ ذ 
//      و قدر تحط قيمة متغير باستخدام ${اسم المتغير } داخل الـ back tic
// #endregion
// ==============================================================================
// #region Code and Exampels
 console.log(`He's often called "Johnny"`); // OutPut ==> He's often called "Johnny"

 console.log(`The quick
brown fox
jumps over
the lazy dog`); // OutPut ==> The quick
                //            brown fox
                //            jumps over
                //            the lazy dog
 
var firstName = "John";
var lastName = "Doe";

console.log(`Welcome ${firstName}, ${lastName}!`); // OutPut ==> Welcome John, Doe!

var header = "Template Strings";
var tags = ["template strings", "javascript", "es6"];

var html = `<h2>${header}</h2><ul>`;

for ( x of tags) {
  html+=`<li>${x}</li>`;
  
}
html+=`</ul>`
document.getElementById("demo").innerHTML = html;

// ==============================================================================

 // #endregion

// ==============================================================================
// Topic: String Methods
// #region Description
/* Concept: الـ String Methods هي أدوات ووظائف (Functions) جاهزة مدمجة داخل جافاسكريبت،
  تُتيح لك التعامل مع النصوص بسهولة دون الحاجة لكتابة كود معقد من الصفر — مثل البحث داخل النص، أو قصه، أو تنظيفه من المسافات.
  */
// Note:أهم مفهوم يجب معرفته عن الـ String Methods هو أنها لا تُعدّل على النص الأصلي أبداً، بل تُرجع دائماً نصاً جديداً.
// Strings are immutable: Strings cannot be changed, only replaced(All string methods return a new string. They don't modify the original string.)
// #endregion
// ==============================================================================
// #region Code and Exampels

// .length : The length property returns the length of a string or array
var text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length); // OutPut ==> 26 (start with 1 not 0)

// #region Extracting string characters
/*
There are 4 methods for extracting string characters:

1 - The at(position) method returns the character at a specified index, and it is the only one that supports negative indexes.
2 - The charAt(position) Method ==> returns the character at a specified index
3 - The codePointAt(position) Method ==> returns the code of the character at a specified index
                                     ==> a UTF-16 code (an integer between 0 and 65535)
4 - Using property access [] like in arrays
*/
var text = "HELLO WORLD";
console.log(text.at(0)); // Output ==> H
console.log(text.at(-1)); // OutPut ==> D

console.log(text.charAt(1)); // OutPut ==> E

console.log(text.codePointAt(2)); // OutPut ==> UNI code of "L" (76)

console.log(text[3]); // OutPut ==> L

/*
Note : Property access might be a little unpredictable:
It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
Propert access is read only, but str[0] = "A" gives no error in "sloppy mode".
*/
// #endregion

// concat() joins two or more strings:
text1 = "Hello";
text2 = "World";
console.log(text1.concat(" ", text2)); // OutPut ==> Hello World

//#region Extracting String Parts
/*
There are 2 methods for extracting a part of a string:
1 - slice(start, end) ==> supports negative indexes
2 - substring(start, end) ==> Start and end can be swapped , Not supports negative indexes

*/
text = "Apple, Banana, Kiwi";
console.log(text.slice(7, 13)); // OutPut ==> Banana
//If you omit the second parameter, the method will slice out the rest of the string:
console.log(text.slice(7)); // OutPut ==> Banana, Kiwi
console.log(text.slice(-12, -6)); // OutPut ==> Banana

console.log(text.substring(7, 13));  // OutPut ==> Banana
console.log(text.substring(13, 7));  // OutPut ==> Banana

//#endregion

//#region Converting to Upper and Lower Case

// 1- A string is converted to upper case with toUpperCase():
// 2- A string is converted to lower case with toLowerCase():
text1 = "Hello World!";
console.log(text1.toUpperCase()); // OutPut ==> HELLO WORLD!

console.log(text1.toLowerCase()); // OutPut ==> hello world!

//#endregion

// trim() : method removes whitespace from both sides of a string
/*
 if You want removes whitespace from only start string Use : trimStart();
 if You want removes whitespace from only end string Use : trimEnd();
*/
text1 = "      Kareem      ";
console.log(text1.trim()); // OutPut ==> Kareem

// repeat() : method returns a string with a number of copies of a string.
console.log(text1.trim().repeat(3)); // OutPut ==> KareemKareemKareem

// replace() : method replaces a specified value with another value in a string:

// replaces only the first match
 text = "Please visit Microsoft and Microsoft!";
console.log( text.replace("Microsoft", "W3Schools")); // OutPut ==> Please visit W3Schools and Microsoft!

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log( text.replace(/MICrosoft/i, "W3Schools")); // OutPut ==> Please visit W3Schools and Microsoft!

// To replace all matches, use a regular expression with a /g flag (global match):
console.log( text.replace(/MICrosoft/g, "W3Schools")); // OutPut ==> Please visit W3Schools and W3Schools!

// replaceAll() replaces all occurrences using simple plain text,
// while replace() uses regular expressions (/pattern/g) to offer more powerful searching and case-insensitive matching.
text = "I love cats. Cats are very easy to love. Cats are very";
repalce = text.replaceAll("cats","dogs");
console.log(repalce.replaceAll("Cats","Dogs")); // OutPut ==> I love dogs. Dogs are very easy to love. Dogs are very
// OR
console.log(text.replaceAll(/cats/gi,"dogs")); // OutPut ==> I love dogs. dogs are very easy to love. dogs are very
 

// split() : A string can be converted to an array with the split() method
// If the parameter is (""), the returned array will be an array of single characters:
text = "Hi fox!";
 myArr = text.split(""); // myArr = ["H" , "i" , " " , "f" , "o" , "x" , "!"]

 //If the parameter is (" "), the returned array will be an array of words:
text = "The quick brown fox.";
myArr = text.split(" "); // myArr = ["The" , "quick" , "brown" , "fox."]

//If the separator is omitted, the returned array will contain the whole string in index [0].
myArr = text.split(); // myArr = ["The quick brown fox."]

// "In short, it loops through the string and splits it whenever it finds the specified value,
//  returning all the separated parts as elements in a new array."
 


// #endregion

// ==============================================================================
// Topic: String Search
// ==============================================================================
// indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
text = "Please locate where 'locate' occurs!";
console.log(text.indexOf("locate")); // OutPut ==> 7
console.log(text.indexOf("locate" , 14)); // OutPut ==> 21

// lastIndexOf() method returns the index of the last occurrence of a specified text in a string, or it returns -1 if the string is not found:
console.log(text.lastIndexOf("locate")); // OutPut ==> 21
 

// search() method searches a string for a string (or a regular expression) and returns the position of the match:
text.search("locate"); // OutPut ==> 7
console.log(text.search(/locate/g)); // OutPut ==> 7

// الفرق بين الـ indexOf() و بين الـ search() هو:
// indexOf() : بياخد رقم مع القيمه يبدأ العد من عنده 
// search() : بتقبل الـ (regular expressions) زي الـ /../i , /../g









// #endregion
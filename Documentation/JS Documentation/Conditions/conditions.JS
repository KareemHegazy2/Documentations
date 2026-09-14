/* قبل ما نبدأ هقولك الفرق بين الـ var , let , const
1. var:
تقدر تعرف بيه متغير أول مرة وتديله قيمة، وتقدر تعمل بيه Redeclaration (تعرف نفس اسم المتغير بـ var تاني وتديله قيمة جديدة)، والقديمة هيحصلها overwrite، وكمان تقدر تغير قيمته بالـ Reassignment عادي.

2. let:
تقدر تعرف بيه متغير أول مرة وتديله قيمة، بس متقدرش تعمل بيه Redeclaration (متقدرش تعرف متغير تاني بنفس الاسم بـ let جوه نفس الـ Scope)، لكن تقدر تغير قيمته بالـ Reassignment عادي.

3. const:
تقدر تعرف بيه متغير أول مرة وتديله قيمة، بس متقدرش تعمل بيه Redeclaration ولا تقدر تغير قيمته بالـ Reassignment (ثابت).
 */

// #region Topic 1: conditions Statements
// ==============================================================================
//                                conditions                                      
// ==============================================================================

    // ==============================================================================
    // Topic: Conditional Statements (if, else if, else)
    // #region Description
    // Concept: بتنفذ الكود بناءً على تحقق شرط معين (Boolean: true / false)
    // Note: الـ Execution بيمشي بالترتيب من فوق لتحت، وأول شرط يتحقق وينفذ كوده بيخرج بره الـ Block.
    // #endregion
    // ==============================================================================
// #region Code and Exampels
    let age = 16;

    if (age >= 18) {
        // بيشتغل لو الشرط الأول true
        console.log("You can drive solo"); 
    } 
    else if (age >= 16) {
        // بيشتغل لو الشرط الأول false والشرط ده true
        console.log("You can drive with parents"); 
    } 
    else {
        // بيشتغل لو كل الشروط اللي فوق كانت false
        console.log("You Can't Drive"); 
    }

    // Nasted if (Check first if when is true check seconed if when is true execute the code or function )
     age = 16;
     country = "USA";

    if (country == "USA") {
    if (age >= 16) {
        console.log("You can drive "); 
    }
    }
    //You can Replace it By Logical Operations 

    /*(&& => And (Must all The conditions is true) , || => Or (At least one Condition is true) , 
    ! => Not (Inverts the boolean value: T becomes F, F becomes T) 
    !! => (Convert The Value To Boolean))
    */
    age = 16;
    country = "USA";

    if (country == "USA" && age >= 16) {
        console.log("You can drive"); 
    }
// ==============================================================================
// #endregion
    // ==============================================================================
    // Topic: Ternary Operator
    // #region Description
    // Concept: بتنفذ الكود بناءً على تحقق شرط معين (Boolean: true / false)
    // Note: التنفيذ بيمشي من الشمال لليمين اول كود موجود بيتنفذ لو الـ Condition is true تاني شرط بيتنفذ لو الـ Condition is False
    // Description :/*The conditional operator is a shorthand for writing conditional if...else statements.
                    //It is called a ternary operator because it takes three operands.
                    //(condition) ? expression1 : expression2
    // هناخد نفس المثال بتاع الـ if ولكن باستخدام الـ ternary
    // #endregion
    // ==============================================================================
// #region Code and Exampels

     age = 16;
     country = "USA";
    (age>=18 && country == "USA" ) ? console.log("You can drive solo") : console.log("You Can't Drive");
    // ==============================================================================
// #endregion
    // ==============================================================================
    // Topic : Switch Statement (Control Flow)
    // #region Description
    // Concept : بتختار وتنفذ كود معين بناءً على مطابقة قيمة متغير واحد مع أسباب/حالات متعددة (Cases).
    // Usage : بديل أنضف وأسهل في القراءة للـ if...else if الكثيرة لما تكون بتقارن قيمة واحدة.
    //
    // How it works:
    // 1. بيتم تقييم قيمة الـ expression مرة واحدة فقط.
    // 2. بتتقارن القيمة مع كل case بالتوالي.
    // 3. لو حصل تطابق (Match)، بيتم تنفيذ الكود الخاص بالحالة دي.
    // 4. لو مفيش أي تطابق، مفيش كود بيتنفذ (إلا لو حطيت default).
    // #endregion
    // ==============================================================================
    // #region Code and Exampels
/* 
    switch(expression) {
    case x:
         لو الـ x == expression 
    هينفذ الكود اللي هنا 
    //الـ break; عشان لما ينفذ الكود مع اي case يخرج بره الـ switch (يعني بيتنفذ مع الـ first match بس)
        break;
    case y:
         لو الـ y == expression 
    هينفذ الكود اللي هنا 
        break;
    default:
         لو الـ expression مش بيساوي اي حاجه من الـ cases 
        هينفذ الكود اللي هنا 

    }
*/
    //الـ break; عشان لما ينفذ الكود مع اي case يخرج بره الـ switch (يعني بيتنفذ مع الـ first match بس)
    var day;
     date = new Date().getDay();
    // new Date() : بتنشئ object يحتوي على التاريخ والوقت الحالي بالكامل.
    //The getDay() method returns the weekday from Date() as a number between 0 and 6.(Sunday=0, Monday=1, Tuesday=2 ..)
    
    switch (date) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
    }

    let x = "0"; // ==> string not number
    switch (x) {
    case 0: // ==> number not string
        statues = "Off";
        break;
    case 1:
        statues = "On";
        break;
    default:
        statues = "No value found";
    }
    console.log(statues); // The Output is : No value found 
    // ==============================================================================
    // #endregion
    // ==============================================================================
    // Topic : The Nullish Coalescing Operator (??)
    // #region Description
    // Topic: Nullish Coalescing Operator (??)
    // Concept: Returns the right operand when the left operand is nullish (null or undefined), 
    //          otherwise it returns the left operand.
    //
    // Usage: When programming, a lot of values are falsy (like 0, "", false, undefined, null, NaN).
    //        However, sometimes you want to check ONLY if a variable is nullish (null or undefined),
    //        where falsy values like 0 or "" are considered valid data.
    // #endregion
    // ==============================================================================
    // #region Code and Exampels
    let name = null;
     let text = "missing";
    let result = name ?? text; // the resault will equal "missing"
    console.log(result); // The Output is : missing
// ==============================================================================
    // #endregion
// #endregion







// ===== Functions =====

//#region Functions

    //#region 1 - Procedural Function

    // ==> 1 - Procedural Function
    // الداله العاديه اللي عارفينها اللي بتعمل حاجه و خلاص
    function sum(x,y){
        console.log(`The Summetion = ${x+y}`);
    }
    sum(10,20);

    //#endregion

    // ==============================================================================

    //#region 2 - First Class Object Function

    // ==> 2 - First Class Object Function

        // a- can declare it into variable -> Expression Function

            minus = function (x,y){
            console.log(`The Minus = ${x-y}`);
            }
            minus(20,10);

        // b- > Recursion Function -> دالة بتنادي نفسها لحل مشكلة متكررة لحد ما توصل للـ Base Case

            function factorial(n) {
                if (n === 0) {
                    return 1; // Base Case: شرط التوقف عشان متدخلش في Infinite Loop
                }
                return n * factorial(n - 1); // recursive call
                }

            console.log(`The Factorial = ${factorial(5)}`);

        // c- Can Declare it Inside an Object

            student = {
                name : "Kareem",
                age : 19 ,
                location : "cairo" ,
                info : function(){
                    return `Name = ${this.name} , Age = ${this.age} , Location = ${this.location} `;
                    
                }
            }
            console.log(student.info());
        
        // d- can send it as a parameter to another function -> Call Back Function

            cars = ["BMW" , "porsche" , "Toyota" , "mercedes"]
            function print(x) {
                console.log(x);
                }
            cars.forEach(print);

    //#endregion

//#endregion
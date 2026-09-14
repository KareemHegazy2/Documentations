// BOM -> Browser Object Model
// 💡 باختصار:
// الـ DOM يسمح للجافاسكريبت بالتحكم في محتوى الصفحة (تغيير لون نص، إضافة زر).
// الـ BOM يسمح للجافاسكريبت بالتحدث مع المتصفح نفسه (معرفة أبعاد الشاشة، الرجوع للصفحة السابقة، قراءة الرابط في شريط العناوين، فحص وجود إنترنت، إلخ).

// في الـ BOM، كل شيء يقع تحت كائن رئيسي اسمه window.
// كائن window هو بمثابة "المتصفح نفسه" أو النافذة المفتوحة أمامك، وهو كائن عام (Global Object)، مما يعني أنه يمكنك كتابة أوامره مباشرة دون حتى كتابة كلمة window..

// ==============================================================================

console.log(window); // هيظهرلك كل الـ Properties and methods 

console.log(window.innerWidth); // هيظهرلك العرض الداخلي بتاعك (ده اللي بيظهر فيه المحتوى الخاص بالويب)
                                // يقيس فقط مساحة الصفحة البيضاء الداخلية التي ينزل فيها كود الـ HTML الخاص بموقعك.

console.log(window.outerWidth); // يقيس المسافة من أقصى الحافة اليسرى للبرنامج إلى أقصى الحافة اليمنى.

console.log(window.screen.availWidth); // بيظهر العرض المتاح للشاشه بتااعتك
// ده تستخدمه عشان تعمل الـ Media Query بناءا على حجم االشاشه

console.log(window.location); // هتلاقيه object جواه كذا حاجه زي الـ port , host , href , path , origin , prtocol 
// اهم حاجه و هنستخدمها الـ replace , search

// عندنا الكود ده 
// console.log(location.assign("https://youtube.com")); هينقل المستخدم لصفحة اليوتيوب 
// بس اكيد مش بيستخدم كده عشان كده ممكن نعمله جوا زرار

function youtube(){
    window.location.href = "https://youtube.com" ;
    // الكود ده هو نفس الكود ده :
    // location.assign("https://youtube.com")
    // الاتنين بيحفظو الـ History وتقدر تعمل Go back
    // عكس الـ replace متقدرش تعمل Go back
}

console.log(history); // بتبين عدد صفحات اللي في الـ history

function back(){
    history.back();
    // Same code : history.go(-1)
    // هترجعه للصفحه اللي قبلها
}

function forward(){
    history.forward();
    // Same Code : history.go(1)
// هتوديه للصفحه اللي كان فيها و رجع
}


// Most Important in location is : location.search ==> For Query String (To Take any Value from URL)
// This URL ==> http://127.0.0.1:5500/page%20for%20BOM.html?id=0110&name=Kareem
// this Query String ==> ?id=0110&name=Kareem
console.log(location.search); // ==> ?id=0110&name=Kareem

console.log(location.search.slice(1)); // start from index 1 to end ==> id=0110&name=Kareem

console.log(location.search.slice(1).split("&")); // ==> ['id=0110', 'name=Kareem']

console.log(location.search.slice(1).split("&")[0]); // ==> id=0110

console.log(location.search.slice(1).split("&")[0].split("=")); // ==> ['id', '0110']

console.log(location.search.slice(1).split("&")[0].split("=")[1]); // ==> 0110

console.log("==============================================================================");

console.log("Navigator");
// The navigator object provides information about the user's browser and operating system,
// while enabling access to device capabilities like geolocation, camera, and network status.

console.log(window.navigator);
console.log(window.navigator.language); // اللغه اللي مظبط بيها الموقع
console.log(window.navigator.languages); // اللغات اللي متاح اني استخدمها
console.log(navigator.platform); // نوع الـ OS ==> Win32

// open , close , move , scroll , risize , timing functions (Most Important)
//Open
function openWin(){
    win = window.open("win.html" , "" , "width=200 ,height=200 ,top = 5");
                                    // ==> arguments : URL , Target ( _blank (default) , _self ,  _parent , _top ) , windowFeatures
    // خزناها عشان لم نيجي نقفلها نعرف نحدد نقفل انهي صفحه
}
// Close
function closeWin(){
    win.close(); // ==> هيقفل الصفحه اللي متخزنه في win اللي عاملها في الداله اللي فوقيها بالظبط
}

// resize
function reSizeOne(){
    win.resizeTo(40,40); // Resize Only One Time , Arguments : width , height
    win.focus(); // ==> عشان لما تدوس على الزرار تفضل فوق الصفحه و مترجعش 
}

function reSizeMore(){
    win.resizeBy(40,40); // Resize any number of Time , Arguments : width , height
    win.focus(); // ==> عشان لما تدوس على الزرار تفضل فوق الصفحه و مترجعش 
}
// move
function move(){
    win.moveTo(60,50); // move to 60 on x axis and 50 on y axis , Arguments : X , Y Axis
    win.moveBy(20,20); // move by 20 on x axis and 20 on y axis , Arguments : X , Y Axis
    win.focus(); // ==> عشان لما تدوس على الزرار تفضل فوق الصفحه و مترجعش 
}
// scroll
function scrollWin(){
    win.scrollTo(0,50); // Arguments : X , Y Axis
    win.scrollBy(0,50); // Arguments : X , Y Axis
    win.focus(); // ==> عشان لما تدوس على الزرار تفضل فوق الصفحه و مترجعش 
}
// Timing Functions

function forTime(){
    console.log("Done");
    
}

timeOut = setTimeout( forTime, 5000); // Only one (الداله هتتنفذ مره واحده بس بعد خمس ثواني)
            // Arguments : Timer Hundelr , Time Out By Milli sec (الداله اللي هتتنفذ , الوقت اللي هتتنفذ بعديه بالمللي ثانيه) 
            // خزنتها عشان ابقى اوقفها (لو الـ function is recursion)  
            
function stopOut(){
    clearTimeout(timeOut);
}
setTimeout(stopOut , 5000)

interval = setInterval(forTime , 3000); // Every Specific Time (االداله هتتنفذ كل تلت ثواني)
            // Arguments : Timer Hundelr , Time Out By Milli sec (الداله اللي هتتنفذ , الوقت اللي هتتنفذ بعديه بالمللي ثانيه)
            // خزنتها عشان هوقفها زي ما هتشوف تحت
function stop(){
clearInterval(interval);
}

setTimeout(stop,9000); // كده هتوقف بعد ما تتنفذ ثلاث مرات عشان (9 / 3 = 3 ) 
                       // واحنا كنا عاملين واحده فوق يبقى الاجمالي 4
console.log("==============================================================================");
// sentax of setTimeout and sitInterval
 /*setTimeout(() => {
    // the block of code
}, timeout);
*/

 /*setInterval(() => {
    // the block of code
}, timeout);
*/




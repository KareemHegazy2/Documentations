//#region 

//#region Intro
// DOM ==> document object model ==> مش من اللغه ده من API المتصفح
// « الـ DOM هو تحويل المتصفح لتاجات الـ HTML
// إلى كائنات حية في الذاكرة، عشان تقدر الجافاسكريبت تتحكم في كل عنصر وتعدل عليه لحظياً.»


/*
                    [Window]
                  /   |    \
       [Navigetor]    |    [var sum]
                      |
                  [ Document ]
                       |      \
                       |      [DocType]
                       |
                    [ <html> ]
                   /          \
            [ <head> ]      [ <body> ]
                             /   |     \
                            /    |      \
                   [ <h1> ]  [comment]    [ <button> ] (Comment only  Node But h1 Tag and Node)

      Evrey Tag is Node

*/

// مثلا عايز اوصل للـ h1 ==> window.document.html.body.h1
// كل حاجه في الشجره ليها id و كل حاجه عباره عن Node ولكن مش كل حاجه عباره عن Element
// الـ DOM ميقدرش يخش و يغير في الـ Style عشان مش متخزن في الذاكره 
// بيعرف الـ styles اللي بتكون inline فقطط

//#endregion

// Node List / HTML COllection => Array like , itrable , index
// HTML Collection don't work with Foreach or map (Must convert it into Array)
// Node List work with Foreach 

// بتجيب الـ Node List بـ ChildNodes

console.log(document.childNodes); // ==> NodeList(2) [<!DOCTYPE html>, html] can inside by []

// document.children return the tags in HTML page (HTML Collection)
console.log(document.children[0]);

// You can find the head or body By:
console.log(document.head);
console.log(document.body);

// and all images or links or forms by:
console.log(document.images);
console.log(document.links);
console.log(document.links[0].href);
console.log(document.forms);

// ==============================================================================

// ==============================================================================
// Topic: DOM Selector
// ==============================================================================
// #region Code and Exampels

// select By Tag Name:
console.log(document.getElementsByTagName("p"));
// تقدر تعرف الكلام اللي جوا كل عنصر من خلال اللوب
para = document.getElementsByTagName("p")
for (let i = 0; i < para.length; i++) {
    console.log(`para no${i+1} : ${para[i].innerText}`);

  
}

// select By Class Name:
console.log(document.getElementsByClassName("section"));

// Select By Id:
console.log(document.getElementById("me"));

// Select By Attribute Name:
console.log(document.getElementsByName("location")[0]);

// Select By CSS Selector:
console.log(document.querySelector("body nav div h1"));

console.log(document.querySelector("a")); // ==> first one href element

console.log(document.querySelectorAll("a")); // ==> All href element

//#endregion
// ==============================================================================

// ==============================================================================
// Topic: Get & Set Elements Content and Attributes
// ==============================================================================
// #region Code and Exampels

document.images[0].src="logo.png" // ==> change the photo by src attribue (Overwrrite)

document.images[0].title="i am logo" // ==> add attribute

const link = document.querySelector("a"); // ==> assign first <a> to link

console.log(link.innerHTML); // ==> get HTML inside the link

console.log(link.textContent); // ==> get content inside the Link
// OR
console.log(link.innerText); // ==> get content inside the Link

link.innerHTML = "Iam <strong> <i>home</i> </strong> " // ==> set HTML inside the link

console.log(link.attributes); // ==> get Attributes (attribute list)

console.log(link.hasAttributes); // ==> get Attributes ? (true or false)


console.log(link.getAttribute("href")); // get the value of attribue 

console.log(link.hasAttribute("href","#home")); // ==> Check if the element has an attribute called href with the value #home
                                                // ==> ( true / false )


console.log(link.setAttribute("href","https://google")); // set(add or OverWrite) the value of attribue 

// To remove attribute:
console.log(link.removeAttribute("href"));


const skills = document.querySelector("section[id=skills]")
console.log(skills.classList);
console.log(skills.classList.replace("section" , "name"));
console.log(skills.style.background="red");

//#endregion
// ==============================================================================

// ==============================================================================
// Topic: [Create Elements]
  // - createElement
  // - createComment
  // - createTextNode
  // - createAttribute
  // - appendChild
// ==============================================================================
// #region Code and Exampels

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);

//#endregion
// ==============================================================================

// ==============================================================================
// Topic: Event
// #region Description
// Concept: حدث المستخدم عمله (حرك الماوس مثلا ) اقدر ارد عليه بحدث او فعل تاني
// #endregion
// ==============================================================================
// #region Code and Exampels
const btn = document.querySelector("button");

const nav = document.querySelector("nav");

const form     = document.querySelector('#myForm');
const username = document.querySelector('#username');
const email    = document.querySelector('#email');

/* 1 - Mouse Events :
   click , dbclick , mousedown , mouseup , mousemove , mouseover , 
   mouseenter , mouseout , mouseleave , contextmenu , wheel

   2 - Keyboard Event :
   keydown , keyup , keypress
  
   3- Form Events : ( input, change ) ==> Live Event
     , focus, blur, submit
   4 - Window/DOM Events  → load, DOMContentLoaded, resize, scroll
*/

//#region 1 - Mouse Events :

    // 1 - click ==> لما تضغط وترفع إصبعك (ضغطة كاملة)
    btn.addEventListener('click', function() { 
      console.log('ضغطة كاملة!');

    });

    // 2 - dbclick ==>  ضغطتين متتاليتين بسرعة على نفس العنصر
    btn.addEventListener('dblclick', function() { console.log('ضغطتين!'); });

    // 3 - mousedown ==> لحظة ما الماوس لمس الزرار (قبل ما ترفعه)
    btn.addEventListener('mousedown', () => console.log('قبل ما الضغطه ما تخلص'));

    // 4 - mouseup ==> لحظة ما رفعت إصبعك (بعد الضغط)
    btn.addEventListener('mouseup', () => console.log('الإصبع اترفع'));
    // Note : click = mousedown + mouseup

    // 5 - mousemove ==> بيتشغل باستمرار كل ما الماوس يتحرك فوق العنصر

    btn.addEventListener('mousemove', (e) => {
      console.log(`from mousemove event ${e.clientX, e.clientY}`); 
    });

    // 6 - mouseover ==> لما الماوس يدخل على العنصر وبيتشغل على الـ children كمان
    nav.addEventListener('mouseover', () => console.log('دخلت (أنا أو أي حاجة جوايا)'));

    // 7 - mouseenter ==> زي mouseover بالظبط، بس مش بيتشغل على الـ children
    nav.addEventListener('mouseenter', () => console.log('دخلت على الـ div بس'));

    // 8 - mouseout ==> لما الماوس يخرج من العنصر — وبيتشغل لو انتقلت لـ child جواه كمان
    nav.addEventListener('mouseout', () => console.log('خرجت (حتى لو لـ child جوايا)'));

    // 9 - mouseleave ==> زي mouseout بس مش بيتشغل لو انتقلت لـ child جوا العنصر
    nav.addEventListener('mouseleave', () => console.log('خرجت من الـ div فعلاً'));

    // 10 - contextmenu ==> لما تضغط كليك يمين (اللي بيطلع القائمة)
    nav.addEventListener('contextmenu', (e) => {
      e.preventDefault(); // بيمنع القائمة الافتراضية
      console.log('كليك يمين!');
    });

    // 11 - wheel ==> لما تلف البكره
    nav.addEventListener('wheel', () => console.log("لفيت البكره"));

//#endregion

// ==============================================================================

//#region 2 - Keyboard Events

  const input = document.querySelector("input");

  // 1 - keydown ==> لحظة ما ضغطت على الزرار (قبل ما يطلع الحرف) مش بيشتغل مع الـ Copy&paste
  input.addEventListener('keydown', (e) => {
    console.log('ضغطت على :', e.key); // بيتشغل أول ما تضغط
  });

  // 2 - keyup ==> لحظة ما رفعت إصبعك عن الزرار
  input.addEventListener('keyup', (e) => {
    console.log('رفعت:', e.key); // بيتشغل بعد ما ترفع إصبعك
  });

  // 3 - keypress ==> لما تضغط زرار مش شغاله مع الـ shift , Ctrl
  input.addEventListener('keypress', (e) => {
    console.log('حرف:', e.key);
  });


//#endregion

// ==============================================================================

//#region 3 - Live & Form Events

// First Live Events :
// 1 - input ==> بيتشغل وأنت بتكتب
  input.addEventListener('input', (e) => {
    console.log('القيمة دلوقتي:', e.target.value);
  });// ==> كتبت "مرحبا" → بيتشغل 5 مرات (م، مر، مرح، مرحب، مرحبا)

  // 2 - change ==> بيتشغل بعد ما تخلص وتمشي من العنصر، ولو القيمة اتغيرت
  input.addEventListener('change', (e) => {
    console.log('input :', e.target.value); // لما تغير الاختيار
  });

// second Form Events :
// 1 - focus
input.addEventListener("focus",() => {
  console.log("Hi From Focus");
  
})

// 2 - blur
input.addEventListener("blur",() => {
  console.log("Hi From blur");
  
})
//  3 - بيتشغل لما ترسل الـ form — سواء بضغطة زرار Submit أو بالـ Enter

form.addEventListener('submit', (e) => {
  e.preventDefault(); // امنع الـ reload
  // جيب البيانات
  const nameValue  = username.value.trim();
  const emailValue = email.value.trim();
  // Validation
  if (nameValue === '') {
    console.log('❌ ادخل اسمك!');
    return; // وقف
  }
  if (emailValue === '') {
    console.log('❌ ادخل إيميلك!');
    return;
  }
  // لو كل حاجة تمام
  console.log('✅ تم الإرسال:', { nameValue, emailValue });
});

//#endregion

// ==============================================================================



























//#endregion
// ==============================================================================

// ==============================================================================
// Topic: page , Client , offset
// ==============================================================================
// #region Code and Exampels

const track = document.querySelector("#tracker-box")

// 1 - clientX / clientY
// ==> المسافة من أول الشاشة المرئية (الـ Viewport) مش بتتأثر بالـ Scroll
track.addEventListener('mousemove', (e) => {
  console.log(e.clientX, e.clientY);
  // لو الماوس في منتصف الشاشة → نفس الرقم دايماً
  // حتى لو عملت scroll للأسفل
});

// 2 - pageX / pageY
// ==> المسافة من أول الصفحة كلها , بتتأثر بالـ Scroll
track.addEventListener('mousemove', (e) => {
  console.log(e.pageX, e.pageY);
  // لو عملت scroll للأسفل 500px
  // pageY = clientY + 500
});

// 3 - offsetX / offsetY 
// ==> المسافة من أول العنصر نفسه اللي ضغطت عليه
track.addEventListener('click', (e) => {
  console.log(e.offsetX, e.offsetY);
  // بتحسب من أول الـ box نفسه مش الشاشة
});












// #endregion









//#endregion
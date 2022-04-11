
//FETCH DATA///////////////////////////////////////////
///////////////////////////////////////////////////////////////

const url= 'https://amazon-price1.p.rapidapi.com/search';//n ke


////////////////////////////////////////  $$$$ CONSTANTS  $$$$/////////////////////////////
///////////////////////////////////////////////////////////////////////

//header navbar const
const navbarSection = document.getElementById("navbarSection");

    //BOXES//////////////////////////////

//LAST BOX...............
const middleBox = document.getElementById('middleBox');
const lastBox = document.getElementById('lastBox');
//CLSE BTN
const closeRight = document.getElementById("closeRight");
//open btns
const barsbtnRight = document.getElementById("barsbtnRight");


//---- IMG POPUP SECTION CONST---------
//btns
const searchBtn = document.getElementById("searchBtn");
const closePopUpIMG = document.getElementById("closePopUp");
//boxes
const popUpContainer = document.getElementById("popUpContainer");
const searchBox = document.getElementById("searchBox");
//----FORM POPUP  SECTION CONST -------------------------------------------------
const closeFrom = document.getElementById('closeFrom');
const customerForm = document.getElementById('customerFormBox');
const guraBuy = document.querySelectorAll('.Calculate-And-Pay');
//PAYMENT POPUP  CONST--------------------------------
//btns payment popup
const MTNbtn = document.getElementById("MTNbtn");
const AIRTELbtn =  document.getElementById("AIRTELbtn");
const BANKbtn = document.getElementById("BANKbtn");
//payment cards
const paymentSecretMTN = document.getElementById("paymentSecretMTN");
const paymentSecretAIRTEL = document.getElementById("paymentSecretAIRTEL");
const paymentSecretBANK = document.getElementById("paymentSecretBANK");
// about payment form poopup
const paymentPage = document.getElementById('paymentPage');
const closePayment = document.getElementById('closePayment');
const submitBtn = document.querySelector(".submitDataBox #submitBtn");
const paymentChoice = document.getElementById('paymentChoice');


//when we click on the navbar

navbarSection.addEventListener('click', ()=>{
    popUpContainer.style.display = "none";
});


///  POPUP SECTIONS////////////
searchBtn.addEventListener("click", ()=> {
    if(searchBox.value){
        popUpContainer.style.display = "flex";
        //pluss anoptyher answer that will be got!!
    }
    else if(!searchBox.value){
        
        alert("Null search");
    }
});

closePopUpIMG.addEventListener('click', ()=>{  
    popUpContainer.style.display = "none";
});

//cutomer form//////////

guraBuy.forEach((e)=>{
    e.addEventListener('click', ()=>{
        customerForm.style.display = "flex";
        customerForm.style.transform = 'scale(1)';
    });
});

closeFrom.addEventListener('click', ()=>{
    customerForm.style.display = "none";
    customerForm.style.transform = "scale(0)";
});

///Payment  Methods  popup//////////////////////////////////////////////////
/////////////////////////////////////////////

submitBtn.addEventListener('click', ()=>{
    paymentPage.style.display = "flex";
    customerForm.style.display = "none";
    customerForm.style.transform = "scale(0)";
    popUpContainer.style.display = "none";
    MTNbtn.style.background = "white";
    MTNbtn.style.color= "black";
    AIRTELbtn.style.background = "white";
    AIRTELbtn.style.color = 'black';
    BANKbtn.style.background ="white";
    BANKbtn.style.color = "black";
    paymentChoice.style.visibility = 'hidden';

});

closePayment.addEventListener('click', ()=>{
    paymentPage.style.display = "none";
});

MTNbtn.addEventListener('click', ()=>{
    paymentChoice.style.visibility = 'visible';
    MTNbtn.style.background = "yellow";
    MTNbtn.style.color= "black";
    AIRTELbtn.style.background = "white";
    AIRTELbtn.style.color = 'black';
    BANKbtn.style.background ="white";
    BANKbtn.style.color = "black";
    paymentSecretMTN.style.display ="flex";
    paymentSecretAIRTEL.style.display ="none";
    paymentSecretBANK.style.display ="none"; 
    
});
AIRTELbtn.addEventListener('click', ()=>{
    paymentChoice.style.visibility = 'visible';
    AIRTELbtn.style.background = "red";
    AIRTELbtn.style.color = "white";
    BANKbtn.style.background ="white";
    BANKbtn.style.color = "black";
    MTNbtn.style.background = "white";
    MTNbtn.style.color= "black";
    paymentSecretMTN.style.display = "none";
    paymentSecretAIRTEL.style.display = "flex";
    paymentSecretBANK.style.display = "none"; 
    
});
BANKbtn.addEventListener('click', ()=>{
    paymentChoice.style.visibility = 'visible';
    BANKbtn.style.background = "green";
    BANKbtn.style.color = "black";
    MTNbtn.style.background = "white";
    MTNbtn.style.color= "black";
    AIRTELbtn.style.background = "white";
    AIRTELbtn.style.color = 'black';
    paymentSecretMTN.style.display = "none";
    paymentSecretAIRTEL.style.display = "none";
    paymentSecretBANK.style.display = "flex"; 
    
});


/////////////-- SLIDES --/////////////////////////

// POPUP IMG SLIDES -------- 


var slideIndexCenter = 1;
 SlidePopUp(slideIndexCenter);
 function SlidePopUp() {
     slideIndexCenter++
     const popUpSlideIMG = document.getElementsByClassName("popUpSlideIMG");
   
    var i;
     
     if (slideIndexCenter > popUpSlideIMG.length) {slideIndexCenter = 1}
 
     if (slideIndexCenter < 1) {slideIndexCenter = popUpSlideIMG.length}
     if(slideIndexCenter <= popUpSlideIMG.length){
 
     for (i = 0; i < popUpSlideIMG.length; i++) {
        popUpSlideIMG[i].style.display = "none";
     }
    
    popUpSlideIMG[slideIndexCenter-1].style.display = "block";
 }
     
 }

// SLIDES OF THE FIRST BOX--------AUTOOO----------

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var autoSlides = document.getElementsByClassName("myLeftSlides");
  for (i = 0; i < autoSlides.length; i++) {
    autoSlides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > autoSlides.length) {slideIndex = 1}
  autoSlides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 4000); 

}
// end of first box 

//.........center......TV
/*
Slides(slideIndexCenter);
function Slides() {
    slideIndexCenter++
    const thumbnails = document.getElementsByClassName("thumbnails");
  
   var i;
    
    if (slideIndexCenter > thumbnails.length) {slideIndexCenter = 1}

    if (slideIndexCenter < 1) {slideIndexCenter = thumbnails.length}
    if(slideIndexCenter <= thumbnails.length){

    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].style.display = "none";
    }
  
    thumbnails[slideIndexCenter-1].style.display = "block";
}
    
}
*/


//CLOSE --OPEN --TOGGLE BOXESSSS.$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

//when we close click on tbn at right:
closeRight.addEventListener('click', ()=>{
    lastBox.style.transform = 'scale(0)';
    lastBox.style.position = 'absolute';
    lastBox.style.right = '-1200vw';
    barsbtnRight.style.visibility = "visible";
    middleBox.className = " mx-0 col-md-8 mx-lg-2 mx-xl-3 d-flex mainBox";
});


//dots[i].className = dots[i].className.replace(" active", "");

barsbtnRight.addEventListener("click", ()=>{
    lastBox.style.transform = 'scale(1)';
    lastBox.style.position = 'relative';
    lastBox.style.right = 'auto';
    lastBox.className= "col-lg-2 col-xl-3 d-lg-flex mainBox mx-lg-0 mx-xl-2";
    middleBox.className= " col-xl-5 col-lg-6 mx-0 mx-lg-3  d-flex mainBox";
    barsbtnRight.style.visibility = "hidden";
    
});



 








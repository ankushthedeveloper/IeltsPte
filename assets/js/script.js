'use strict';


const addEventOnElem=function(elem , type,callback){
    if(elem.length>1){
        for(let i=0;i<elem.length;i++){
            elem[i].addEventListener(type,callback);     
           }
    }else{
        elem.addEventListener(type,callback);

    }
}



const navbar=document.querySelector("[data-navbar]");
const navTogglers=document.querySelectorAll("[data-nav-toggler]");
const navLinks=document.querySelectorAll("[data-nav-link]");
const overlay=document.querySelector("[data-overlay]");

const toggleNavbar=function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar=function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");

}

addEventOnElem(navLinks, "click", closeNavbar);


// header active when scroll down to 100px

const header=document.querySelector("[data-header]");


const activeElem=function(){
    if(window.scrollY>120){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
}

addEventOnElem(window,"scroll",activeElem);



function sendMail(){
    let params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_yjski0b","template_2nniwhe",params).then(alert("Hey..Email Sent"))
}












        const name= document.getElementById("name");
        const email= document.getElementById("email");
        const message= document.getElementById("message");






        const submit=document.getElementById("submit");

//    if(name.value=="" || email.value=="" ){
//         submit.classList.add('noval');
//    }









// const form=document.querySelector('form');
// const nameInp=document.getElementById('name');
// const emailInp=document.getElementById('email');
// const messageInp=document.getElementById('message');

// const serviceId='service_yjski0b';
// const templateId='template_2nniwhe';
// const publickey='Q7rzWi5eoeQvj_VCB';

// emailjs.init(publickey);

// form.addEventListener('submit',(e)=>{
// e.preventDefault();
// const inputData={
//     name: nameInp.value,
//     email: emailInp.value,
//       message: messageInp.value,
// }

// emailjs.send(serviceId,templateId,inputData).then(
//     ()=>{
//         nameInp='';
//        emailInp='';
//         messageInp='';
//         alert("Email sent successfully")
//     },
//     (error)=>{
//         alert("Failed to send email");
//         console.error('Failed to send email', error);
//     }
// );
// });
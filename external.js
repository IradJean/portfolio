
// variable declaration
const name = document.querySelector('#name');
const email = document.getElementById('email');
const message = document.getElementById('textarea');
const form = document.querySelector('form');
const spanMessage = document.querySelectorAll('#spanmssg');

// Regular expressions
const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const mssgCheck =   /^[^a-zA-Z0-9]+$/;

//Events
name.addEventListener('focusout', checkName);
email.addEventListener('focusout', checkEmail);
message.addEventListener('focusout', checkName);
form.addEventListener('submit', dontSubmit);



// functions

function checkName(){
    const span = document.createElement('span');
    if(name.value ==="" || mssgCheck.test((name.value).trim())){
        spanMessage[0].classList.add('span-visible');
        // I will try to check if the string contains only the blank space/
    }
    else{
        name.addEventListener('input', ()=>{
            spanMessage[0].classList.remove('span-visible');
        })
        
    }
}
function checkEmail(){
    if(!emailCheck.test(email.value)){
        spanMessage[1].classList.add('span-visible');
    }
    else{
        email.addEventListener('input', ()=>{
        spanMessage[1].classList.remove('span-visible');

        })
    }
}
function dontSubmit(e){
    checkName();
    checkEmail();
e.preventDefault();
form.reset();
}
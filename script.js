let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


function validateLogin() {
            let givenMail=document.getElementById("mail").value;
            let givenPass=document.getElementById("pass").value;
            let mail=localStorage.getItem('Email');
            let pass=localStorage.getItem('Pass');
            if(givenMail==mail&&givenPass==pass){
                window.open("./index.html");
            }
            else{
                alert("Incorrect credentials.Please try again");
                location.reload();
            }
        }
  
function registerUser(){
            let pass=document.getElementById("mpass").value;
            let cnfpass=document.getElementById("confirmpass").value;
            if(pass==cnfpass){
                let name=document.getElementById("name").value;
                let email=document.getElementById("email").value;
                if(name==''||email==''){
                  location.reload();
                  return;
                }
                localStorage.setItem('Name',name);
                localStorage.setItem('Email',email);
                localStorage.setItem('Pass',pass);
                alert("You have registered successfully.....Click OK to login.");
                window.open("./login.html");
            }
            else{
                alert("Password and Confirm Password do not match.");
                location.reload();
            }
        }

function booked(){
  let name=document.getElementById("customer").value;
  alert("Dear "+name+". Your table is booked successfully!!!!");
}

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

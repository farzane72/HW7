let firstName = document.getElementById("first-name");
let middleName = document.getElementById("middle-name");
let lastName = document.getElementById("last-name");
let homePhone = document.getElementById("phone-home");
let mobilePhone = document.getElementById("phone-m");
let address = document.getElementById("address");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("re-password");
let submit = document.getElementById("submit");
let select = document.getElementById("select");
let inputs = document.getElementsByTagName("input");
//---------------------------------------------------------
//let radioButtons = document.getElementsByName("radio");
let radio1 = document.getElementById("gender-male");
let radio2 = document.getElementById("gender-female");
let radio3 = document.getElementById("other");
let users = [];
//let radioBtn="";
// submit.addEventListener("click", addUserInfo);
form.addEventListener("submit", addUserInfo);

//----------------------------functions-------------------------------------------------------
//add information of user to array or form----------------------------------------------------
function addUserInfo(e) {
  e.preventDefault();
  
  //--------------------another solution for radio buttons-----------------------------------
  //     if ( radio.checked){
  //          radioBtn=radio.value;
  //     }
  // }

  let infoUser = {
    firstname: checkFirstName(),
    middlename: checkMiddleName(),
    lastname: checkLastName(),
    // radioButton:radioBtn,
    radioButton: radio1.checked
      ? radio1.value
      : radio2.checked
      ? radio2.value
      : radio3.value,
    select: select.value,
    homePhone:checkPhone(homePhone.value.trim()),
    mobilePhone:checkPhone(mobilePhone.value.trim()),
    address: address.value.trim(),
    email:  checkEmail() ,
    password: checkPassword(),
    repeatPassword: checkRepeatitivePassword(),
  };
  users.push(infoUser);
  console.log("users:");
  console.log(users);
  for(let input of inputs){
    input.value="";
  }

 // alert("your information saved successfully");
}
//function for  validation of first name---------------------------------------------------------------------------
function checkFirstName() {
  // if (firstName.value.trim() === "" || firstName.value.trim() === null){
  //   alert("your first name is empty");
  // }
  //else
   return firstName.value.trim();
}
//function for  validation of middle name---------------------------------------------------------------------------
function checkMiddleName() {
 if(middleName.value.length < 3 || middleName.value.length >8){
   alert("your middle name must be between 3 and 8 character");
  }
  else if(!(/[A-Z]/.test(middleName.value.trim())) || !(/[a-z]/.test(middleName.value.trim()))){
   // else if(middleName.value.trim() === middleName.value.trim().toLowerCase()){
    alert("your middle name must have least one uppercase character and least Lower  character ");
   }
 else return middleName.value.trim();
}
//function for  validation of last name---------------------------------------------------------------------------
function checkLastName() {
 
//  if (lastName.value.trim() === "" || lastName.value.trim() === null){
//    alert("your last name is empty");
//  }
//  else 
 return lastName.value.trim();
}
//function for  validation of home number and mobile number---------------------------------------------------------------------------
function checkPhone(phoneNumber) {
  let phone="";
  //let home="";
  phoneNumber===mobilePhone.value.trim()?phone="mobile":phone="home";
  console.log(phoneNumber[0]);
  // if (phoneNumber === "" ||phoneNumber === null){
  //   alert(`your ${phone} number is empty`);
  // }
    if(phoneNumber.length !== 11 ){
    alert(`Enter your ${phone} number correctly`);
   }
   else if(!(/^[0-9]+$/.test(phoneNumber )) ){
    // else if(middleName.value.trim() === middleName.value.trim().toLowerCase()){
     alert(`Enter your ${phone} number correctly `);
    }
    else if(phoneNumber[0] != 0){
      // else if(middleName.value.trim() === middleName.value.trim().toLowerCase()){
       alert(` your ${phone} number must start with 0 `);
      }
  else return phoneNumber;
 }
 //function for  validation of email---------------------------------------------------------------------------
 function checkEmail() {
  let emailID = email.value.trim();
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  //-------------------------------------------------------------
  //An email address must contain at least a ‘@’ sign and a dot (.). Also, the ‘@’ must not be the first character of the email address, and the last dot must at least be one character after the ‘@’ sign.
  //---------------------------------------------------------------
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
     alert("Please enter correct email ID")
  }
  //---------------another solution-----------------------------------
  // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // if (! re.test(emailID)){
  //   alert(`Please enter correct email ID`);
  // }

  //-----------------------------------------------------------
  // else if (emailID === "" ||emailID === null){
  //   alert(`your email is empty`);
  // }
  
  else return emailID;
 }
 //function for  validation of password---------------------------------------------------------------------------
 function checkPassword() {
 let Password=password.value.trim();
  // if (Password === "" ||Password === null){
  //   alert(`your password  is empty`);
  // }
  //  else
    if(Password.length !== 6 ){
    alert(` your password must be 6 charactor`);
   }
   else if(!(/[0-9]/.test(Password )) || !(/[!@#$%^&*]/.test(Password )) ){
    // else if(middleName.value.trim() === middleName.value.trim().toLowerCase()){
     alert(` your password must contain number and special charactor and letter `);
    }
  else return Password;
 }
 //function for  validation of Repeatitive password------------------------------------------------------------------------------------------------------------------------------------------------------
 function checkRepeatitivePassword() {
  let Password=password.value.trim();
  let RepeatPassword =repeatPassword.value.trim();
  //  if (RepeatPassword === "" ||RepeatPassword === null){
  //    alert(`your repeat password  is empty`);
  //  }
  //   else
     if(RepeatPassword !== Password){
     alert(`Enter duplicate password corectly `);
    }
   else return RepeatPassword;
  }
  
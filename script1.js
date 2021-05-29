const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const usernameval = username.value.trim(); //for success message
// add event

username.addEventListener('change',validate_username)
email.addEventListener('change',validate_email)
phone.addEventListener('change',validate_phone)
password.addEventListener('change',validate_password)
cpassword.addEventListener('change',validate_cpassword) 

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const usernameval = username.value.trim();
    succesMsg(usernameval)
})
//
function validate_username(){
    const usernameval = username.value.trim();
    if( usernameval === ""){
        setErrorMsg(username,'username cannot be blank');
    }else if(usernameval.length <= 2 ){
        setErrorMsg(username,'username min 3 car required');
    }else{
        setSuccessMsg(username);
    }

}
function validate_email(){
    const emailval = email.value.trim();
    if( emailval === ""){
        setErrorMsg(email,'email cannot be blank');
    }else if(!isemail(emailval)){
        setErrorMsg(email,'not a valid email');
    }else{
        setSuccessMsg(email);
    }

}



//more email validate
const isemail = (emailval) =>{

    var atSymbol = emailval.indexOf('@');
    if (atSymbol < 1) return false;
    var dot = emailval.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailval.length-1) return false;
    return true;
   
}


function validate_phone(){
    const phoneval = phone.value.trim();
    if( phoneval === ""){
        setErrorMsg(phone,'phone cannot be blank');
    }else if(phoneval.length != 10 ){
        setErrorMsg(phone,'phone number length must be 10');
    }else{
        setSuccessMsg(phone);
    }

}

function validate_password(){
    const passwordval = password.value.trim();
    if( passwordval === ""){
        setErrorMsg(password,'password cannot be blank');
    }else if(passwordval.length < 5 ){
        setErrorMsg(password,'password length must be greater than 5');
    }else{
        setSuccessMsg(password);
    }

}

function validate_cpassword(){
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    if( cpasswordval === ""){
        setErrorMsg(cpassword,'cpassword cannot be blank');
    }else if(cpasswordval != passwordval){
        setErrorMsg(cpassword,'both password should be same');
    }else{
        setSuccessMsg(cpassword);
    }
}

// for final data validation
const succesMsg = (usernameval)=>{
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length-1;
    console.log(formCon)
    for(var i=0;i<formCon.length;i++){
        if(formCon[i].className === 'form-control success'){
            console.log(formCon[i].className)
            var sRate = 0+i;
            console.log(sRate);
            sendData(usernameval,sRate,count); 
            
        }else{
            return false;
        }
    }

}

// senddata
const sendData = (usernameval,sRate,count) =>{
    if (sRate === count){
        // alert("registration successfull")
        swal("registration successfull ,"+"welcome "+ usernameval );
        // location.href = `demo.html?username=${username}`

    }
}

function setErrorMsg(input,errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = errormsgs;
     
}

function setSuccessMsg(input){

    const formControl = input.parentElement;
    formControl.className="form-control success"
    
}
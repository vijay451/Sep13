var form =document.getElementById("form");
var userName =document.getElementById("userName");
var email=document.getElementById("Email");
var currentPassword= document.getElementById("currentPassword");
var newPassword= document.getElementById("newPassword");

function showErrorMessage(input,message){
    const formControl=input.parentElement;
    formControl.className="form-control error";
    const errorElem=formControl.querySelector("small");
    errorElem.innerText=message;
}

function showSuccessMessage(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
}


function checkRequiredField(inputs){
    for(var i=0;i<inputs.length;i++){
        var input=inputs[i];
        if(input.value===""){
            const message=input.Id+" is required";
            showErrorMessage(input,message);
        }
        else{
            showSuccessMessage(input);
        }

    }
}



form.addEventListener('Submit',function(event){
    event.preventDefault();
    checkRequiredField(userName,email,currentPassword,newPassword);

})
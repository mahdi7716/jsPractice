let userNameInput=document.querySelector('.username')
let passwordInput= document.querySelector('.password')

let userNameMessage = document.querySelector('.username-validation')
let passwordMessage = document.querySelector('.password-validation')

function usernameValidation (){
   

    if (userNameInput.value.length <12  ){
       userNameMessage.style.color='red'
       userNameMessage.innerHTML="Must 12 character(min)"
       userNameMessage.style.display='block'
    }else{
        userNameMessage.style.color='green'
        userNameMessage.innerHTML="correct username"
    }

}
function passwordValidation (){
    if (passwordInput.value.length <8  ){
        passwordMessage.style.color='red'
        passwordMessage.innerHTML="Must 8 character(min)"
        passwordMessage.style.display='block'
     }else{
         passwordMessage.style.color='green'
         passwordMessage.innerHTML="correct password"
     }

   

    }
 
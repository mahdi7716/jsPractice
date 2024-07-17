



    let userNameInput=document.querySelector('.username')
let passwordInput= document.querySelector('.password')
let modal=document.querySelector('.modal')

function dataValidation (){
    let userNameValue = userNameInput.value
    let passwordValue = passwordInput.value

    if (userNameValue.length <12 || passwordValue.length <8 ){
        // alert('Error')
        
    }else{
        modal.style.background='green'
        modal.innerHTML="با موفقیت وارد شدید "
        modal.style.display='inline'
    }
    setTimeout (function() {
        modal.style.display='none'
    },3000
)
}
let BlueValue,GreenValue, redValue 

setInterval(function(){
    BlueValue=Math.floor(Math.random()*255)
    redValue=Math.floor(Math.random()*255)
    GreenValue=Math.floor(Math.random()*255)
    document.body.style.backgroundColor='rgb('+BlueValue+' , '+GreenValue+' , '+ redValue +')'
},2000)
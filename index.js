var orange=document.getElementById("login")
var pass=document.querySelector('#password')
var expand = document.querySelector('hr')


orange.addEventListener('mouseenter',function(){
    console.log("entered")
    expand.style.width="80%"
})
orange.addEventListener('mouseleave',function(){
    console.log("left")
    expand.style.width="50%"
})



function clickedbtn(){
    let n=pass.value
    n=n.length

    if(n<4){
        alert("the password cannot be less than 4 letter")
    }
    else if(n>8){
        alert("the password cannot be more than 8 letter")
    }

}

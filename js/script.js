var header=document.getElementById('header')

window.addEventListener('scroll',()=>{
    var scroll=window.scrollY
    if(scroll>10){
        header.style.backgroundColor='black'
    }else{
        header.style.backgroundColor='transparant'
    }
})
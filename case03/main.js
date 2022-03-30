
window.onload=function(){
    let input=document.getElementById('value')
let show = document.getElementById('show')
console.log(input)
input.onkeyup=function(){
    show.style.display="block"
}
}
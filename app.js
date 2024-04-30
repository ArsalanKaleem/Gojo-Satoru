const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')
var background = document.getElementById('#background')

menu.addEventListener('click' , function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
})
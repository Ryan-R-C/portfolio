/*===============
Responsive navbar
===============*/
const navBar = document.querySelector("nav#nav")
const menuIcon = document.querySelector("img#menu-icon")
const menuList = document.querySelector("ul#menu-list")
menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active-menu')
})
/*=========
Dark-Theme
==========*/
const html = document.querySelector("html")
const checkbox = document.querySelector("#switch")
checkbox.addEventListener('change', function(){
        html.classList.toggle('dark-theme')
})
/*
Fade up animation
*/
const introContent = document.querySelectorAll(".intro-disabled")
console.log(introContent)
window.addEventListener('scroll', ()=>{
    
    introContent.forEach(introContent => {
            let introPositon = introContent.getBoundingClientRect().top
            let screenPosition = window.innerHeight/1.2

            if(introPositon < screenPosition){
                introContent.classList.add('intro-active')
            }
        });
    })

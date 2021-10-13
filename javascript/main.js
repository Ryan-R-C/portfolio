/*===============
Language Switcher
===============*/
/*Elements that change the language*/
const LanguageElement = document.querySelector("#language")
const link = document.querySelectorAll("a.lang")
/*All elements that will be "translated" to other language
OBS.: They must have the same id's in data*/
const selectedLang = document.querySelector("#select-lang")//Get this element to change its content to the selected Lang
const selectFlag = document.querySelector("#select-lang-flag")

const portfolio = document.querySelector("#portfolio")
const resume = document.querySelector   ("#resume")
const contact = document.querySelector  ("#contact")
/*===============
Responsive navbar
===============*/
const responsiveNavBar = () => {
    const navBar = document.querySelector("nav#nav")
    const menuBtn = document.querySelector("#menu-btn")
    const menuList = document.querySelector("ul#menu-list")

    menuList.style.maxHeight = "0px";
    menuBtn.addEventListener('click', () => {
            if(menuList.style.maxHeight == "0px"){
                menuList.style.maxHeight = "142px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
        }
    )
}
/*=========
Dark-Theme
==========*/
const darkTheme = () => {
    const html = document.querySelector("html")
    const checkbox = document.querySelector("#switch")
    checkbox.addEventListener('change', function(){
            html.classList.toggle('dark-theme')
    })
}
/*
Fade up animation
*/

const FadeUp = () => {
    const introContent = document.querySelectorAll(".intro-disabled")
    window.addEventListener('scroll', ()=>{
        
        introContent.forEach(introContent => {
                let introPositon = introContent.getBoundingClientRect().top
                let screenPosition = window.innerHeight/1.2

                if(introPositon < screenPosition){
                    introContent.classList.add('intro-active')
                }
            });
        })
}
const app = () => {
    responsiveNavBar()
    darkTheme()
    FadeUp()
}

app()
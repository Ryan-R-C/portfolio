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
responsiveNavBar()
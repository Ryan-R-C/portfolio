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
darkTheme()
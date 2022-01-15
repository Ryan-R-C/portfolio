/*=========
Dark-Theme
==========*/
const darkTheme = () => {
    const html = document.querySelector("html")

    
    const isDarkMode = localStorage.getItem('isDarkMode');
    if(isDarkMode == "true"){
        html.classList.add('dark-theme')
    }
    
    const checkbox = document.querySelector("#switch")
    checkbox.addEventListener('change', function(){
        html.classList.toggle('dark-theme')
        console.log(html.classList.contains("dark-theme"))
        localStorage.setItem('isDarkMode', html.classList.contains("dark-theme"));
    })
}
darkTheme()
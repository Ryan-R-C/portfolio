/*===============
FADE UP ANIMATION
===============*/
const fadeUp = () => {
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
fadeUp()
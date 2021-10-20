const filter = () => {
    
    const filter = document.querySelector(".filter")
    
    const projs = document.querySelectorAll(".filter__proj")
    
    const siteProj  = document.querySelectorAll(".proj--sites")
    const jsProj    = document.querySelectorAll(".proj--js")
    const reactProj = document.querySelectorAll(".proj--react")
    
    
    
    projs.forEach(element => {
        element.addEventListener('click', ()=>{
            const filterInScrean = element.getAttribute('filter')
            
            siteProj.forEach(disappear => {

                if ( String(siteProj[0].className).includes(filterInScrean) ){
                    disappear.style.display  = 'flex'
                } 
                else{
                    disappear.style.display  = 'none'
                }
            })
            jsProj.forEach(disappear => {

                if ( String(jsProj[0].className).includes(filterInScrean) ){
                    disappear.style.display  = 'flex'
                } 
                else{
                    disappear.style.display  = 'none'
                }
            })
            reactProj.forEach(disappear => {

                if ( String(reactProj[0].className).includes(filterInScrean) ){
                    disappear.style.display  = 'flex'
                } 
                else{
                    disappear.style.display  = 'none'
                }
            })
            

        })
    })
}
filter()
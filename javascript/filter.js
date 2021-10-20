const filter = () => {    
    const projsFilters = document.querySelectorAll(".filter__proj")

    const elementsToBeFiltered = document.querySelectorAll(".grid__section")

    const siteProj  = document.querySelectorAll(".proj--sites")
    const jsProj    = document.querySelectorAll(".proj--js")
    const reactProj = document.querySelectorAll(".proj--react")
    
    
    
    projsFilters.forEach(element => {
        element.addEventListener('click', ()=>{
            const filterInScrean = element.getAttribute('filter')
            
            filterActiveStyle = 'filter__proj--active'

            projsFilters.forEach(projFilter => {
                projFilter.classList.remove(filterActiveStyle)
            })

            element.classList.add(filterActiveStyle)
            
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
            
            if(filterInScrean == 'proj--all'){
                elementsToBeFiltered.forEach(element => {
                    element.style.display = 'flex'
                })
            }


        })
    })
}
filter()
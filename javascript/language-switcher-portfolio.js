
/*---------------
Portfolio content
---------------*/
const title = document.querySelector("#title")
const filterAll = document.querySelector("#filterAll")
const PWTitle = document.querySelector("#PWTitle")
const PWContent = document.querySelector("#PWContent")
const PPTitle = document.querySelector("#PPTitle")
const PPContent = document.querySelector("#PPContent")
const readMore = document.querySelectorAll(".readMore")
const here = document.querySelectorAll(".here")
const BTSTile = document.querySelector("#BTSTile")
const BTSContent = document.querySelector("#BTSContent")
const firstClientTitle = document.querySelector("#firstClientTitle")
const firstClientContent = document.querySelector("#firstClientContent")
const pokedevContent = document.querySelector("#pokedevContent")
const reactNoteTitle = document.querySelector("#reactNoteTitle")
const reactNoteContent = document.querySelector("#reactNoteContent")
const freelaContent = document.querySelector("#freelaContent")
const infinityScrollContent = document.querySelector("#infinityScrollContent")
const constalContent = document.querySelector("#constalContent")


link.forEach(element => {
    element.addEventListener('click', () => {
        
        const attributeLang = element.getAttribute("Language")
        const attributeId = element.getAttribute("id")
        
        const HTMLlang = element.getAttribute("HTMLlang")//Get the HTML lang to change
        localStorage.setItem("selectedLang", attributeId)

        changeHtmlLang(HTMLlang)
        changeFlag(attributeLang, attributeId)
        changeLanguage(attributeLang)
    })
});
const changeHtmlLang = ( HTMLlang ) => {
    document.documentElement.setAttribute("lang", `${HTMLlang}`)
}

const changeLanguage = (attributeLang) => {
        portfolio.textContent = data[attributeLang].portfolio
        resume.textContent = data[attributeLang].resume
        contact.textContent = data[attributeLang].contact


        title.textContent = data[attributeLang].title

        filterAll.textContent = data[attributeLang].filterAll

        PWTitle.textContent = data[attributeLang].PWTitle

        PWContent.textContent = data[attributeLang].PWContent

        PPTitle.textContent = data[attributeLang].PPTitle

        PPContent.textContent = data[attributeLang].PPContent

        readMore.textContent = data[attributeLang].readMore
        
        here.textContent = data[attributeLang].here

        BTSTile.textContent = data[attributeLang].BTSTile
        
        BTSContent.textContent = data[attributeLang].BTSContent

        firstClientTitle.textContent = data[attributeLang].firstClientTitle        

        firstClientContent.textContent = data[attributeLang].firstClientContent

        pokedevContent.textContent = data[attributeLang].pokedevContent

        reactNoteTitle.textContent = data[attributeLang].reactNoteTitle
        reactNoteContent.textContent = data[attributeLang].reactNoteContent

        freelaContent.textContent = data[attributeLang].freelaContent
        
        infinityScrollContent.textContent = data[attributeLang].infinityScrollContent 

        constalContent.textContent = data[attributeLang].constalContent

}

const changeFlag = (attributeLang, attributeId) => {
    selectedLang.textContent = `${attributeLang}`

    selectFlag.src = `./img/${attributeId}.png`
}

const data =
{
	"English":
	{"portfolio":
        "Portfolio",
    "resume":
        "R??sum??",
    "contact":
        "Contact me",
    "title":
                "My projects",
    "filterAll":
                "All",
	"PWTitle":
                "Pillars of Websites",
	"PWContent":
                "This project was basically a tutorial of HTML, CSS and JavaScript for beginners. My first project using flexbox, a good css property that allows a work with the positioning and the element's order. Simple static responsive page.",
	"readMore":
                "See more clicking ",
        "here":
                "here",    
	"PPTitle":
                "Product Page",
	"PPContent":
                "I did a product page, for that exemple I made one of my PlayStation, my favorite console. A good example of a good UI. And in this project was used positioning relative and absolute with flexbox. It is completely responsive.",
    "BTSTile":
                "Bootstrap, Services/ Provision",
    "BTSContent":
                "This was my first HTML project using Bootstrap, a library of CSS3 and JavaScript, it is powerfull and maximize the time of styling the page. I got just a few days to do the project. For the content I did it like a service provision of SKYNET from Terminator's movie.",
    "firstClientTitle":
                "My First Client",
    "firstClientContent":
                "This barbershop was my first client. I did the interface design and created all HTML and CSS, always having in mind the visual identity of the client. In a nutshell it was a mobile first using just HTML5, CSS3 and JavaScript, made to show my skills working with fundamental tools.",
    "pokedevContent":
                "A web page that consumes data from a external API, pokeAPI, and show specif data from the pok??mon in the screen. A good example of clean code and AJAX + DOM management, all the code is comment.",
    "reactNoteTitle":
                "React Note Manager",
    "reactNoteContent":
                "A react app note manager, saves the last user's note in the localStorage and handle dates. Not only consumes 2 API's: localStorage, browsers API, and Moment.js, external API, but use React too, facebook JavaScript library.",

    "freelaContent":
                "That is my freelancer webpage, In this project not only I show my skills as Front End Dev using JavaScript and CSS animation to make a almost live site, but also a high level design. I am very pround of this repository.",
    "infinityScrollContent":
                "It is a project that consumes a external API, JSONPlaceholder, and load them as user goes down the page that triggers an animation. And also filter the data as user wants. Good UI and clean Code.",
	"constalContent":
                "This is my first finished project as a professional FullStack developer in 42 Dias. I had a unbelivable learning in matter of development and, mainly, team work. I participate, in the beginning just connecting the old backend with the new frontend, but in the course of time I started fixing some issues of both. In frontend, transforming it as fluid and intuitive as it is possible. It was surelly a enormus learning. I still have a affection about this project.",
    },
    "Portugu??s":
    {"portfolio":
        "Portf??lio",
    "resume":
        "Curr??culo",
    "contact":
        "Contate-me",

    "title":
                "Meus projetos",
    "PWTitle":
                "Pilares dos Websites",
     "filterAll":
                 "Tudo",
    "PWContent":
                "Este projeto foi basicamente um tutorial de HTML, CSS e JavaScript para iniciantes. Meu primeiro projeto usando flexbox, uma boa propriedade css que permite trabalhar com o posicionamento e a ordem dos elementos. P??gina responsiva est??tica simples.",
    "readMore":
                "Veja mais clicando",
    "here":
        "aqui",
    "PPTitle":
                "P??gina de produto",
    "PPContent":
                "Fiz uma p??gina de produto, por exemplo fiz um do meu PlayStation, meu console favorito. Um ??timo exemplo de uma boa IU. E neste projeto foi utilizado o posicionamento relativo e absoluto com flexbox. ?? totalmente responsivo.",
                "BTSTile":
                "Bootstrap, Presta????o de Servi??os",
    "BTSContent":
                "Este foi meu primeiro projeto HTML usando Bootstrap, uma biblioteca de CSS3 e JavaScript, ?? poderosa e maximiza o tempo de estiliza????o da p??gina. Precisei apenas alguns dias para fazer o projeto. Sobre o conte??do eu fiz como uma presta????o de servi??o da SKYNET do filme Terminator.",
                "firstClientTitle":
                "Meu primeiro cliente",
    "firstClientContent":
                "Essa barbearia foi meu primeiro cliente. Fiz o design da interface e criei todo HTML e CSS, sempre tendo em mente a identidade visual do cliente. Resumindo foi um mobile primeiro usando apenas HTML5, CSS3 e JavaScript, feito para mostrar minhas habilidades trabalhando com ferramentas fundamentais.",
    "pokedevContent":
                "Uma p??gina da web que consome dados de uma API externa, pokeAPI, e mostra dados espec??ficos do pok??mon na tela. Um bom exemplo de c??digo limpo e gerenciamento AJAX + DOM, todo o c??digo ?? coment??rio.",
     "reactNoteTitle":
                 "Gerenciador de notas, React",
     "reactNoteContent":
                 "Um gerenciador de notas react app salva a nota do ??ltimo usu??rio no localStorage e manipula as datas. N??o s?? consome 2 APIs: localStorage, browsers API e Moment.js, API externa, como tamb??m tamb??m usa React, biblioteca JavaScript do Facebook",
    "freelaContent":
                 "Essa ?? minha p??gina freelancer, neste projeto n??o s?? mostro minhas habilidades como Front End Dev usando JavaScript e anima????o CSS para fazer um site quase ao vivo, mas tamb??m um design de alto n??vel. Tenho muito orgulho deste reposit??rio.",
    "infinityScrollContent":
                 "?? um projeto que consome uma API externa, JSONPlaceholder, e os carrega conforme o usu??rio desce na p??gina que aciona uma anima????o. E tamb??m filtra os dados conforme o usu??rio deseja. Boa IU e c??digo limpo.",
	"constalContent":
                "Este ?? meu primeiro projeto finalizado como desenvolvedor FullStack  profissional na empresa 42 Dias. Tive um aprendizado incr??vel em quest??o de desenvolvimento e, principalmente, trabalho em equipe. Eu participei, no come??o apenas conectando o backend antigo com o novo frontend, mas com o passar do tempo comecei a corrigir alguns problemas de ambos. No frontend, transformando-o o mais fluido e intuitivo poss??vel. Com certeza foi um aprendizado enorme. Ainda tenho um grande carinho por esse projeto.",

    },
    "Espa??ol":
    {"portfolio":
        "Portfolio",
    "resume":
        "Curr??culum",
    "contact":
        "Cont??ctame",

    "title":
                "Mis proyectos",
    "filterAll":
                "Todos",
    "PWTitle":
                "Pilares de los sitios web",
    "PWContent":
                "Este proyecto fue b??sicamente un tutorial de HTML, CSS y JavaScript para principiantes. Mi primer proyecto usando flexbox, una buena propiedad css que permite trabajar con el posicionamiento y el orden de los elementos. P??gina de respuesta est??tica simple.",
    "readMore":
                "Ver m??s haciendo clic",
    "here":
                "aqu??",
    "PPTitle":
                "P??gina del producto",
    "PPContent":
                "Hice una p??gina de producto, para ese ejemplo hice una de mi PlayStation, mi consola favorita. Un buen ejemplo de una buena interfaz de usuario. Y en este proyecto se utiliz?? el posicionamiento relativo y absoluto con flexbox. Es completamente receptivo.",
    "BTSTile":
                "Bootstrap, prestaci??n de servicios",
    "BTSContent":
                "Este fue mi primer proyecto HTML usando Bootstrap, una biblioteca de CSS3 y JavaScript, es poderoso y maximiza el tiempo de estilo de la p??gina. Solo tengo unos d??as para hacer el proyecto. Para el contenido lo hice como una prestaci??n de servicios de SKYNET de la pel??cula de Terminator.",
    "firstClientTitle":
                "Mi primer cliente",
    "firstClientContent":
                "Esta barber??a fue mi primer cliente. Hice el dise??o de la interfaz y cre?? todo el HTML y CSS, siempre teniendo en cuenta la identidad visual del cliente. En pocas palabras, fue un dispositivo m??vil primero usando solo HTML5, CSS3 y JavaScript, hecho para mostrar mis habilidades trabajando con herramientas fundamentales.",
    "pokedevContent":
                "Una p??gina web que consume datos de una API externa, pokeAPI, y muestra datos espec??ficos del pok??mon en la pantalla. Un buen ejemplo de c??digo limpio y gesti??n AJAX + DOM, todo el c??digo es comentario.",
     "reactNoteTitle":
                 "Administrador de notas, React",
     "reactNoteContent":
                 "Un administrador de notas de la aplicaci??n de reacci??n, guarda la ??ltima nota del usuario en localStorage y maneja las fechas. No solo consume 2 API: localStorage, API de navegadores y Moment.js, API externa, sino que usa React tambi??n, biblioteca de JavaScript de Facebook.",
    "freelaContent":
                 "Esa es mi p??gina web para aut??nomos. En este proyecto, no solo demuestro mis habilidades como Front End Dev usando JavaScript y animaci??n CSS para hacer un sitio casi en vivo, sino tambi??n un dise??o de alto nivel. Estoy muy orgulloso de este repositorio.",
    "infinityScrollContent":
                 "Es un proyecto que consume una API externa, JSONPlaceholder, y las carga a medida que el usuario baja por la p??gina que activa una animaci??n. Y tambi??n filtra los datos seg??n lo desee el usuario. Buena interfaz de usuario y c??digo limpio.",
	"constalContent":
                "Este es mi primer proyecto terminado como desarrollador FullStack profesional en 42 Dias. Tuve un aprendizaje incre??ble en materia de desarrollo y, sobre todo, de trabajo en equipo. Participo, al principio simplemente conectando el antiguo backend con el nuevo frontend, pero con el tiempo comenc?? a solucionar algunos problemas de ambos. En frontend, transform??ndolo lo m??s fluido e intuitivo posible. Seguramente fue un aprendizaje enorme. Todav??a tengo un afecto por este proyecto.",
    },
    "Italiano":
    {"portfolio":
        "Portfolio",
    "resume":
        "Curriculum",
    "contact":
        "Contattami",
    "title":
                "I miei progetti",
    "filterAll":
                 "Tutto",
    "PWTitle":
                "Pilastri dei siti web",
    "PWContent":
                "Questo progetto era fondamentalmente un tutorial di HTML, CSS e JavaScript per principianti. Il mio primo progetto con flexbox, una buona propriet?? css che permette di lavorare con il posizionamento e l'ordine degli elementi. Pagina reattiva statica semplice.",
    "readMore":
                "Vedi di pi?? cliccando ",
    "here":
                "qui",
    "PPTitle":
                "Pagina del prodotto",
    "PPContent":
                "Ho realizzato una pagina del prodotto, per quell'esempio ho realizzato una delle mie PlayStation, la mia console preferita. Un buon esempio di una buona interfaccia utente. E in questo progetto ?? stato utilizzato il posizionamento relativo e assoluto con flexbox. ?? completamente reattivo.",
    "BTSTile":
                "Bootstrap, fornitura di servizi",
    "BTSContent":
                "Questo ?? stato il mio primo progetto HTML che utilizza Bootstrap, una libreria di CSS3 e JavaScript, ?? potente e massimizza il tempo di stile della pagina. Ho solo pochi giorni per realizzare il progetto. Per il contenuto l'ho fatto come una fornitura di servizi di SKYNET dal film di Terminator.",
    "firstClientTitle":
                "Il mio primo cliente",
    "firstClientContent":
                "Questo negozio di barbiere ?? stato il mio primo cliente. Ho realizzato il design dell'interfaccia e ho creato tutto HTML e CSS, tenendo sempre presente l'identit?? visiva del cliente. In poche parole ?? stato un mobile first utilizzando solo HTML5, CSS3 e JavaScript, fatto per mostrare le mie capacit?? di lavorare con strumenti fondamentali.",
    "pokedevContent":
                "Una pagina web che consuma dati da un'API esterna, pokeAPI, e mostra i dati specifici del pok??mon sullo schermo. Un buon esempio di codice pulito e gestione AJAX + DOM, tutto il codice ?? commento.",
     "reactNoteTitle":
                 "Gestione note, React",
     "reactNoteContent":
                 "Un gestore di note dell'app React, salva l'ultima nota dell'utente in localStorage e gestisce le date. Non solo consuma 2 API: localStorage, API del browser e Moment.js, API esterna, ma usa anche React, libreria JavaScript di Facebook.",
    "freelaContent":
                 "Questa ?? la mia pagina web da freelance, in questo progetto non solo mostro le mie abilit?? come Front End Dev utilizzando JavaScript e l'animazione CSS per creare un sito quasi live, ma anche un design di alto livello. Sono molto orgoglioso di questo repository.",
    "infinityScrollContent":
                 "?? un progetto che utilizza un'API esterna, JSONPlaceholder, e li carica quando l'utente scende nella pagina che attiva un'animazione. E filtra anche i dati come desidera l'utente. Buona interfaccia utente e codice pulito.",
	"constalContent":
                "Questo ?? il mio primo progetto finito come sviluppatore FullStack professionista in 42 Dias. Ho avuto un apprendimento incredibile in materia di sviluppo e, principalmente, lavoro di squadra. Partecipo, all'inizio collegando solo il vecchio backend con il nuovo frontend, ma nel corso del tempo ho iniziato a risolvere alcuni problemi di entrambi. Nel frontend, trasformandolo il pi?? fluido e intuitivo possibile. ?? stato sicuramente un enorme apprendimento. Ho ancora un affetto per questo progetto.",
    }    
}

const localStorageLang = localStorage.getItem("selectedLang")
if(localStorageLang){
    const element = document.querySelector(`#${localStorageLang}`)

     
    const attributeLang = element.getAttribute("Language")//It gets the actual language presented on the page
    const attributeId = element.getAttribute("id")//The it that will make the flag change
    const HTMLlang = element.getAttribute("HTMLlang")//Get the HTML lang to change
    
    localStorage.setItem("selectedLang", attributeId)
    console.log(attributeId)

    changeHtmlLang(HTMLlang)

    /*--------------
    Resume Atributes
    --------------*/

    changeFlag(attributeLang, attributeId)

    changeLanguage(attributeLang)
    
}
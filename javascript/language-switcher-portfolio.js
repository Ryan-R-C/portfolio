
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
        "Résumé",
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
                "A web page that consumes data from a external API, pokeAPI, and show specif data from the pokémon in the screen. A good example of clean code and AJAX + DOM management, all the code is comment.",
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
    "Português":
    {"portfolio":
        "Portfólio",
    "resume":
        "Currículo",
    "contact":
        "Contate-me",

    "title":
                "Meus projetos",
    "PWTitle":
                "Pilares dos Websites",
     "filterAll":
                 "Tudo",
    "PWContent":
                "Este projeto foi basicamente um tutorial de HTML, CSS e JavaScript para iniciantes. Meu primeiro projeto usando flexbox, uma boa propriedade css que permite trabalhar com o posicionamento e a ordem dos elementos. Página responsiva estática simples.",
    "readMore":
                "Veja mais clicando",
    "here":
        "aqui",
    "PPTitle":
                "Página de produto",
    "PPContent":
                "Fiz uma página de produto, por exemplo fiz um do meu PlayStation, meu console favorito. Um ótimo exemplo de uma boa IU. E neste projeto foi utilizado o posicionamento relativo e absoluto com flexbox. É totalmente responsivo.",
                "BTSTile":
                "Bootstrap, Prestação de Serviços",
    "BTSContent":
                "Este foi meu primeiro projeto HTML usando Bootstrap, uma biblioteca de CSS3 e JavaScript, é poderosa e maximiza o tempo de estilização da página. Precisei apenas alguns dias para fazer o projeto. Sobre o conteúdo eu fiz como uma prestação de serviço da SKYNET do filme Terminator.",
                "firstClientTitle":
                "Meu primeiro cliente",
    "firstClientContent":
                "Essa barbearia foi meu primeiro cliente. Fiz o design da interface e criei todo HTML e CSS, sempre tendo em mente a identidade visual do cliente. Resumindo foi um mobile primeiro usando apenas HTML5, CSS3 e JavaScript, feito para mostrar minhas habilidades trabalhando com ferramentas fundamentais.",
    "pokedevContent":
                "Uma página da web que consome dados de uma API externa, pokeAPI, e mostra dados específicos do pokémon na tela. Um bom exemplo de código limpo e gerenciamento AJAX + DOM, todo o código é comentário.",
     "reactNoteTitle":
                 "Gerenciador de notas, React",
     "reactNoteContent":
                 "Um gerenciador de notas react app salva a nota do último usuário no localStorage e manipula as datas. Não só consome 2 APIs: localStorage, browsers API e Moment.js, API externa, como também também usa React, biblioteca JavaScript do Facebook",
    "freelaContent":
                 "Essa é minha página freelancer, neste projeto não só mostro minhas habilidades como Front End Dev usando JavaScript e animação CSS para fazer um site quase ao vivo, mas também um design de alto nível. Tenho muito orgulho deste repositório.",
    "infinityScrollContent":
                 "É um projeto que consome uma API externa, JSONPlaceholder, e os carrega conforme o usuário desce na página que aciona uma animação. E também filtra os dados conforme o usuário deseja. Boa IU e código limpo.",
	"constalContent":
                "Este é meu primeiro projeto finalizado como desenvolvedor FullStack  profissional na empresa 42 Dias. Tive um aprendizado incrível em questão de desenvolvimento e, principalmente, trabalho em equipe. Eu participei, no começo apenas conectando o backend antigo com o novo frontend, mas com o passar do tempo comecei a corrigir alguns problemas de ambos. No frontend, transformando-o o mais fluido e intuitivo possível. Com certeza foi um aprendizado enorme. Ainda tenho um grande carinho por esse projeto.",

    },
    "Español":
    {"portfolio":
        "Portfolio",
    "resume":
        "Currículum",
    "contact":
        "Contáctame",

    "title":
                "Mis proyectos",
    "filterAll":
                "Todos",
    "PWTitle":
                "Pilares de los sitios web",
    "PWContent":
                "Este proyecto fue básicamente un tutorial de HTML, CSS y JavaScript para principiantes. Mi primer proyecto usando flexbox, una buena propiedad css que permite trabajar con el posicionamiento y el orden de los elementos. Página de respuesta estática simple.",
    "readMore":
                "Ver más haciendo clic",
    "here":
                "aquí",
    "PPTitle":
                "Página del producto",
    "PPContent":
                "Hice una página de producto, para ese ejemplo hice una de mi PlayStation, mi consola favorita. Un buen ejemplo de una buena interfaz de usuario. Y en este proyecto se utilizó el posicionamiento relativo y absoluto con flexbox. Es completamente receptivo.",
    "BTSTile":
                "Bootstrap, prestación de servicios",
    "BTSContent":
                "Este fue mi primer proyecto HTML usando Bootstrap, una biblioteca de CSS3 y JavaScript, es poderoso y maximiza el tiempo de estilo de la página. Solo tengo unos días para hacer el proyecto. Para el contenido lo hice como una prestación de servicios de SKYNET de la película de Terminator.",
    "firstClientTitle":
                "Mi primer cliente",
    "firstClientContent":
                "Esta barbería fue mi primer cliente. Hice el diseño de la interfaz y creé todo el HTML y CSS, siempre teniendo en cuenta la identidad visual del cliente. En pocas palabras, fue un dispositivo móvil primero usando solo HTML5, CSS3 y JavaScript, hecho para mostrar mis habilidades trabajando con herramientas fundamentales.",
    "pokedevContent":
                "Una página web que consume datos de una API externa, pokeAPI, y muestra datos específicos del pokémon en la pantalla. Un buen ejemplo de código limpio y gestión AJAX + DOM, todo el código es comentario.",
     "reactNoteTitle":
                 "Administrador de notas, React",
     "reactNoteContent":
                 "Un administrador de notas de la aplicación de reacción, guarda la última nota del usuario en localStorage y maneja las fechas. No solo consume 2 API: localStorage, API de navegadores y Moment.js, API externa, sino que usa React también, biblioteca de JavaScript de Facebook.",
    "freelaContent":
                 "Esa es mi página web para autónomos. En este proyecto, no solo demuestro mis habilidades como Front End Dev usando JavaScript y animación CSS para hacer un sitio casi en vivo, sino también un diseño de alto nivel. Estoy muy orgulloso de este repositorio.",
    "infinityScrollContent":
                 "Es un proyecto que consume una API externa, JSONPlaceholder, y las carga a medida que el usuario baja por la página que activa una animación. Y también filtra los datos según lo desee el usuario. Buena interfaz de usuario y código limpio.",
	"constalContent":
                "Este es mi primer proyecto terminado como desarrollador FullStack profesional en 42 Dias. Tuve un aprendizaje increíble en materia de desarrollo y, sobre todo, de trabajo en equipo. Participo, al principio simplemente conectando el antiguo backend con el nuevo frontend, pero con el tiempo comencé a solucionar algunos problemas de ambos. En frontend, transformándolo lo más fluido e intuitivo posible. Seguramente fue un aprendizaje enorme. Todavía tengo un afecto por este proyecto.",
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
                "Questo progetto era fondamentalmente un tutorial di HTML, CSS e JavaScript per principianti. Il mio primo progetto con flexbox, una buona proprietà css che permette di lavorare con il posizionamento e l'ordine degli elementi. Pagina reattiva statica semplice.",
    "readMore":
                "Vedi di più cliccando ",
    "here":
                "qui",
    "PPTitle":
                "Pagina del prodotto",
    "PPContent":
                "Ho realizzato una pagina del prodotto, per quell'esempio ho realizzato una delle mie PlayStation, la mia console preferita. Un buon esempio di una buona interfaccia utente. E in questo progetto è stato utilizzato il posizionamento relativo e assoluto con flexbox. È completamente reattivo.",
    "BTSTile":
                "Bootstrap, fornitura di servizi",
    "BTSContent":
                "Questo è stato il mio primo progetto HTML che utilizza Bootstrap, una libreria di CSS3 e JavaScript, è potente e massimizza il tempo di stile della pagina. Ho solo pochi giorni per realizzare il progetto. Per il contenuto l'ho fatto come una fornitura di servizi di SKYNET dal film di Terminator.",
    "firstClientTitle":
                "Il mio primo cliente",
    "firstClientContent":
                "Questo negozio di barbiere è stato il mio primo cliente. Ho realizzato il design dell'interfaccia e ho creato tutto HTML e CSS, tenendo sempre presente l'identità visiva del cliente. In poche parole è stato un mobile first utilizzando solo HTML5, CSS3 e JavaScript, fatto per mostrare le mie capacità di lavorare con strumenti fondamentali.",
    "pokedevContent":
                "Una pagina web che consuma dati da un'API esterna, pokeAPI, e mostra i dati specifici del pokémon sullo schermo. Un buon esempio di codice pulito e gestione AJAX + DOM, tutto il codice è commento.",
     "reactNoteTitle":
                 "Gestione note, React",
     "reactNoteContent":
                 "Un gestore di note dell'app React, salva l'ultima nota dell'utente in localStorage e gestisce le date. Non solo consuma 2 API: localStorage, API del browser e Moment.js, API esterna, ma usa anche React, libreria JavaScript di Facebook.",
    "freelaContent":
                 "Questa è la mia pagina web da freelance, in questo progetto non solo mostro le mie abilità come Front End Dev utilizzando JavaScript e l'animazione CSS per creare un sito quasi live, ma anche un design di alto livello. Sono molto orgoglioso di questo repository.",
    "infinityScrollContent":
                 "È un progetto che utilizza un'API esterna, JSONPlaceholder, e li carica quando l'utente scende nella pagina che attiva un'animazione. E filtra anche i dati come desidera l'utente. Buona interfaccia utente e codice pulito.",
	"constalContent":
                "Questo è il mio primo progetto finito come sviluppatore FullStack professionista in 42 Dias. Ho avuto un apprendimento incredibile in materia di sviluppo e, principalmente, lavoro di squadra. Partecipo, all'inizio collegando solo il vecchio backend con il nuovo frontend, ma nel corso del tempo ho iniziato a risolvere alcuni problemi di entrambi. Nel frontend, trasformandolo il più fluido e intuitivo possibile. È stato sicuramente un enorme apprendimento. Ho ancora un affetto per questo progetto.",
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
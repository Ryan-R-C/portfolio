
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
const freelaContent = document.querySelector("freelaContent")

link.forEach(element => {
    element.addEventListener('click', () => {
        
        const attributeLang = element.getAttribute("Language")
        const attributeId = element.getAttribute("id")
        
        const HTMLlang = element.getAttribute("HTMLlang")//Get the HTML lang to change
        document.documentElement.setAttribute("lang", `${HTMLlang}`)

        selectedLang.textContent = `${attributeLang}`
        
        selectFlag.src = `./img/${attributeId}.png`

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
        
    })
});
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
                "That is my freelancer webpage, In this project not only I show my skills as Front End Dev using JavaScript and CSS animation to make a almost live site, but also a high level design. I am very pround of this repository."
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
                 "Essa é minha página freelancer, neste projeto não só mostro minhas habilidades como Front End Dev usando JavaScript e animação CSS para fazer um site quase ao vivo, mas também um design de alto nível. Tenho muito orgulho deste repositório."    
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
                 "Un administrador de notas de la aplicación de reacción, guarda la última nota del usuario en localStorage y maneja las fechas. No solo consume 2 API: localStorage, API de navegadores y Moment.js, API externa, sino que usa React también, biblioteca de JavaScript de Facebook."
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
                 "Un gestore di note dell'app React, salva l'ultima nota dell'utente in localStorage e gestisce le date. Non solo consuma 2 API: localStorage, API del browser e Moment.js, API esterna, ma usa anche React, libreria JavaScript di Facebook."
            }    
}
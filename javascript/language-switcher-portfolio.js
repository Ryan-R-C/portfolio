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
const title = document.querySelector("#title")
const PWTitle = document.querySelector("#PWTitle")
const PWContent = document.querySelector("#PWContent")
const PPTitle = document.querySelector("#PPTitle")
const PPContent = document.querySelector("#PPContent")
const readMore = document.querySelectorAll(".readMore")
const here = document.querySelectorAll(".here")
const BTSTile = document.querySelector("#BTSTile")
const BTSContent = document.querySelector("#BTSContent")

link.forEach(element => {
    element.addEventListener('click', () => {
        
        const attributeLang = element.getAttribute("Language")
        const attributeId = element.getAttribute("id")
        var contentlang = attributeLang
        console.log(attributeId)

        selectedLang.textContent = `${attributeLang}`
        selectFlag.src = `https://www.countryflags.io/${attributeId}/flat/32.png`

        title.textContent = data[attributeLang].title

        PWTitle.textContent = data[attributeLang].PWTitle

        PWContent.textContent = data[attributeLang].PWContent

        PPTitle.textContent = data[attributeLang].PPTitle

        PPContent.textContent = data[attributeLang].PPContent

        readMore.textContent = data[attributeLang].readMore
        
        here.textContent = data[attributeLang].here

        BTSTile.textContent = data[attributeLang].BTSTile
        
        BTSContent.textContent = data[attributeLang].BTSContent
        
    })
});
const data =
{
	"English":
	{"title":
                "My projects",
	"PWTitle":
                "Pillars of Websites",
	"PWContent":
                "This project was basically a tutorial of HTML, CSS and JavaScript for beginners. Simple static responsive page.",
	"readMore":
                "See more clicking ",
        "here":
                "here",    
	"PPTitle":
                "Product Page",
	"PPContent":
                "I did a product page, for that exemple I made one of my PlayStation, my favorite console. It is completely responsive.",
    "BTSTile":
                "Bootstrap, Services/ Provision",
    "BTSContent":
                "This was my first HTML project using Bootstrap, a library of CSS3 and JavaScript, it is powerfull and maximize the time of styling the page. I got just a few days to do the project. For the content I did it like a service provision of the movie Terminat"
    },
    "Português":
    {"title":
                "Meus projetos",
    "PWTitle":
                "Pilares dos Websites",
    "PWContent":
                "Este projeto foi, basicamente, um tutorial de HTML, CSS e JavaScript para iniciantes. Criada uma página estática e responsiva simples.",
    "readMore":
                "Veja mais clicando",
    "here":
        "aqui",
    "PPTitle":
                "Página de produto",
    "PPContent":
                "Fiz uma página de produto peguei como exemplo meu PlayStation, meu console favorito. É totalmente responsivo, com o famoso menu hamburguer.",
                "BTSTile":
                "Bootstrap, Prestação de Serviços",
    "BTSContent":
                "Este foi meu primeiro projeto HTML usando Bootstrap, uma biblioteca de CSS3 e JavaScript, é muito poderoso e maximiza o tempo de estilização da página. Tive apenas alguns dias para fazer o projeto. Para conteúdo fiz como uma prestação de serviço do filme Terminator."       
            },
    "Español":
    {"title":
                "Mis proyectos",
    "PWTitle":
                "Pilares de los sitios web",
    "PWContent":
                "Este proyecto fue básicamente un tutorial de HTML, CSS y JavaScript para principiantes. Página estática sensible simple.",
    "readMore":
                "Ver más haciendo clic",
    "here":
                "aquí",
    "PPTitle":
                "Página del producto",
    "PPContent":
                "Hice una página de producto, para ese ejemplo hice una de mi PlayStation, mi consola favorita. Es completamente sensible.",
    "BTSTile":
                "Bootstrap, prestación de servicios",
    "BTSContent":
                "Este fue mi primer proyecto HTML usando Bootstrap, una biblioteca de CSS3 y JavaScript, es poderoso y maximiza el tiempo de estilo de la página. Solo tengo unos días para hacer el proyecto. Para el contenido lo hice como una prestación de servicios de la película Terminator."},  
    "Italiano":
    {"title":
                "I miei progetti",
    "PWTitle":
                "Pilastri dei siti web",
    "PWContent":
                "Questo progetto era fondamentalmente un tutorial di HTML, CSS e JavaScript per principianti. Semplice pagina reattivo statica.",
    "readMore":
                "Vedi di più cliccando ",
    "here":
                "qui",
    "PPTitle":
                "Pagina del prodotto",
    "PPContent":
                "Ho creato una pagina del prodotto, per quell'esempio ho realizzato una delle mie PlayStation, la mia console preferita. È completamente responsive.",
    "BTSTile":
                "Bootstrap, fornitura di servizi",
    "BTSContent":
                "Questo è stato il mio primo progetto HTML che utilizza Bootstrap, una libreria di CSS3 e JavaScript, è potente e massimizza il tempo di stile della pagina. Ho solo pochi giorni per realizzare il progetto. Per il contenuto l'ho fatto come una fornitura di servizi del film Terminator."
            }    
}
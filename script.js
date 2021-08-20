/*Elements that change the language*/
var LanguageElement = document.querySelector("#language")
const link = document.querySelectorAll("a")
/*All elements that will be "translated" to other language
OBS.: They must have the same names in data*/
const title = document.querySelector("#title")
const PWTitle = document.querySelector("#PWTitle")
const PWContent = document.querySelector("#PWContent")
const PPTitle = document.querySelector("#PPTitle")
const PPContent = document.querySelector("#PPContent")
const readMore = document.querySelectorAll(".readMore")
const here = document.querySelectorAll(".here")


link.forEach(element => {
    element.addEventListener('click', () => {
        //LanguageElement.querySelector("selected-lang").idList.remove("selected-lang")
        //element.idList.add("selected-lang")

        const attributeLang = element.getAttribute("Language")

        title.textContent = data[attributeLang].title

        PWTitle.textContent = data[attributeLang].PWTitle

        PWContent.textContent = data[attributeLang].PWContent

        PPTitle.textContent = data[attributeLang].PPTitle

        PPContent.textContent = data[attributeLang].PPContent

        readMore.textContent = data[attributeLang].readMore
        
        here.textContent = data[attributeLang].here

    })
});
const data =
{
	"en":
	{"title":
        "My projects",
	"PWTitle":
        "Pillars of Websites",
	"PWContent":
        "This project was basically a tutorial of HTML, CSS and JavaScript for beginners. Simple static responsive page.",
	"seeMore":
        "See more clicking ",
        "here":
        "here",    
	"PPTitle":
        "Product Page",
	"PPContent":
        "I did a product page, for that exemple I made one of my PlayStation, my favorite console. It is completely responsive."
    },
    "pt":
    {"title":
                "Meus projetos",
    "PWTitle":
                "Pilares de sites",
    "PWContent":
                "Este projeto foi basicamente um tutorial de HTML, CSS e JavaScript para iniciantes. Página estática responsiva simples.",
    "readMore":
                "Veja mais clicando ",
    "here":
        "aqui",
    "PPTitle":
                "Página do produto",
    "PPContent":
                "Eu fiz uma página de produto, por exemplo, fiz um do meu PlayStation, meu console favorito. É totalmente responsivo."
            },
    "es":
    {"title":
                "Mis proyectos",
    "PWTitle":
                "Pilares de los sitios web",
    "PWContent":
                "Este proyecto fue básicamente un tutorial de HTML, CSS y JavaScript para principiantes. Página estática sensible simple",
    "readMore":
                "Ver más haciendo clic",
    "here":
                "aquí",
    "PPTitle":
                "Página del producto",
    "PPContent":
                "Hice una página de producto, para ese ejemplo hice una de mi PlayStation, mi consola favorita. Es completamente sensible"},
    "it":
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
                "Ho creato una pagina del prodotto, per quell'esempio ho realizzato una delle mie PlayStation, la mia console preferita. È completamente responsive."}    
}
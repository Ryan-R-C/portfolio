
/*----------------
Contact me content
----------------*/
const contactTitle = document.querySelector("#contactTitle")
const contactContent = document.querySelector("#contactContent")
const schedulesTitle = document.querySelector("#schedulesTitle")
const schedulesContent = document.querySelector("#schedulesContent")
const socialContent = document.querySelector("#socialContent")
// const me = document.querySelector("#me")



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

        contactTitle.textContent = data[attributeLang].contactTitle

        contactContent.textContent = data[attributeLang].contactContent

        schedulesTitle.textContent = data[attributeLang].schedulesTitle

        schedulesContent.textContent = data[attributeLang].schedulesContent

        socialContent.textContent = data[attributeLang].socialContent

        // me.textContent = data[attributeLang].me
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
    "contactTitle":
        "Contact me",
    "contactContent":
        "You can contact me at my e-mail:",
    "schedulesTitle": 
        "Schedules available to contact",
    "schedulesContent": 
        "You can find me all day.",
    "socialContent":
        "All social media presented in footer, but I have more affection for Linkedin.",
    "me":
        "Me and my wife"},
    "Português":
    {"portfolio":
        "Portfólio",
    "resume":
        "Currículo",
    "contact":
    "Contate-me",
    "contactTitle":
        "Contate-me",
    "contactContent":
        "Você pode entrar em contato comigo pelo meu e-mail:",
    "schedulesTitle":
        "Horários disponíveis para contato",
    "schedulesContent":
        "Você pode me encontrar o dia todo.",
    "socialContent":
        "Todas as redes sociais apresentadas em rodapé, mas tenho mais carinho pelo Linkedin.",
    "me":
        "Eu e minha esposa"

    },
    "Español":
    {"portfolio":
        "Portfólio",
    "resume":
        "Currículo",
    "contact":
        "Contate-me",

    "contactTitle":
        "Contáctame",
    "contactContent":
        "Puedes contactarme a mi correo electrónico:",
    "schedulesTitle":
        "Horarios disponibles para contactar",
    "schedulesContent":
        "Puedes encontrarme todo el día.",
    "socialContent":
        "Todas las redes sociales se presentan en pie de página, pero le tengo más cariño a Linkedin.",
    "me":
        "Yo y mi esposa" 
    },
    "Italiano":
    {"portfolio":
        "Portfolio",
    "resume":
        "Curriculum",
    "contact":
        "Contattami",
    "contactTitle":
        "Contattami",
    "contactContent":
        "Puoi contattarmi alla mia email:",
    "schedulesTitle":
        "Orari disponibili da contattare",
    "schedulesContent":
        "Puoi trovarmi tutto il giorno.",
    "socialContent":
        "Tutti i social presentati a piè di pagina, ma ho più affetto per Linkedin.",
    "me":
        "Io e mia moglie"

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
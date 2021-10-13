
/*----------------
Contact me content
----------------*/
const contactTitle = document.querySelector("#contactTitle")
const contactContent = document.querySelector("#contactContent")
const schedulesTitle = document.querySelector("#schedulesTitle")
const schedulesContent = document.querySelector("#schedulesContent")
const socialContent = document.querySelector("#socialContent")
const me = document.querySelector("#me")



link.forEach(element => {
    element.addEventListener('click', () => {
        
        const attributeLang = element.getAttribute("Language")
        const attributeId = element.getAttribute("id")

        const HTMLlang = element.getAttribute("HTMLlang")//Get the HTML lang to change
        document.documentElement.setAttribute("lang", `${HTMLlang}`)
        
        selectedLang.textContent = `${attributeLang}`

        selectFlag.src = `https://www.countryflags.io/${attributeId}/flat/32.png`

        portfolio.textContent = data[attributeLang].portfolio
        resume.textContent = data[attributeLang].resume
        contact.textContent = data[attributeLang].contact

        contactTitle.textContent = data[attributeLang].contactTitle

        contactContent.textContent = data[attributeLang].contactContent

        schedulesTitle.textContent = data[attributeLang].schedulesTitle

        schedulesContent.textContent = data[attributeLang].schedulesContent

        socialContent.textContent = data[attributeLang].socialContent

        me.textContent = data[attributeLang].me

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
    "contactTitle":
        "Contact me",
    "contactContent":
        "You can contact me at my e-mail:",
    "schedulesTitle": 
        "Schedules available to contact",
    "schedulesContent": 
        "You can find me in the evening, and all day in the weekend.",
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
        "Você pode me encontrar à noite e o dia todo no fim de semana.",
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
        "Puedes encontrarme por la noche y todo el día los fines de semana",
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
        "Mi puoi trovare la sera e tutto il giorno nel fine settimana.",
    "socialContent":
        "Tutti i social presentati a piè di pagina, ma ho più affetto per Linkedin.",
    "me":
        "Io e mia moglie"

    }
}
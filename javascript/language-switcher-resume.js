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

/*------------
Resume content
------------*/
const pageTitleInHeader = document.querySelector("#pageTitleInHeader")
const pageTitleContent = document.querySelector("#pageTitleContent")
const WhoIm = document.querySelector("#WhoIm")
const myProj = document.querySelector("#myProj")
const meTitle = document.querySelector("#meTitle")
const meContent = document.querySelector("#meContent")
const acFormationTitle = document.querySelector("#acFormationTitle")
const acFormationContent = document.querySelector("#acFormationContent")
const mySchool = document.querySelector("#mySchool")
const coursesTitle = document.querySelector("#coursesTitle")
const objectiveTitle = document.querySelector("#objectiveTitle")
const objectiveContent = document.querySelector("#objectiveContent")
const projTitle = document.querySelector("#projTitle")
const projContent = document.querySelector("#projContent")
const philosophyTitle = document.querySelector("#philosophyTitle")
const philosophyContent = document.querySelector("#philosophyContent")

link.forEach(element => {
    element.addEventListener('click', () => {
        
        const attributeLang = element.getAttribute("Language")//It gets the actual language presented on the page
        const attributeId = element.getAttribute("id")//The it that will make the flag change

        const HTMLlang = element.getAttribute("HTMLlang")//Get the HTML lang to change
        document.documentElement.setAttribute("lang", `${HTMLlang}`)

        selectedLang.textContent = `${attributeLang}`
        selectFlag.src = `https://www.countryflags.io/${attributeId}/flat/32.png`
        /*--------------
        Resume Atributes
        --------------*/
        pageTitleInHeader.innerHTML = data[attributeLang].pageTitleInHeader

        pageTitleContent.innerHTML = data[attributeLang].pageTitleContent

        WhoIm.textContent = data[attributeLang].WhoIm
        myProj.textContent = data[attributeLang].myProj

        meTitle.textContent = data[attributeLang].meTitle

        meContent.textContent = data[attributeLang].meContent
        
        acFormationTitle.textContent = data[attributeLang].acFormationTitle
        
        acFormationContent.textContent = data[attributeLang].acFormationContent
        
        mySchool.textContent = data[attributeLang].mySchool
        
        coursesTitle.textContent = data[attributeLang].coursesTitle
        
        objectiveTitle.textContent = data[attributeLang].objectiveTitle

        objectiveContent.textContent = data[attributeLang].objectiveContent
        
        projTitle.textContent = data[attributeLang].projTitle
        
        projContent.textContent = data[attributeLang].projContent
        
        philosophyTitle.textContent = data[attributeLang].philosophyTitle
        
        philosophyContent.textContent = data[attributeLang].philosophyContent
    })
});
const data =
{
	"English":
	{/*----
    Resume
    ----*/
    "pageTitleInHeader": 
        "Hey.<br>I am Ryan.<br>Front-End Dev.",
    "pageTitleContent": 
        "<strong>Want more?</strong> Here is my <strong>Resume</strong> and my<strong> Portfolio</strong> is in the navbar up there. <strong>Take a look at my work!</strong>",
    "WhoIm": 
        "Who I am",
    "myProj": 
        "My projects",
    "meTitle":
        "Who I am",
    "meContent":
        "I am Ryan Rodrigo Costa, software engineering student. I am a lively motivated person that will give my own blood to what I belive. In my breaks I study, read, play with my wife and code a lot.",
    "acFormationTitle":
        "Academic Formation.",
    "acFormationContent":
        "I am attending Software Engeneer in Uninter. One of the most complete courses about technology, 4 years, from the basics of planning projects to real applications.",
    "mySchool":
        "Meet my school",
    "coursesTitle":
        "Extracurricular courses",
    "objectiveTitle":
        "Objectives",
    "objectiveContent":
        "My main objective is work with my love, technology. I chose this area for, first, it is a pleasure work to me and, second, it has the hottest job market. Being technology the application of scientific knowledge for practical purposes, it can be used to help people around the world, to connect everybody in a simple way. For me it is mind-blowing how electronic circuits can make the marriage of the virgin made by Raphael Sanzio in a screen",
    "projTitle":
        "My best college project, Sapiens Machina",
    "projContent":
        "When I was just a sophomore in high school, in the first year of social isolation the school had problems to achieve some students, mainly the countryside students who do not have internet access, so our team elaborate a http modem to provide the classes and get their notes. ",
    "philosophyTitle":
        "My daily life philosophy",
    "philosophyContent":
        "“The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy“",
    },
    "Português":
    {/*----
    Resume
    ----*/
    "pageTitleInHeader":
         "Ei. <br> Eu sou Ryan. <br> Front-end Dev.",
     "pageTitleContent":
         "<strong> Quer mais? </strong> Aqui está meu <strong> Currículo </strong> e meu <strong> Portfólio </strong> está na barra de navegação lá em cima. <strong> Dê uma olhada no meu trabalho! </strong> ",
    "WhoIm": 
         "Quem eu sou",
     "myProj": 
         "Meus projetos",
    "meTitle":
                "Quem eu sou",
    "meContent":
                'Sou Ryan Rodrigo Costa, estudante de engenharia de software. Sou uma pessoa animada e motivada que vai dar o meu próprio sangue ao que acredito. Nas minhas folgas estudo, leio, jogo com a minha esposa e "codo" muito.',
    "acFormationTitle":
                "Formação Acadêmica",
    "acFormationContent":
                "Estou cursando Engenheiria de Software na Uninter. Um dos cursos mais completos sobre tecnologia, 4 anos, desde o básico de planejamento de projetos até aplicações reais.",
    "mySchool":
                "Conheça minha faculdade",
    "CoursesTitle":
                "Cursos extracurriculares",
    "objectiveTitle":
                "Objetivos",
    "objectiveContent":
                "Meu principal objetivo é trabalhar com meu amor, tecnologia. Escolhi esta área porque, em primeiro lugar, é um prazer para mim trabalhar com isso e, em segundo lugar, ela tem o mercado de trabalho bem aquecido. Sendo tecnologia a aplicação do conhecimento científico para fins práticos, pode ser usada para ajudar pessoas ao redor do mundo, para conectar todos de uma forma simples. Para mim é alucinante como os circuitos eletrônicos podem fazer O Casamento da Virgem de Raphael Sanzio em uma tela",
    "projTitle":
                "Meu melhor projeto da minha escola, Sapiens Machina",
    "projContent":
                "Quando eu estava no segundo ano do ensino médio, no primeiro ano de isolamento social a escola teve problemas para atingir alguns alunos, principalmente os do interior que não têm acesso à internet, então nossa equipe elaborou um modem http para fornecer as aulas e pegar suas anotações.",
    "philosophyTitle":
                "Minha filosofia de vida diária",
    "philosophyContent":
                "“A própria luta pelas alturas é suficiente para encher o coração de um homem. Deve-se imaginar Sísifo feliz “",
    },
    "Español":
    {/*----
    Resume
    ----*/
    "pageTitleInHeader":
         "Hola. <br> Soy Ryan. <br> Desarrollador de front-end",
     "pageTitleContent":
         "<strong> ¿Quieres más? </strong> Aquí está mi <strong> CV </strong> y mi <strong> Portafolio </strong> está en la barra de navegación de arriba. <strong> ¡Echa un vistazo a mi trabajo! </strong> ",
    "WhoIm": 
         "Quien soy",
     "myProj": 
         "Mis proyectos",    
    "meTitle":
                "Quien soy",
    "meContent":
                "Soy Ryan Rodrigo Costa, estudiante de ingeniería de software. Soy una persona animada y motivada que dará mi propia sangre por lo que creo. En mis descansos estudio, leo, juego con mi esposa y codifico mucho",
    "acFormationTitle":
                "Formación Académica.",
    "acFormationContent":
                "Estoy cursando Software Engeneer en Uninter. Uno de los cursos más completos sobre tecnología, 4 años, desde lo básico de planificación de proyectos hasta aplicaciones reales.",
    "mySchool":
                "Conoce a mi escuela",
    "coursesTitle":
                "Cursos extraescolares",
    "objectiveTitle":
                "Objetivos",
    "objectiveContent":
                "Mi principal objetivo es trabajar con mi amor, la tecnología. Elegí esta área porque, primero, es un placer trabajar para mí y, segundo, tiene el mercado laboral más caliente. Siendo la tecnología la aplicación del conocimiento científico con fines prácticos, se puede usar para ayudar a personas de todo el mundo, para conectar a todos de una manera sencilla. Para mí es alucinante cómo los circuitos electrónicos pueden hacer que el matrimonio de la virgen hecha por Raphael Sanzio en una pantalla ",
    "projTitle":
                "Mi mejor proyecto universitario, Sapiens Machina",
    "projContent":
                "Cuando era apenas un estudiante de segundo año en la secundaria, en el primer año de aislamiento social la escuela tuvo problemas para lograr algunos estudiantes, principalmente los estudiantes del campo que no tienen acceso a internet, por lo que nuestro equipo elaboró ​​un módem http para brindar las clases y obtener sus notas. ",
    "philosophyTitle":
                "Mi filosofía de vida diaria",
    "philosophyContent":
                "“La lucha misma hacia las alturas es suficiente para llenar el corazón de un hombre. Hay que imaginarse feliz a Sísifo”",
            },
    "Italiano":
    {/*----
    Resume
    ----*/
    "pageTitleInHeader":
         "Ehi.<br>Io sono Ryan.<br>Sviluppatore front-end.",
     "pageTitleContent":
         "<strong>Vuoi di più?</strong> Ecco il mio <strong>Riprendi</strong> e il mio<strong> Portfolio</strong> è nella barra di navigazione lassù. <strong>Dai un'occhiata al mio lavoro!</strong>",
    "WhoIm": 
         "Chi sono",
     "myProj": 
         "I miei progetti",
    "meTitle":
                "Chi sono",
    "meContent":
                "Sono Ryan Rodrigo Costa, studente di ingegneria del software. Sono una persona vivace e motivata che darà il mio stesso sangue a ciò in cui credo. Nelle mie pause studio, leggo, gioco con mia moglie e codice molto.",
    "acFormationTitle":
                "Formazione accademica.",
    "acFormationContent":
                "Sto frequentando Software Engeneer in Uninter. Uno dei corsi più completi sulla tecnologia, 4 anni, dalle basi della pianificazione dei progetti alle applicazioni reali.",
    "mySchool":
                "Incontra la mia scuola",
    "coursesTitle":
                "Corsi extracurriculari",
    "objectiveTitle":
                "Obiettivi",
    "objectiveContent":
                 "Il mio obiettivo principale è lavorare con il mio amore, la tecnologia. Ho scelto quest'area perché, in primo luogo, è un piacere lavorare per me e, in secondo luogo, ha il mercato del lavoro più caldo. Essendo la tecnologia l'applicazione della conoscenza scientifica per scopi pratici, è può essere usato per aiutare le persone in tutto il mondo, per connettere tutti in modo semplice. Per me è strabiliante come i circuiti elettronici possano realizzare in uno schermo il matrimonio della vergine realizzato da Raffaello Sanzio",
    "projTitle":
                "Il mio miglior progetto universitario, Sapiens Machina",
    "projContent":
                "Quando ero solo al secondo anno del liceo, nel primo anno di isolamento sociale la scuola ha avuto problemi a raggiungere alcuni studenti, principalmente gli studenti di campagna che non hanno accesso a Internet, quindi il nostro team ha elaborato un modem http per fornire le classi e ottenere le loro note.",
    "philosophyTitle":
                "La mia filosofia di vita quotidiana",
    "philosophyContent":
                "“La stessa lotta verso le vette è sufficiente per riempire il cuore di un uomo. Bisogna immaginare Sisifo felice“",
    }    
}
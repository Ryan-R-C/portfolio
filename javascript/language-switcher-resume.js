
/*------------
Resume content
-------------*/
const pageTitleInHeader = document.querySelector("#header-resume_landing-page_content_title")
const pageTitleContent = document.querySelector("#header-resume_landing-page_content_text")
const WhoIm = document.querySelector("#WhoIm")
const myProj = document.querySelector("#myProj")
const meTitle = document.querySelector("#meTitle")
const meContent = document.querySelector("#meContent")
const acFormationTitle = document.querySelector("#acFormationTitle")
const acFormationContent = document.querySelector("#acFormationContent")
const techFormationTitle = document.querySelector("#techFormationTitle")
const techormationContent = document.querySelector("#techormationContent")
const mySchool = document.querySelector("#mySchool")
const coursesTitle = document.querySelector("#coursesTitle")
const objectiveTitle = document.querySelector("#objectiveTitle")
const objectiveContent = document.querySelector("#objectiveContent")
const projTitle = document.querySelector("#projTitle")
const projContent = document.querySelector("#projContent")
const philosophyTitle = document.querySelector("#philosophyTitle")
const philosophyContent = document.querySelector("#philosophyContent")
//This is all courses li's
const courses = document.querySelector("#courses")
/*
Como fazer para salvar ele durante o uso do site?
Salvar é simples, mas usar é outra coisa

salvar o id no localStorage, 
sempre que for mudado alterar lá
pegar o elemento pelo id
    fazendo isso pegar suas propriedades para alterar
        atributeId, attributeLang
fazendo assim que sempre quando for recarregado alterar a linguagem
*/
link.forEach(element => {
    element.addEventListener('click', () => {
        
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

        changeCourses(attributeLang)
        
    })
});

const changeHtmlLang = ( HTMLlang ) => {
    document.documentElement.setAttribute("lang", `${HTMLlang}`)
}

const changeLanguage = (attributeLang) => {

    portfolio.textContent = data[attributeLang].portfolio
    resume.textContent = data[attributeLang].resume
    contact.textContent = data[attributeLang].contact


    pageTitleInHeader.innerHTML = data[attributeLang].pageTitleInHeader

    pageTitleContent.innerHTML = data[attributeLang].pageTitleContent

    WhoIm.textContent = data[attributeLang].WhoIm
    myProj.textContent = data[attributeLang].myProj

    meTitle.textContent = data[attributeLang].meTitle
    meContent.textContent = data[attributeLang].meContent
    
    acFormationTitle.textContent = data[attributeLang].acFormationTitle
    acFormationContent.textContent = data[attributeLang].acFormationContent
    mySchool.textContent = data[attributeLang].mySchool

    techFormationTitle.textContent = data[attributeLang].techFormationTitle
    techormationContent.textContent = data[attributeLang].techormationContent 
    
    coursesTitle.textContent = data[attributeLang].coursesTitle
    
    objectiveTitle.textContent = data[attributeLang].objectiveTitle

    objectiveContent.textContent = data[attributeLang].objectiveContent
    
    projTitle.textContent = data[attributeLang].projTitle
    
    projContent.textContent = data[attributeLang].projContent
}

const changeFlag = (attributeLang, attributeId) => {
    selectedLang.textContent = `${attributeLang}`

    selectFlag.src = `./img/${attributeId}.png`
}

const changeCourses = (attributeLang) => {
    courses.innerHTML = ""                        //Removes all content from courses
    courses.innerHTML = dataCourses[attributeLang].join(' ')//Add all content in specific language in courses

}

const data =
{
	"English":
	{/*----
    Resume
    ----*/
    "portfolio":
        "Portfolio",
    "resume":
        "Résumé",
    "contact":
        "Contact me",
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
        "I am Ryan Rodrigo Costa, software engineering student. I am a lively motivated person who give his own blood to what I belive. I love to solve problems, for the reason that I finish them knowing each time more, always reaching a clean code. Love to learn, to me the knowledge is never enough. And I like to work as a team, there is always someone to give good ideas and be sincere in the team.",
    "acFormationTitle":
        "Academic Formation.",
    "acFormationContent":
        "I am attending Software Engeneer in Uninter. One of the most complete courses about technology, 4 years, from the basics of planning projects to real applications.",
    "mySchool":
        "Meet my school",
    "techFormationTitle":
        "Technical Education",
    "techormationContent":
        "I am graduated on Front End by Alura, 170 hours and 18 courses! It went from the basics, such as HTML and CSS, to Javascript Animations and SEO.",
    "coursesTitle":
        "Extracurricular courses",
    "objectiveTitle":
        "Objectives",
    "objectiveContent":
        "My main objective is work with what I love, technology. I chose this area because it is a pleasure to work with it, I love to build and rebuild the problems in my mind and find the best way to do it. Being technology the application of scientific knowledge for practical purposes, it can be used to help people around the world in a simple way. For me it is mind-blowing how electronic circuits can be used as a learning platform and many other ways to make our lives easier.",
    "projTitle":
        "My best college project, Sapiens Machina",
    "projContent":
        "When I was just a sophomore in high school, in the first year of social isolation the school had problems to achieve some students, mainly the countryside students who do not have internet access, so our team elaborate a http modem to provide the classes and get their notes. "
    },
    "Português":
    {/*----
    Resume
    ----*/
    "portfolio":
        "Portfólio",
    "resume":
        "Currículo",
    "contact":
        "Contate-me",
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
                "Sou Ryan Rodrigo Costa, estudante de engenharia de software. Eu sou uma pessoa muito motivada que dá seu sangue àquilo que acredita. Amo resolver problemas, porque termino eles sabendo cada vez mais, sempre prezando por um código limpo. Amo aprender, o conhecimento nunca é suficiente. E gosto de trabalhar em equipe, sempre há alguém para dar boas ideias e ser sincero na equipe.",
    "acFormationTitle":
                "Formação Acadêmica",
    "acFormationContent":
                "Estou cursando Engenheiria de Software na Uninter. Um dos cursos mais completos sobre tecnologia, 4 anos, desde o básico de planejamento de projetos até aplicações reais.",
    "techFormationTitle":
                "Educação técnica",
    "techormationContent":
                "Sou formado em Front End pelo Alura, 170 horas e 18 cursos! Desde o básico, como HTML e CSS, até Animações Javascript e SEO.",
    "mySchool":
                "Conheça minha faculdade",
    "coursesTitle":
                "Cursos extracurriculares",
    "objectiveTitle":
                "Objetivos",
    "objectiveContent":
                "Meu principal objetivo é trabalhar com o que adoro, tecnologia. Escolhi esta área porque é um prazer trabalhar com ela, amo construir e reconstruir os problemas na minha mente e encontrar a melhor forma de o fazer. Por ser a tecnologia a aplicação do conhecimento científico para fins práticos, ela pode ser usada para ajudar pessoas ao redor do mundo de uma forma simples. Para mim é impressionante como os circuitos eletrônicos podem ser usados como uma plataforma de aprendizagem e muitas outras maneiras de tornar nossas vidas mais fáceis.",
    "projTitle":
                "Meu melhor projeto da minha escola, Sapiens Machina",
    "projContent":
                "Quando eu estava no segundo ano do ensino médio, no primeiro ano de isolamento social, a escola teve problemas para atingir alguns alunos, principalmente os do interior que não têm acesso à internet, então nossa equipe elaborou um modem http para fornecer as aulas e pegar suas anotações.",
    },
    "Español":
    {/*----
    Resume
    ----*/
    "portfolio":
        "Portfolio",
    "resume":
        "Currículum",
    "contact":
        "Contáctame",
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
                "Soy Ryan Rodrigo Costa, estudiante de ingeniería de software. Soy una persona vivaz motivada que da su sangre a lo que cree. Me encanta solucionar problemas, por lo que los termino sabiendo cada vez más, siempre llegando a un código limpio. Me encanta aprender, para mí el conocimiento nunca es suficiente. Y me gusta trabajar en equipo, siempre hay alguien con quien dar buenas ideas y ser sincero en el equipo.",
    "acFormationTitle":
                "Formación Académica.",
    "acFormationContent":
                "Estoy cursando Software Engeneer en Uninter. Uno de los cursos más completos sobre tecnología, 4 años, desde lo básico de planificación de proyectos hasta aplicaciones reales.",
    "techFormationTitle":
                "Educación técnica",
    "techormationContent":
                "¡Me gradué de Front End por Alura, 170 horas y 18 cursos! Pasé de lo básico, como HTML y CSS, a Animaciones Javascript y SEO.",
    "mySchool":
                "Conoce a mi escuela",
    "coursesTitle":
                "Cursos extraescolares",
    "objectiveTitle":
                "Objetivos",
    "objectiveContent":
                "Mi principal objetivo es trabajar con lo que amo, la tecnología. Elegí esta área porque es un placer trabajar con ella, me encanta construir y reconstruir los problemas en mi mente y encontrar la mejor manera de hacerlo. Siendo la tecnología la aplicación del conocimiento científico con fines prácticos, se puede utilizar para ayudar a personas de todo el mundo de una manera sencilla. Para mí es alucinante cómo los circuitos electrónicos se pueden utilizar como plataforma de aprendizaje y muchas otras formas de hacernos la vida más fácil.",
    "projTitle":
                "Mi mejor proyecto universitario, Sapiens Machina",
    "projContent":
                "Cuando era apenas un estudiante de segundo año en la secundaria, en el primer año de aislamiento social la escuela tuvo problemas para lograr algunos estudiantes, principalmente los estudiantes del campo que no tienen acceso a internet, por lo que nuestro equipo elaboró ​​un módem http para brindar las clases y obtener sus notas. ",
            },
    "Italiano":
    {/*----
    Resume
    ----*/
    "portfolio":
        "Portfolio",
    "resume":
        "Curriculum",
    "contact":
        "Contattami",
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
                "Sono Ryan Rodrigo Costa, studente di ingegneria del software. Sono una persona vivace e motivata che dona il proprio sangue a ciò che crede. Amo risolvere i problemi, per il motivo che li finisco sapendo ogni volta di più, raggiungendo sempre un codice pulito. Amo imparare, per me la conoscenza non è mai abbastanza. E mi piace lavorare in squadra, c'è sempre qualcuno che dà buone idee ed è sincero nella squadra.",
    "mySchool":
                "Incontra la mia scuola",
    "techFormationTitle":
                "Educazione tecnica",
    "techormationContent":
                "Sono laureato al Front End di Alura, 170 ore e 18 corsi! Sono passato dalle basi, come HTML e CSS, alle animazioni Javascript e al SEO.",
    "coursesTitle":
                "Corsi extracurriculari",
    "objectiveTitle":
                "Obiettivi",
    "objectiveContent":
                 "Il mio obiettivo principale è lavorare con ciò che amo, la tecnologia. Ho scelto quest'area perché è un piacere lavorarci, amo costruire e ricostruire i problemi nella mia mente e trovare il modo migliore per farlo. Essendo la tecnologia l'applicazione della conoscenza scientifica per scopi pratici, può essere utilizzata per aiutare le persone in tutto il mondo in modo semplice. Per me è sbalorditivo come i circuiti elettronici possano essere usati come piattaforma di apprendimento e molti altri modi per semplificarci la vita.",
    "projTitle":
                "Il mio miglior progetto universitario, Sapiens Machina",
    "projContent":
                "Quando ero solo al secondo anno del liceo, nel primo anno di isolamento sociale la scuola ha avuto problemi a raggiungere alcuni studenti, principalmente gli studenti di campagna che non hanno accesso a Internet, quindi il nostro team ha elaborato un modem http per fornire le classi e ottenere le loro note.",   
    }   
}
//The specific content of my courses
const dataCourses =
    {'English':[
            "<li>ReactJs I - Alura ✓</li>",
            "<li>ReactNative I - Alura ✓</li>",
           "<li>Database, MySQL - Curso em Vídeo ✓</li>",
           "<li>HTML5 and CSS3, module I and II - Curso em Vídeo ✓</li>",
           "<li>Javascript - Curso em Vídeo ✓</li>",
           "<li>Introduction to Responsive Web Design - Free Code Camp ✓</li>",
           "<li>Git and GitHub -Teacher José de Assis ✓</li>",
           "<li>Python POO - Boson Training School✓</li><li>Topics in Algebra - Equaciona ✓</li>",
           "<li>BootStrap - From beginner to expert - Udemy ✓</li>",
           "<li>Alura – React: Learning how the library works ✓</li>",
           "<li>Alura – Computer Networking: Introduction, concepts and practice ✓</li>",
           "<li>Alura – Rest with NodeJS: API with Express and MySQL – attending</li>",
           "<li>Equaciona – Calculus – attending</li>",
           "<li>React II – Alura ✓   </li>",
           "<li>React Native – Alura ✓  </li>",
           "<li>Linux I – Alura ✓  </li>",
           "<li>Linux II – Alura ✓  </li>",
           "<li>Docker – Alura – attending</li>",
           "<li>Computer Architecture: Behind how your program workss – Alura  ✓</li>",
           "<li>Python to Data Science – Alura – attending</li>",
           "<li>React Native with Expo – Alura – attending</li>",
           "<li>ORM with NodeJs: Api with Sequelize and MySQL – Alura – attending</li>",
           "<li>React Functions – Alura – attending</li>",
    ],
    "Português":
[       "<li>ReactJs I - Alura ✓</li>",
        "<li>ReactNative I - Alura ✓</li>",
        "<li> Python, Módulos I, II e III - Curso em Vídeo ✓ </li>",
        "<li>Banco de dados, MySQL - Curso em vídeo ✓ </li>",
        "<li>HTML5 e CSS3, módulo I e II - Curso em vídeo ✓ </li>",
        "<li>Javascript - Curso em vídeo ✓ </li>",
        "<li>Introdução ao design responsivo da Web - FreeCodeCamp ✓ </li>",
        "<li>Git e GitHub - Professor José de Assis ✓ </li>",
        "<li> Python POO - Boson Training School✓ </li>",
        "<li> Tópicos em Álgebra - Equaciona ✓</li>",
        "<li>BootStrap - De iniciante a especialista - Udemy ✓ </li>",
        "<li> Alura - React: Aprendendo como a biblioteca funciona ✓ </li>",
        "<li> Alura - Redes de Computadores: Introdução, conceitos e prática ✓ </li>",
        "<li> Alura - Rest com NodeJS: API com Express e MySQL - cursando </li>",
        "<li> Equaciona - Cálculo - cursando </li>",
        "<li> React II – Alura ✓ </li>",
        "<li> React Nativo – Alura ✓ </li>",
        "<li> Linux I – Alura ✓ </li>",
        "<li> Linux II – Alura ✓ </li>",
        "<li> Docker – Alura – cursando</li>",
        "<li> Python to Data Science – Alura – cursando</li>",
        "<li> Arquitetura de Computadores: Por trás de como seu programa funciona – Alura  ✓</li>",
        "<li> React Native com Expo – Alura – cursando</li>",
        "<li> ORM com NodeJs: Api com Sequelize e MySQL – Alura – cursando</li>",
        "<li> React Functions – Alura – cursando</li>",
 ],
 "Español":
 [
    "<li>ReactJs I - Alura ✓</li>",
    "<li>ReactNative I - Alura ✓</li>",
    "<li> Base de datos, MySQL - Curso en video ✓ </li>",
    "<li> HTML5 y CSS3, módulo I y II - Curso en video ✓ </li>",
    "<li> Javascript - Curso en video ✓ </li>",
    "<li> Introducción al diseño web adaptable - FreeCodeCamp ✓ </li>",
    "<li> Git y GitHub -Teacher José de Assis ✓ </li>",
    "<li> Python POO - Boson Training School✓ </li>",
    "<li> Temas en Álgebra - Equaciona ✓ </li>",
    "<li> BootStrap - De principiante a experto - Udemy ✓ </li>",
    "<li> Alura - React: Aprender cómo funciona la biblioteca ✓ </li>",
    "<li> Alura - Redes de computadoras: Introducción, conceptos y práctica ✓ </li>",
    "<li> Alura - Rest con NodeJS: API con Express y MySQL - estudiando </li>",
    "<li> Equaciona - Cálculo - estudiando </li>",
    "<li> React II – Alura ✓</li>",
    "<li> React Native – Alura ✓</li>",
    "<li> Linux I: Alura ✓</li>",
    "<li> Linux II – Alura ✓</li>",
    "<li> Arquitectura informática: Detrás de cómo funciona su programa – Alura ✓</li>",
    "<li> Docker – Alura – asistiendo</li>",
    "<li> Python a Data Science – Alura – estudiando</li>",
    "<li> React Native con Expo – Alura – estudiando</li>",
    "<li> ORM con NodeJs: Api con Sequelize y MySQL – Alura – estudiando</li>",
    "<li> Funciones React – Alura – estudiando</li>",
],
"Italiano":
[
    "<li>React Js I - Alura ✓</li>",
    "<li>React Native I - Alura ✓</li>",
    "<li>Python, Modulo I, II e III - Videocorso ✓</li>",
    "<li>Database, MySQL - Videocorso ✓</li>",
    "<li>HTML5 e CSS3, modulo I e II - Videocorso ✓</li>",
    "<li>Javascript - Videocorso ✓</li>",
    "<li>Introduzione al Responsive Web Design - *Gratuito*CodeCamp ✓</li>",
    "<li>Git e GitHub -Insegnante José de Assis ✓</li><li>Python POO - Boson Training School ✓</li>",
    "<li>Argomenti di Algebra - Equaciona ✓</li>",
    "<li>BootStrap - Dal principiante all'esperto - Udemy ✓</li>",
    "<li>Alura – React: imparare come funziona la biblioteca ✓</li>",
    "<li>Alura – Reti informatiche: introduzione, concetti e pratica ✓</li>",
    "<li>Alura – Rest con NodeJS: API con Express e MySQL – studiando</li>",
    "<li>Equaciona – Calcolo – studiando</li>",
    "<li>React II – Alura ✓ </li>",
    "<li>React Native – Alura ✓ </li>",
    "<li>Linux I – Alura ✓ </li>",
    "<li>Linux II – Alura ✓ </li>",
    "<li>Architettura del computer: dietro come funziona il tuo programma – Alura  ✓</li>",
    "<li>Docker – Alura – presente</li>",
    "<li>Python to Data Science – Alura – studia</li>",
    "<li>React Native con Expo – Alura – studiare</li>",
    "<li>ORM con NodeJs: Api con Sequelize e MySQL – Alura – studio</li>",
    "<li>Funzioni React – Alura – studiare</li>",
    
]
}


const localStorageLang = localStorage.getItem("selectedLang")

const handleSetLang = (HTMLlang, attributeId, attributeLang) => {
    changeHtmlLang(HTMLlang)

    changeFlag(attributeLang, attributeId)

    changeLanguage(attributeLang)

    changeCourses(attributeLang)
}

if(localStorageLang){
    const element = document.querySelector(`#${localStorageLang}`)

     
    const attributeLang = element.getAttribute("Language")//It gets the actual language presented on the page
    const attributeId = element.getAttribute("id")//The it that will make the flag change
    const HTMLlang = element.getAttribute("HTMLlang")//Get the HTML lang to change
    
    localStorage.setItem("selectedLang", attributeId)
    console.log(attributeId)

    
    /*--------------
    Resume Atributes
    --------------*/
    changeHtmlLang(HTMLlang)

    changeFlag(attributeLang, attributeId)

    changeLanguage(attributeLang)

    changeCourses(attributeLang)
    
}
else{
    // it is the first time that the user enters in the website it will return its browser language
    let userRawLang = navigator.language || navigator.userLanguage; 
    let cleanUserLang = userRawLang.substring(0,2)

    let HTMLlang,
        Language,
        attributeId;

    switch (cleanUserLang) {
        case 'pt':
            attributeId ='br'
            HTMLlang="pt-br" 
            Language="Português"
            break

        case 'es':
            attributeId ='es'
            HTMLlang="es"
            Language="Español"  
            break

        case 'it':
            attributeId ='it'
            HTMLlang="it" 
            Language="Italiano" 
            break

            
        default:
        console.log("hahaahaahahahahahahahahahah")
        attributeId ='us'
        HTMLlang="en"  
        Language="English" 
        break
      }
    
    handleSetLang(HTMLlang, attributeId, Language)
      
}

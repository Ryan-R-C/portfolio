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
const portfolio = document.querySelector("#portfolio")
const resume = document.querySelector   ("#resume")
const contact = document.querySelector  ("#contact")
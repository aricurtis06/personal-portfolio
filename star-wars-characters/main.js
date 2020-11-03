
import{ people } from './data/people.js'

const mainContent = document.querySelector('#main')
populateDOM(people)

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

const maleButton = document.createElement ('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

const femaleButton = document.createElement ('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const nbButton = document.createElement ('button')
maleButton.textContent = 'Other Characters'
mainHeader.appendChild(nbButton)

const maleCharacters = people.filter((person) => person.gender === 'male')
const femaleCharacters = people.filter((person) => person.gender === 'female')
const nbCharacters = people.filter((thing) => {
    if (thing.gender === 'n/a' ||
        thing.gender === 'none' ||
        thing.gender === 'hermaphrodite'
         ) {
        return thing
    }
})


maleButton.addEventListener('click', () => populateDOM(maleCharacters))
femaleButton.addEventListener('click', () => populateDOM(maleCharacters))
otherButton.addEventListener('click', () => populateDOM(maleCharacters))

function populateDOM(characters){
    removeChildren(mainContent)
characters.forEach((element)=> {
        const charFigure = document.createElement('figure')
    const chatImg = document.createElement('img')
    let charNum = getLastNumber(element.url)
    charImg.src=`https://starwars-visualguide.com/assets/img/characters/1.jpg`
    charImg.addEventListener('error',()=> charImg.hidden = true)
    const charCaption = document.createElement('figcaption')
    charCaption.textContent= element.name

charFigure.appendChild(charImg)
charFigure.appendChild(charCaption)
    
mainContent.appendChild(charFigure)
})
}

//let theUrl = "https://swapi.co/api/people/2/"

function getLastNumber(url){
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start)=== '/'){
        start++
    }
    return url.slice (start, end)
}
function removeChildren(container){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}
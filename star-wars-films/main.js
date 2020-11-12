import{ films } from '../data/films (1)'
import {getLastNumber} from '../utils/index.js'

const main = document.querySelector('main')

for (let step = 0; step < 7; step ++){
let figure = document.createElement(' figure')
let figImg = document.createElement('img')
figImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg`
let figCaption = document.createElement('figcaption')

const foundFilm = films.find(film => getLastNumber(film.url) == (step +1))
figure.textContent = films[step].title

figure.appendChild(figImg)
figure.appendChild(figCaption)

main.appendChild(figure)
}

/*
 //runs 7 times, with values of step 0-6
    let newImg = document.createElement('img') //new image instance
    newImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg` //(step + 1)//set the source of it or nothing will show
    //now append the image to the DOM somehow
    main.appendChild(newImg)
    console.log(film.title);
   // console.log (films[step]);


people.forEach(person => {
    let newParagraph = document.body.appendChild(document.createElement('p'))
    newParagraph.textContent = person.name
})


console.log(people.length)

console.log(films[0])

const film1 = document.querySelector('.filmlist')
film1.textContent = films[0].title

const film2 = document.querySelector('.filmlist')
film1.textContent = films[1].title

films.forEach(element => {
    console.log(element.title)
    filmList.textContent = element.title

    for (const film of films){
    let newImg = document.createElement('img') //new image instance
    newImg.src = 'https://starwars-visualguide.com/assets/img/characters/2.jpg' //set the source of it or nothing will show
    //now append the image to the DOM somehow
    main.appendChild(newImg)
    console.log(film.title);
}
}) */

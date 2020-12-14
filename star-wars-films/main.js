import{ films } from '../data/films.js'
import {getLastNumber} from '../utils/index.js'

const main = document.querySelector('main')

for (let step = 0; step < 7; step++){
    //as long as step is less than 7, incriment it by 1 
    let figure = document.createElement('figure')
    let newImg = document.createElement('img') //new image instance
    newImg.src = `https://starwars-visualguide.com/assets/img/films/${step + 1}.jpg` 
    //set the source of it or nothing will show
    //now append the image to the DOM somehow
    let figCaption = document.createElement('figcaption')
    figCaption.textContent = films[step].title

    figure.appendChild(figCaption)
    figure.appendChild(newImg)
    main.appendChild(figure)
    }







  /*  for (const film of films){
    let newImg = document.createElement('img') //new image instance
    newImg.src = 'https://starwars-visualguide.com/assets/img/films/2.jpg' //set the source of it or nothing will show
    //now append the image to the DOM somehow
    main.appendChild(newImg)
    console.log(film.title);*/


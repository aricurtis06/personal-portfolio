const { removeChildren } = require("../utils")

//reusable async function to fetch data from the provided url
async function getAPIData(url){
    try{
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

//pokemon?limit=25

//now, use the async getAPIData function
function loadPage (){
    getAPIData(`https://pokeapi.co/api/v2/pokemon`).then
    (async (data)=> {
        for (const pokemon of data.results ){
            await getAPIData(pokemon.url).then((pokeData) => {
                populatePokeCard(pokeData)
            })
        }
    })
} 
console.log(pokeArray)


function getImageFileName(pokemon){
    if (pokemon.id <10){
        return `00${pokemon.id}`
    } else if (pokemon.id >9 && pokemon.id < 99){
        return `0${pokemon.id}`
    }else if (pokemon,id >99 && pokemon.id <300){
        return `${pokemon.id}`
    }
}
function pokeNumber(pokemon){
    if (pokemon.id <10){
        return `00${pokemon.id}`
    } else if (pokemon.id >10){
        return false
    }
}

const pokemonGrid = document.querySelector('.pokemonGrid')
const loadButton = document.querySelector('button')
const newButton = document.querySelector('#newPokemon')

loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.hidden = true
})


newButton.addEventListener('click', ()=>{
    let pokeName = prompt("What's your new Pokemon's name?");
    populatePokeCard(createNewPokemon(pokeName))
})

function getImageFileName(pokemon){
    if (pokemon.id <10){
        return `00${pokemon.id}`
    } else if (pokemon.id >9 && pokemon.id < 99){
        return `0${pokemon.id}`
    }else if (pokemon,id >99 && pokemon.id <300){
        return `${pokemon.id}`
    }
}
function pokeNumber(pokemon){
    if (pokemon.id <10){
        return `00${pokemon.id}`
    } else if (pokemon.id >10){
        return false
    }
}

function populatePokeCard(pokemon){
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', () =>{
        pokeCard.classList.toggle('is-flipped')
    })


    pokeCard.appendChild(populateCardFront(pokemon))
    pokeCard.appendChild(populateCardBack(pokemon))
    pokeScene.appendChild(pokeCard)
    pokemonGrid.appendChild(pokeScene)


function populateCardFront(pokemon){
let cardFront = document.createElement('div')
cardFront.className = `card__face card__face--front`
let frontLabel = document.createElement('p')
let frontImage = document.createElement('img')
frontLabel.textContent = pokemon.name
frontImage.src = `../images/pokemon/${getImageFileName(pokemon)}.png`
cardFront.appendChild(frontImage)
cardFront.appendChild(frontLabel)
return cardFront
}

function populateCardBack(pokemon){
let cardBack = document.createElement('div')
cardBack.className = `card__face card__face--back`
let backLabel = document.createElement('h3')
backLabel.textContent= `Abilities`
let abilityList = document.createElement('ul')
pokemon.abilities.forEach(ability=> {
    let abilityName = document.createElement('li')
    abilityName.textContent = ability.ability.name
    abilityList.appendChild(abilityName)
})
let movesLabel = document.createElement('h3')
movesLabel.textContent = 'Stats:'
let moveAccuracy = document.createElement('h4')
let pokeWeight = document.createElement('h5')
pokeWeight.textContent = `Weight: ${pokemon.weight} lbs.`
//const mostAccurateMove = getBestAccuracyAndPower(pokemon.moves)
//moveAccuracy.textContent = `${mostAccurateMove.name}`
cardBack.appendChild(backLabel)
cardBack.appendChild(abilityList)
cardBack.appendChild(movesLabel)
cardBack.appendChild(moveAccuracy)
cardBack.appendChild(pokeWeight)
return cardBack
}

function getBestAccuracy(pokemoves){
    return pokemoves.reduce((mostAccurate, move) => {
        getAPIData(move.move.url).then
        (async (data) => {
            console.log(data.accuracy, data.power)
        })
        //return mostAccurate.accuracy > move.accuracy ? mostAccurate : move;
    }, {});
}
const pokeButton = document.createElement('button')
pokeButton.textContent= 'Catch em!'
mainHeader.appendChild(pokeButton)

pokeButton.addEventListener('click', () =>{
    getAPIData(`https://pokeapi.do/api/v2/pokemon/?limit=25&offset=2`).then
    (async (data) =>{
        for (const pokemon of data.results){
            await getAPIData(pokemon.url).then((pokeData) =>{
                populatePokeCard(pokeData)
            })
        }
    })
})


function getImageFileName(pokemon){
    if (pokemon.id <10){
        return `00${pokemon.id}`
    } else if (pokemon.id >9 && pokemon.id < 99){
        return `0${pokemon.id}`
    }else if (pokemon,id >99 && pokemon.id <300){
        return `${pokemon.id}`
    }
}
function pokeNumber(pokemon){
    if (pokemon.id <10){
        return `00${pokemon.id}`
    } else if (pokemon.id >10){
        return false
    }
}

/*ImageFileName(pokemon){
    if (pokemon.id < 25){
        return `00${pokemon.id}`
    }else if (pokemon.id > 9 && pokemon.id < 99){
        return `0${pokemon.id}`    
    }
}*/

function Pokemon(name, height, weight, abilities){
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.id = 900
}
let ario = new Pokemon('Ario', 91, 120, ['cry', 'rest', 'read'])}





    


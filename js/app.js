'use strict'

import './router.js'
import { getCharacters } from './model.js'

let content = document.getElementById('content')

const createCharacters = async (id) => {
    const paths = {
        '1' : 'manga/1517',
        '2' : 'manga/1630',
        '3' : 'anime/20899',
        '4' : 'anime/31933',
        '5' : 'anime/37991',
        '6' : 'anime/48661'
    }

    let part =  paths[id]
    let characters = await getCharacters(part)
    return characters.data
}

export const showCharactersCard = async () => {

    let id = window.event.currentTarget.id
    let characters = await createCharacters(id)
    console.log(characters) 
    characters.map(createCharactersCard)

}

const createCharactersCard = (characters) =>{

    let character_box =  window.parent.document.getElementById('character-box')

    let character_container = document.createElement('a')
    character_container.classList.add('character-container')
    character_container.setAttribute('href','/jojo-api-publica/parte/character')
    character_container.addEventListener("click", route)

    console.log(character_container);
    console.log(character_box);
    character_box[1].replaceChildren([character_container])

    let character_image =document.createElement('img')


    let character_name =document.createElement('p')
    console.log(character_box);


}

window.showCharactersCard = showCharactersCard
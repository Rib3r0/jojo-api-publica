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

export const showCharactersCard = async (id) => {

    
    let characters = await createCharacters(id)
    console.log(characters) 
    createCharactersCard(characters)


}

const createCharactersCard = (characters) =>{

    let character_box =  document.getElementById('character-box')
    let charactersCard = {}
    characters.forEach( character => {

    
        let character_container = document.createElement('a')
        character_container.classList.add('character-container')
        character_container.setAttribute('href','/jojo-api-publica/parte/character')
        character_container.addEventListener("click", route)
    
    
    
        let character_image =document.createElement('img')
        //console.log(character.character.images.webp.image_url)
        character_image.setAttribute('src',character.character.images.jpg.image_url)
        character_container.append(character_image)
    
        let character_name =document.createElement('p')
        character_name.textContent = character.character.name
        //console.log(character.character.name)
        character_container.append(character_name)

        console.log(character_container);
        character_box.append(character_container)
    });


    character_box.replaceChildren(charactersCard)

}

window.showCharactersCard = showCharactersCard
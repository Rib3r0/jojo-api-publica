'use strict'

import './router.js'
import { getCharacterInfo, getCharacters } from './model.js'

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

const getCharacterImages = async (id) => {

    let images, infos = await getCharacterInfo(id)
    return images , infos

}


export const showCharactersCard = async (id) => {

    let characters = await createCharacters(id)
    console.log(characters) 
    createCharactersCard(characters)

}

export const showCharacterImages = async (id) => {
    
    let images = await getCharacterImages(id)
    console.log(images) 
    createCharacterImages(images[0], images[1])

}


const createCharactersCard = (characters) =>{

    let character_box =  document.getElementById('character-box')
    let charactersCard = document.createElement('div')
    charactersCard.classList.add('character-box')
    characters.forEach( character => {

    
        let character_link = document.createElement('a')
        let character_container = document.createElement('div')
        character_link.classList.add('character-container')
        character_container.setAttribute('id',character.character.mal_id)
        character_link.setAttribute('href','/jojo-api-publica/parte/character')
        character_link.onclick = route
    
    
    
        let character_image =document.createElement('img')
        character_image.setAttribute('src',character.character.images.jpg.image_url)
        character_image.setAttribute('id',character.character.mal_id)
        
        character_link.append(character_image)
    
        let character_name =document.createElement('p')
        character_name.textContent = character.character.name

        character_name.setAttribute('id',character.character.mal_id)
        character_link.append(character_name)
        character_container.append(character_link)

        console.log(character_container);
        charactersCard.append(character_container)
    });


    character_box.replaceChildren(charactersCard)

}

const createCharacterImages = (images, infos) =>{

    let character_images =  document.getElementById('character-images')
    let charactersCard = document.createElement('div')
    charactersCard.classList.add("character-images")
    images.forEach( image => {
    
        let character_image =document.createElement('img')
        character_image.setAttribute('src',image.jpg.image_url)

        console.log(character_image);
        charactersCard.append(character_image)
    });

    let character_main_image =  document.getElementById('main__image')
    character_main_image.setAttribute('src',infos.images.jpg.image_url)

    let character_name =  document.getElementById('main__name')
    character_name.textContent = infos.name

    character_images.replaceChildren(charactersCard)

}


window.showCharactersCard = showCharactersCard
window.showCharacterImages= showCharacterImages
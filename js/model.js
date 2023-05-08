'use strict'

export const getCharacters = async (path) => {

    let url = `https://api.jikan.moe/v4/${path}/characters`

    let response = await fetch(url)

    let characters = await response.json()

    return characters

}

export const getCharacterInfo = async (path) => {

    let urlImages = `https://api.jikan.moe/v4/characters/${path}/pictures`

    let urlInfo = `https://api.jikan.moe/v4/characters/${path}/full`

    let response = await fetch(urlImages)

    let images = await response.json()

    response = await fetch(urlInfo)

    let infos = await response.json()

    console.log(infos);
    console.log(images);

    return [images.data, infos.data]

}

'use strict'

export const getCharacters = async (path) => {

    let url = `https://api.jikan.moe/v4/${path}/characters`

    let response = await fetch(url)

    let characters = await response.json()

    return characters

}

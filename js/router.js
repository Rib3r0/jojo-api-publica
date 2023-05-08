'use strict'

import { showCharacterImages, showCharactersCard } from './app.js'

const routes = {
    '/jojo-api-publica/'                : '/jojo-api-publica/pages/main.html',
    '/jojo-api-publica/parte'           : '/jojo-api-publica/pages/parte.html',
    '/jojo-api-publica/parte/character' : '/jojo-api-publica/pages/character.html'
}

var parte = 0

const routeInit = async () => {

    const response = await fetch('/jojo-api-publica/pages/main.html')
    const html = await response.text()
    document.getElementById('content').innerHTML = html
}



const route = async (part) => {
    parte = part
    console.log(parte);
    window.event.preventDefault()
    window.history.pushState({},"", window.event.currentTarget.href)
        
    const path = window.location.pathname
    const route = routes[path]
    
    const response = await fetch(route)
    const html = await response.text()
    
    document.getElementById('content').innerHTML = html
    
    if(route == '/jojo-api-publica/pages/parte.html'){
        showCharactersCard(part.id)
    }
    if(route == '/jojo-api-publica/pages/character.html'){
        console.log(parte.target.id);
        showCharacterImages(parte.target.id)
    }
    

}

routeInit()


window.route = route
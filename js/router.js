'use strict'

import { showCharactersCard } from './app.js'

const routes = {
    '/jojo-api-publica/'                : '/jojo-api-publica/pages/main.html',
    '/jojo-api-publica/parte'           : '/jojo-api-publica/pages/parte.html',
    '/jojo-api-publica/parte/character' : '/jojo-api-publica/pages/character.html'
}

var parte = 0

const route = async (part) => {

    if(part == 0){
        const response = await fetch('/jojo-api-publica/pages/main.html')
        const html = await response.text()
        document.getElementById('content').innerHTML = html
    }else{
        window.event.preventDefault()
        window.history.pushState({},"", window.event.currentTarget.href)
        
        const path = window.location.pathname
        const route = routes[path]
    
        const response = await fetch(route)
        const html = await response.text()
    
        document.getElementById('content').innerHTML = html
    
        if(route == '/jojo-api-publica/pages/parte.html'){
            showCharactersCard(part)
        }
    }

}

route(0)


window.route = route
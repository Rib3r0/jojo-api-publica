'use strict'

const routes = {
    '/'         : '/pages/main.html',
    '/parte' :   '/pages/parte.html',
    '/parte/character'     : '/pages/azul.html'
}

const route = async (part) => {

    if(part == 0){
        const response = await fetch('/pages/main.html')
        const html = await response.text()
        document.getElementById('content').innerHTML = html
        console.log("oi");
    }else{
        window.event.preventDefault()
        window.history.pushState({},"", window.event.currentTarget.href)
        
        const path = window.location.pathname
        console.log(path)
        const route = routes[path]
    
        const response = await fetch(route)
        const html = await response.text()
    
        document.getElementById('content').innerHTML = html
    
        console.log(html)
    }

}

route(0)


window.route = route
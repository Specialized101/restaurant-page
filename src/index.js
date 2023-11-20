import { loadHome } from './home.js'
import { loadMenu } from './menu.js'
import { loadContact } from './contact.js'
import './style.css'

const content = document.querySelector('#content')
const tabs = ['home', 'menu', 'contact']

loadHome()
createListeners()

function createListeners () {
    tabs.forEach(tab => {
        document.querySelector(`#${tab}`).addEventListener('click', () => {
            // clear content
            content.replaceChildren()
    
            switch (tab) {
                case 'home':
                    loadHome()
                    break;
                case 'menu':
                    loadMenu()
                    break;
                case 'contact':
                    loadContact()
                    break;
            }

            // recreate the listeners after clearing content and loading the page content
            createListeners()
        })
    })
}
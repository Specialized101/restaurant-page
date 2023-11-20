import { header } from './header.js'
import { footer } from './footer.js'

function loadContact () {
    const contentDiv = document.querySelector('#content')
    const main = document.createElement('main')
    const h1 = document.createElement('Contact Us!')

    main.classList.add('main-content')
    main.appendChild(h1)

    contentDiv.appendChild(header())

    contentDiv.appendChild(main)

    contentDiv.appendChild(footer())
}


export {
    loadContact
}
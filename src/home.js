import { header } from './header.js'
import { footer } from './footer.js'
import Burger from './images/burger.jpg'

function loadHome () {
    const contentDiv = document.querySelector('#content')
    const main = document.createElement('main')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const burgerImg = new Image()

    h1.textContent = 'The Best Burger in Town!'
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam quidem necessitatibus architecto ducimus porro rerum incidunt expedita eius voluptatem maxime nam quasi esse quae, molestias voluptatibus, dolorum, voluptatum velit dignissimos iure! Voluptas, totam consequatur! Quos corporis vitae ipsum temporibus! Iste pariatur fuga optio totam, illum est laudantium incidunt ipsam!' 
    burgerImg.src = Burger
    burgerImg.alt = 'Juice Burgers'

    main.classList.add('main-content')
    main.appendChild(h1)
    main.appendChild(burgerImg)
    main.appendChild(p)

    contentDiv.appendChild(header())

    contentDiv.appendChild(main)

    contentDiv.appendChild(footer())
}


export {
    loadHome
}
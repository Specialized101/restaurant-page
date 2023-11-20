import { header } from './header.js'
import { footer } from './footer.js'
import Data from './data.json'
import BurgerImage from './images/burger-menu.jpg'

function loadMenu () {
    const contentDiv = document.querySelector('#content')
    const main = document.createElement('main')
    const h1 = document.createElement('h1')
    const menus = document.createElement('div')
    
    h1.textContent = 'Top Menus!'

    for (let menu in Data) {

        if (Data.hasOwnProperty(menu)) {
            const menuData = Data[menu]

            const menuCard = document.createElement('div')
            const ul = document.createElement('ul')
            const title = document.createElement('li')
            const price = document.createElement('li')
            const description = document.createElement('li')
            const ingredients = document.createElement('li')
            const ingredientsList = document.createElement('ul')
            const burgerImg = new Image()

            burgerImg.src = BurgerImage
            burgerImg.alt = "Menu's Burger image"
            title.textContent = menuData.title
            price.textContent = `$${menuData.price}`
            description.textContent = menuData.description

            for (let ingredient in menuData.ingredients){
                if (menuData.ingredients.hasOwnProperty(ingredient)){
                    let ingredientLi = document.createElement('li')
                    ingredientLi.textContent = ingredient
                    ingredientsList.appendChild(ingredientLi)
                }
            }
            ingredients.appendChild(ingredientsList)
    
            ul.appendChild(title)
            ul.appendChild(price)
            ul.appendChild(description)
            ul.appendChild(ingredients)
    
            menuCard.classList.add('card')
    
            menuCard.appendChild(burgerImg)
            menuCard.appendChild(ul)
            menus.appendChild(menuCard)
        } 
        
        menus.classList.add('cards')

    }


    main.classList.add('main-content')
    main.appendChild(h1)
    main.appendChild(menus)
    
    contentDiv.appendChild(header())

    contentDiv.appendChild(main)

    contentDiv.appendChild(footer())
}

export {
    loadMenu
}
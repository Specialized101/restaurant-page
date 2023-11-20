

const header = () => {
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')
    const liHome = document.createElement('li')
    const liMenu = document.createElement('li')
    const liContact = document.createElement('li')

    liHome.textContent = 'Home'
    liHome.classList.add('nav-link')
    liHome.setAttribute('id', 'home')

    liMenu.textContent = 'Menu'
    liMenu.classList.add('nav-link')
    liMenu.setAttribute('id', 'home')
    
    liContact.textContent = 'Contact'
    liContact.classList.add('nav-link')
    liContact.setAttribute('id', 'home')

    ul.classList.add('nav-links')
    ul.appendChild(liHome)
    ul.appendChild(liMenu)
    ul.appendChild(liContact)

    nav.classList.add('navbar')
    nav.appendChild(ul)

    header.classList.add('header')
    header.appendChild(nav)

    return header
}

export {
    header
}
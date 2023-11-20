import Instagram from './images/insta.png'
import Facebook from './images/facebook.png'

const footer = () => {
    const footer = document.createElement('footer')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const divSocials = document.createElement('div')
    
    p1.textContent = 'Join Us!'
    p2.textContent = 'Copyright © 2023 - Specialized101'

    const instagramLogo = new Image()
    instagramLogo.src = Instagram
    instagramLogo.alt = 'Instragram Logo'
    
    const facebookLogo = new Image()
    facebookLogo.src = Facebook
    facebookLogo.alt = 'Facebook Logo'

    divSocials.classList.add('social-links')

    divSocials.appendChild(facebookLogo)
    divSocials.appendChild(instagramLogo)

    footer.classList.add('footer')

    footer.appendChild(p1)
    footer.appendChild(divSocials)
    footer.appendChild(p2)

    return footer

}


export {
    footer
}
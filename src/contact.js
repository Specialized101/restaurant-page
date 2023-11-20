import { header } from './header.js'
import { footer } from './footer.js'

function loadContact () {
    const contentDiv = document.querySelector('#content')
    const main = document.createElement('main')
    const h1 = document.createElement('h1')
    const form = document.createElement('form')
    const inputs = ['name', 'email', 'request']
    const submitBtn = document.createElement('button')

    h1.textContent = 'Contact Us!'

    inputs.forEach(item => {
        let div = document.createElement('div')
        let label = document.createElement('label')
        let input
        
        if (item === 'request') {
            input = document.createElement('textarea')
            input.setAttribute('cols', '50')
            input.setAttribute('rows', '10')
        } else {
            input = document.createElement('input')
            input.setAttribute('type', item === 'email'? 'email' : 'text')
        }
        
        label.setAttribute('for', item)
        label.textContent = `Your ${item}`

        input.setAttribute('id', item)
        input.setAttribute('name', item)

        div.appendChild(label)
        div.appendChild(input)

        form.appendChild(div)

    })

    submitBtn.setAttribute('type', 'submit')
    submitBtn.textContent = 'Submit'

    form.appendChild(submitBtn)

    form.classList.add('contact-form')
    main.classList.add('main-content')
    main.appendChild(h1)
    main.appendChild(form)

    contentDiv.appendChild(header())

    contentDiv.appendChild(main)

    contentDiv.appendChild(footer())
}


export {
    loadContact
}
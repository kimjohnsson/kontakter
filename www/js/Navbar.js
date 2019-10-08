let logo = document.createElement('h1')
logo.className = 'logo'
logo.innerHTML = 'Kontakter AB'
nav.append(logo)


let ul = document.createElement('ul')
nav.append(ul)

let li = document.createElement('li')
li.id = '/'
li.innerHTML = 'Contact List'

let li2 = document.createElement('li')
li2.id = '/create_contact'
li2.innerHTML = 'Create Contact'

ul.append(li, li2)
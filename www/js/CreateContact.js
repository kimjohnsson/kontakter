class CreateContact{
    constructor(main){
        let createContact = document.createElement('section')
        createContact.className = 'createContact'
        main.append(createContact)
        
        let nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.name = 'fname'
        nameInput.placeholder = 'First Name'
        createContact.append(nameInput)
        
        let lastNameInput = document.createElement('input')
        lastNameInput.type = 'text'
        lastNameInput.name = 'lname'
        lastNameInput.placeholder = 'Last Name'
        createContact.append(lastNameInput)
    }
}
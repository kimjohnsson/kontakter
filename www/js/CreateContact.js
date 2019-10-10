class CreateContact{
    constructor(main){
        this.main = main

        this.renderInput()
    }

    renderInput(){

        this.removeInputs()

        this.numberOfNumbers = 1
        this.numberOfEmails = 1

        this.createContact = document.createElement('section')
        this.createContact.className = 'createContact'
        this.main.append(this.createContact)

        let headerText = document.createElement('h1')
        headerText.innerHTML = 'Create Contact'
        this.createContact.append(headerText)

        let nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.name = 'name'
        nameInput.className = 'name'
        nameInput.placeholder = 'Name'
        this.createContact.append(nameInput)

        this.numbers = document.createElement('div')
        this.numbers.className = 'numbers'
        this.createContact.append(this.numbers)
        this.numbers.append(new NumberInput(this.numberOfNumbers))

        this.emails = document.createElement('div')
        this.emails.className = 'emails'
        this.createContact.append(this.emails)
        this.emails.append(new EmailInput(this.numberOfEmails))

        let createButton = document.createElement('input')
        createButton.type = 'submit'
        createButton.id = 'createContactButton'
        createButton.value = 'Create Contact'
        this.createContact.append(createButton);

    }

    addNumber(){
        this.numberOfNumbers += 1;
        this.numbers.append(new NumberInput(this.numberOfNumbers))
    }

    addEmail(){
        this.numberOfEmails += 1;
        this.emails.append(new EmailInput(this.numberOfEmails))
    }

    removeInputs(){
        let createContactForm = document.querySelectorAll('.createContact');
        for(let form of createContactForm){
            form.remove()
        }  
    }
}
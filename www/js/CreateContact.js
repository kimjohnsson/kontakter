class CreateContact{
    constructor(main){
        this.numberOfNumbers = 1
        this.numberOfEmails = 1

        let createContact = document.createElement('section')
        createContact.className = 'createContact'
        main.append(createContact)

        let headerText = document.createElement('h1')
        headerText.innerHTML = 'Create Contact'
        createContact.append(headerText)
        
        let nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.name = 'name'
        nameInput.placeholder = 'Name'
        createContact.append(nameInput)

        this.numbers = document.createElement('div')
        this.numbers.className = 'numbers'
        createContact.append(this.numbers)
        this.numbers.append(new NumberInput(this.numberOfNumbers))

        this.emails = document.createElement('div')
        this.emails.className = 'emails'
        createContact.append(this.emails)
        this.emails.append(new EmailInput(this.numberOfEmails))

        let createButton = document.createElement('input')
        createButton.type = 'submit'
        createButton.id = 'createContactButton'
        createButton.value = 'Create Contact'
        createContact.append(createButton);
    }

    addNumber(){
        this.numberOfNumbers += 1;
        this.numbers.append(new NumberInput(this.numberOfNumbers))
    }

    addEmail(){
        this.numberOfEmails += 1;
        this.emails.append(new EmailInput(this.numberOfEmails))
    }
}
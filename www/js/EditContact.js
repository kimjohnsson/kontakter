class EditContact{
    constructor(main, contact){
        this.contact = contact
        this.main = main
        this.numberOfNumbers = 1
        this.numberOfEmails = 1
        this.emailInputName = 'editEmail'
        this.numberInputName = 'editNumber'
    }

    renderContactInfo(contactInfo){
        this.removeEditInputs()

        this.editContact = document.createElement('section')
        this.editContact.className = 'editContactPage'
        this.editContact.style.display = 'block'
        this.main.append(this.editContact)

        let headerText = document.createElement('h1')
        headerText.innerHTML = 'Edit Contact'
        this.editContact.append(headerText)

        let contact = contactInfo[contactInfo.length -1]

        let nameInput = document.createElement('input')
        nameInput.type = 'text'
        nameInput.name = 'editName'
        nameInput.className = 'name'
        nameInput.value = contact.name
        this.editContact.append(nameInput)

        this.numbers = document.createElement('div')
        this.numbers.className = 'numbers'
        this.editContact.append(this.numbers)

        contact.number.forEach((number) =>{

            let numberInput = document.createElement('input')
            numberInput.type = 'text'
            numberInput.name = this.numberInputName
            numberInput.className = 'number'
            numberInput.value = number
            this.numbers.append(numberInput)

            this.numberOfNumbers += 1

        })

        this.numbers.append(new NumberInput(this.numberOfNumbers, this.numberInputName))

        this.emails = document.createElement('div')
        this.emails.className = 'emails'
        this.editContact.append(this.emails)

        contact.email.forEach((email) =>{

            let emailInput = document.createElement('input')
            emailInput.type = 'text'
            emailInput.name = this.emailInputName
            emailInput.className = 'eamil'
            emailInput.value = email
            this.emails.append(emailInput)

            this.numberOfEmails += 1

        })

        this.emails.append(new EmailInput(this.numberOfEmails, this.emailInputName))

        let saveButton = document.createElement('input')
        saveButton.type = 'submit'
        saveButton.id = 'saveContactButton'
        saveButton.value = 'Save Changes'
        this.editContact.append(saveButton);

        this.contactHistory(contactInfo);
    }

    contactHistory(contact){
        if(contact.length > 1){

            let history = [...contact]
            
            history.pop();
            history.reverse();

            let headerText = document.createElement('h1')
            headerText.innerHTML = 'History'
            headerText.id = 'historyH1'
            this.editContact.append(headerText)

            for(let change of history){
    
                let contactInList = document.createElement('div')
                contactInList.className = 'contact'
                this.editContact.append(contactInList)

                let options = document.createElement('div')
                options.className = 'contactOptions'
                contactInList.append(options)

                let restore = document.createElement('p')
                restore.className = 'restore'
                restore.innerHTML = '♻️'
                restore.value = change
                options.append(restore)
    
                let name = document.createElement('p')
                name.className = 'contactName'
                name.innerHTML = change.name
                contactInList.append(name)

                for(let number of change.number){
                    let num = document.createElement('p')
                    num.innerHTML = number
                    contactInList.append(num)
                }

                for(let email of change.email){
                    let mail = document.createElement('p')
                    mail.innerHTML = email
                    contactInList.append(mail)
                }

            }
        }

    }

    addNumber(){
        this.numberOfNumbers += 1;
        this.numbers.append(new NumberInput(this.numberOfNumbers, this.numberInputName))
    }

    addEmail(){
        this.numberOfEmails += 1;
        this.emails.append(new EmailInput(this.numberOfEmails, this.emailInputName))
    }

    removeEditInputs(){
        let editContactForm = document.querySelectorAll('.editContactPage');
        for(let form of editContactForm){
            form.remove()
        }  
    }
}
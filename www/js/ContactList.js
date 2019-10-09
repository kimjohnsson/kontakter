class ContactList{
    constructor(main, contacts){

        this.contacts = contacts

        this.contactList = document.createElement('section')
        this.contactList.className = 'contactList'
        main.append(this.contactList)

        let headerText = document.createElement('h1')
        headerText.innerHTML = 'Contact List'
        this.contactList.append(headerText)

        this.renderContactList()
    }

    renderContactList(){

        if(this.contacts.length <= 0){
            let noContacts = document.createElement('h2')
            noContacts.innerHTML = 'No Contacts Added'
            this.contactList.append(noContacts)
        }else{
            
            for(let contact of this.contacts){

                let contactInList = document.createElement('div')
                contactInList.className = 'contact'
                this.contactList.append(contactInList)

                let name = document.createElement('p')
                name.className = 'contactName'
                name.innerHTML = contact[contact.length-1].name
                contactInList.append(name)

                for(let number of contact[contact.length-1].number){
                    let num = document.createElement('p')
                    num.innerHTML = number
                    contactInList.append(num)
                }

                for(let email of contact[contact.length-1].email){
                    let mail = document.createElement('p')
                    mail.innerHTML = email
                    contactInList.append(mail)
                }

            }
        }

    }
}
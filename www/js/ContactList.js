class ContactList{
    constructor(main){
        let contactList = document.createElement('section')
        contactList.className = 'contactList'
        contactList.innerHTML = 'Contact List'
        main.append(contactList)
    }
}
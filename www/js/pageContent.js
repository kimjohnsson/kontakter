class PageContent {
    constructor(){

        let body = document.getElementsByTagName('body')
        let head = document.getElementsByTagName('head')
        head = head[0]

        let title = document.createElement('title')
        title.innerHTML = 'Contact List'
        
        let nav = document.createElement('nav')
        let main = document.createElement('main')
        let footer = document.createElement('footer')
        
        head.append(title)
        body[0].append(nav, main, footer)

        //load localStorage
        let store;
        try {
        store = JSON.parse(localStorage.store);
        }
        catch(e){
        store = {};
        }
        
        store.save = function(){
        localStorage.store = JSON.stringify(this);
        };

        //create localStorage
        if(!store.contacts){
            store.contacts = [];
            store.save();
        }

        console.log(store.contacts)

        new Navbar(nav, this.event);
        this.contactList = new ContactList(main, store.contacts);
        this.createContact = new CreateContact(main);
        this.editContact = new EditContact(main);
        new PageNotFound(main);
        this.popup = new Popup(main)
        new Footer(footer);
        this.router = new Router(title);

        window.addEventListener('input', e => {

            if(e.target.closest('#number' + this.createContact.numberOfNumbers)){
                this.createContact.addNumber();
            }

            if(e.target.closest('#number' + this.editContact.numberOfNumbers)){
                this.editContact.addNumber();
            }

            if(e.target.closest('#email' + this.createContact.numberOfEmails)){
                this.createContact.addEmail();
            }

            if(e.target.closest('#email' + this.editContact.numberOfEmails)){
                this.editContact.addEmail();
            }
        })

        window.addEventListener('click', e => {

            if(e.target.closest('.deleteContact')){
                console.log(e.target.value)

                store.contacts.forEach((contact, index) => {
                    if(contact === e.target.value){
                        store.contacts.splice(index, 1)
                        store.save()
                        this.contactList.renderContactList()
                    }
                })
            }

            if(e.target.closest('.editContact')){

                this.currentEdit = e.target.value

                this.editContact.renderContactInfo(e.target.value)

                let contactList = document.querySelector('.contactList')
                contactList.style.display = 'none'

                let edit = document.querySelector('.editContactPage')
                edit.style.display = 'block'
            }

            if(e.target.closest('.restore')){

                store.contacts.forEach((contact, index) => {
                    if(contact === this.currentEdit){
                        store.contacts[index].push(e.target.value)
                        store.save()
                    }
                })

                this.editContact.renderContactInfo(this.currentEdit)

                let edit = document.querySelector('.editContactPage')
                edit.style.display = 'block'

                this.popup.popup('Restored!')
            }

            if(e.target.closest('#saveContactButton')){
                let contactNumbers = []
                let contactEmails = []

                let name = document.querySelector('input[name=editName]').value;

                let numbers = document.querySelectorAll('input[name=editNumber]');
                for(let number of numbers){
                    if(number.value){
                        contactNumbers.push(number.value)
                    }
                }

                let emails = document.querySelectorAll('input[name=editEmail]');
                for(let email of emails){
                    if(email.value){
                        contactEmails.push(email.value)
                    }
                }

                let newContact = {name: name, number: contactNumbers, email: contactEmails}

                store.contacts.forEach((contact, index) => {
                    if(contact === this.currentEdit){
                        store.contacts[index].push(newContact)
                        store.save()
                    }
                })

                this.editContact.renderContactInfo(this.currentEdit)

                this.popup.popup('Saved Changes!')
            }

            if(e.target.closest('#createContactButton')){
                let contactNumbers = []
                let contactEmails = []

                let name = document.querySelector('input[name=name]').value;

                let numbers = document.querySelectorAll('input[name=number]');
                for(let number of numbers){
                    if(number.value){
                        contactNumbers.push(number.value)
                    }
                }

                let emails = document.querySelectorAll('input[name=email]');
                for(let email of emails){
                    if(email.value){
                        contactEmails.push(email.value)
                    }
                }

                if(name){

                    let contact = {name: name, number: contactNumbers, email: contactEmails}
                    store.contacts.push([contact])
                    store.save();
    
                    this.popup.popup('Contact Created!')

                }
            }

            if (e.path[2] == nav) {

                this.contactList.renderContactList()
                this.createContact.renderInput()
        
                //add route path to window url
                window.history.pushState({ route: e.path[0].id }, '', e.path[0].id);
        
                this.router.frontendRouter(location.pathname, title);
            }
            // Listen to back/forward
            window.addEventListener("popstate", () => {
                this.router.frontendRouter(location.pathname, title);
            });
        });
    }
}
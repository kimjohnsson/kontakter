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

        console.log(store)

        new Navbar(nav, this.event);
        new ContactList(main);
        this.createContact = new CreateContact(main);
        new PageNotFound(main);
        new Footer(footer);
        new Router(title, nav);

        window.addEventListener('click', e => {
            if(e.target.closest('#number' + this.createContact.numberOfNumbers)){
                this.createContact.addNumber();
            }

            if(e.target.closest('#email' + this.createContact.numberOfEmails)){
                this.createContact.addEmail();
            }

            if(e.target.closest('#createContactButton')){
                let contactNumbers = []
                let contactEmails = []

                let name = document.querySelector('input[name=name]').value;

                let numbers = document.querySelectorAll('input[name=number]');
                for(let number of numbers){
                    contactNumbers.push(number.value)
                }

                let emails = document.querySelectorAll('input[name=email]');
                for(let email of emails){
                    contactEmails.push(email.value)
                }

                contactNumbers.pop()
                contactEmails.pop()

                let contact = {name: name, number: contactNumbers, email: contactEmails}
                store.contacts.push([contact])
                store.save();
            }
        });
    }
}
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
        
        new Navbar(nav);
        new ContactList(main);
        new CreateContact(main);
        new PageNotFound(main);
        new Footer(footer);
        new Router(title, nav);
    }
}
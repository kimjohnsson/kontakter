class Router {
    constructor(title, nav) {
        this.frontendRouter(location.pathname, title);

        window.addEventListener('click',(event) => {
            if (event.path[2] == nav) {
        
                //add route path to window url
                window.history.pushState({ route: event.path[0].id }, '', event.path[0].id);
        
                this.frontendRouter(location.pathname, title);
            }
            // Listen to back/forward
            window.addEventListener("popstate", () => {
                this.frontendRouter(location.pathname, title);
            });
        }, false);
    }

    frontendRouter(path, title) {
        let routes = {
            '/': () => {
                let test = document.getElementsByTagName("main")
                for (let route of test[0].childNodes) {
                    if (route.className === 'contactList') {
                        route.style.display = 'block'
                        title.innerHTML = 'Contact List'
                    } else if (route.style != undefined) {
                        route.style.display = 'none'
                    }
                }
            },
            '/create_contact': () => {
                let test = document.getElementsByTagName("main")
                for (let route of test[0].childNodes) {
                    if (route.className === 'createContact') {
                        route.style.display = 'block'
                        title.innerHTML = 'Create Contact'
                    } else if (route.style != undefined) {
                        route.style.display = 'none'
                    }
                }
            },
            '/404': () => {
                let test = document.getElementsByTagName("main")
                for (let route of test[0].childNodes) {
                    if (route.className === '404') {
                        route.style.display = 'block'
                        title.innerHTML = '404 Page Not Found'
                    } else if (route.style != undefined) {
                        route.style.display = 'none'
                    }
                }
            },
        };
        // no path found then change path to '/404';
        path = routes[path] ? path : '/404';
        // run the function associated with the path
        routes[path]();
    }
}
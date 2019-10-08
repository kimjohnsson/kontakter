let pageNotFound = document.createElement('section')
pageNotFound.className = '404'
main.append(pageNotFound)

let errorText = document.createElement('h1')
errorText.innerHTML = '404 Page Not Found'
pageNotFound.append(errorText)
body = document.getElementsByTagName('body')
head = document.getElementsByTagName('head')
head = head[0]

let title = document.createElement('title')
title.innerHTML = 'Contact List'

let nav = document.createElement('nav')
let main = document.createElement('main')
let footer = document.createElement('footer')

head.append(title)
body[0].append(nav, main, footer)

class Popup {
    constructor(main){
        this.main = main
    }

    popup(msg){
        let popup = document.createElement('div')
        popup.className = 'popup'
        popup.style.display = 'block'
        this.main.append(popup)

        let popupMsg = document.createElement('p')
        popupMsg.innerHTML = msg
        popup.append(popupMsg)

        setTimeout(() => { 
            popup.remove();
        }, 3000);
    }

}
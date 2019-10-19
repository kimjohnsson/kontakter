class EmailInput{
    constructor(nr, name){
        let email = document.createElement('input')
        email.type = 'text'
        email.name = name
        email.id = 'email' + nr
        email.placeholder = 'Add Email'
        return email
    }
}
class EmailInput{
    constructor(nr){
        let email = document.createElement('input')
        email.type = 'text'
        email.name = 'email'
        email.id = 'email' + nr
        email.placeholder = 'Add Email'
        return email
    }
}
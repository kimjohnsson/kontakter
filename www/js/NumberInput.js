class NumberInput{
    constructor(nr){
        let number = document.createElement('input')
        number.type = 'text'
        number.name = 'number'
        number.id = 'number' + nr
        number.placeholder = 'Add Number'
        return number
    }
}
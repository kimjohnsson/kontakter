class NumberInput{
    constructor(nr, name){
        let number = document.createElement('input')
        number.type = 'text'
        number.name = name
        number.id = 'number' + nr
        number.placeholder = 'Add Number'
        return number
    }
}
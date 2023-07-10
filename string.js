// length of password should be greater than 8 characters & should not contain word 'password'


let name = 'Bhavik'
console.log(`Length of the name = ${name.length}`)

let isValidPassword = function(password){
    if (password.length >=9){
        if(password.includes('password'))
        {
            console.log(`${password} should not contain word password`)
        }
        else{
            console.log('Strong Password')
        }
    }
    else{
        console.log('Enter password of at least 9 characters long')
    }
}

isValidPassword('Barad')
isValidPassword('Barad@123')
isValidPassword('Bhavikpassword')

function inputValidation(values) {
    let error = {};
    const regexEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.Username){
        error.Username = 'Please enter your Name'
    }else if(!values.Username < 5){
        error.Username = 'Name must be mor than 5 characters'
    }

    if(!values.email){
        error.email = 'Please enter your Email'
    }else if(!regexEmail.test(String(values.email).toLowerCase())){
        error.email = 'please enter a valid email adress'
    }

    if(!values.password){
        error.password = 'Please enter your Password'
    }else if(!values.password < 8){
        error.password = 'Name must be mor than 8 characters'
    }


   
}

export default inputValidation;
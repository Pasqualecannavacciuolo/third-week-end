const validateForm = () => {
    removeErrorMsg();
    return checkValidity();
}

const checkValidity = () => {
    validateTelefono()
    if(!validateCognome() || !validateNome() || !validateTelefono() || !validateEmail()) {
        return false;
    } else {
        return true;
    }
}


// Checkign if cognome is empty
const validateCognome = () => {
    let cognome = document.forms["form-dati"]["cognome"].value;
    if (cognome == '') {
        showErrorMsg('cognome-message', "Il cognome non può essere vuoto");
        return false;
    } else {
        return true;
    }
}


// Checkign if nome is empty
const validateNome = () => {
    let nome = document.forms["form-dati"]["nome"].value;
    if (nome == '') {
        showErrorMsg('nome-message', "Il nome non può essere vuoto");
        return false;
    } else {
        return true;
    }
}


// Checkign if email is empty
const validateEmail = () => {
    var emailf = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.forms["form-dati"]["email"].value;
    if (email == '') {
        showErrorMsg('email-message', "L'email non può essere vuota");
        return false;
    } else if(email != '') {
        if(!emailf.test(email)) {
            showErrorMsg('email-message', "Non hai inserito una email valida");
            return false;
        }
    }
    return true;
}


// Checkign if telefono is empty
const validateTelefono = () => {
    var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let telefono = document.forms["form-dati"]["telefono"].value;

    if (telefono == '') {
        showErrorMsg('telefono-message', "Il telefono non può essere vuoto");
        return false;
    } else if (telefono != '') {
        if (!phoneno.test(telefono)) {
            showErrorMsg('telefono-message', "Non hai inserito un numero valido");
            return false;
        }
    }
    return true;
}


// Showing the error message when needed
const showErrorMsg = (e_id, msg) => {
    var element = document.getElementById(e_id);
    element.className = 'error';
    element.innerHTML = msg;
}


/* Removing the error messages if you compiled the field */
const removeErrorMsg = () => {
    let cognome = document.getElementById('cognome-message');
    let nome = document.getElementById('nome-message');
    let email = document.getElementById('email-message');
    let telefono = document.getElementById('telefono-message');

    if(validateCognome()) {
        cognome.innerHTML = "";
    }

    if(validateNome()) {
        nome.innerHTML = "";
    }

    if(validateEmail()) {
        email.innerHTML = "";
    }

    if(validateTelefono()) {
        telefono.innerHTML = "";
    }
}
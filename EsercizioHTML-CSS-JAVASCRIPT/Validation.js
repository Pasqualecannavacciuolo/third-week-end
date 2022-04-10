const validateForm = () => {
    

    removeErrorMsg();

    // If all the checking go well redirect to my Github Page
    if(validateCognome() && validateNome() && validateEmail() && formatEmail() && validateTelefono() && formatTelefono()) {
        console.log("TUTTI TRUE");
        return true;
    }

    // If all the critical data fail the checkings
    if(!validateCognome() && !validateNome() && !validateEmail() && !formatEmail() && !validateTelefono() && !formatTelefono()) {
        console.log("TUTTI FALSI");
        return false;
    } else

    // CHECKING FOR INDIVIDUAL ERRORS
    if(validateCognome()==false) {
        showErrorMsg('cognome-message', "Il cognome non può essere vuoto");
        return false;
    } else

    if(validateNome()==false) {
        showErrorMsg('nome-message', "Il nome non può essere vuoto");
        return false;
    } else

    if (validateEmail() == false) {
        showErrorMsg('email-message', "L'email non può essere vuota");
        return false;
    } else

    if(formatEmail()==false) {
        showErrorMsg('email-message', "Non hai inserito una mail valida");
        return false;
    } else

    if(validateTelefono()==false) {
        showErrorMsg('telefono-message', "Il telefono non può essere vuoto");
        return false;
    } else 

    if(formatTelefono()==false) {
        showErrorMsg('telefono-message', "Non hai inserito un numero valido");
        return false;
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
    let email = document.forms["form-dati"]["email"].value;
    if (email == '') {
        showErrorMsg('email-message', "L'email non può essere vuota");
        return false;
    } else {
        return true;
    }
}


// Checking if the email is the correct format
const formatEmail = () => {
    var emailf = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.forms["form-dati"]["email"].value;
    if(!emailf.test(email)) {
        showErrorMsg('email-message', "Non hai inserito una email valida");
        return false;
    } else {
        return true;
    }
}


// Checkign if telefono is empty
const validateTelefono = () => {
    let telefono = document.forms["form-dati"]["telefono"].value;
    if (telefono == '') {
        showErrorMsg('telefono-message', "Il telefono non può essere vuoto");
        return false;
    } else {
        return true;
    }
}

// Checking if telefono is the correct format
const formatTelefono = () => {
    var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let telefono = document.forms["form-dati"]["telefono"].value;
    if(!phoneno.test(telefono)) {
        showErrorMsg('telefono-message', "Non hai inserito un numero valido");
        return false;
    } else {
        return true;
    }
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
    let telefono = document.getElementById('telefono-message');

    if(cognome.innerHTML != "") {
        cognome.innerHTML = "";
    } else

    if(nome.innerHTML != "") {
        nome.innerHTML = "";
    } else

    if(telefono.innerHTML != "") {
        telefono.innerHTML = "";
    }
}
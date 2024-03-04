/**
 * Función de validación
 */
function validation() {

    let correcto = true;
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let visit = document.querySelector('input[name="visit"]:checked');
    let terms = document.getElementById('terms').checked;
    let place = document.getElementById('place').value;

    if (name === "") {
        document.getElementById('nameHelp').style.visibility = "visible";
        document.getElementById('name').style.borderColor = "red";
        correcto = false;
    }

    if (lastName === "") {
        document.getElementById('lastNameHelp').style.visibility = "visible";
        document.getElementById('lastName').style.borderColor = "red";
        correcto = false;
    }

    if (!(/^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/.test(email))) {
        document.getElementById('emailHelp').style.visibility = "visible";
        document.getElementById('email').style.borderColor = "red";
        correcto = false;
    }

    if (!visit) {
        document.getElementById('visitHelp').style.visibility = "visible";
        correcto = false;
    }

    if (!terms) {
        document.getElementById('termsHelp').style.visibility = "visible"; 
        correcto = false;
    }

    if (place === '0') {
        document.getElementById('placeHelp').style.visibility = "visible";
        document.getElementById('place').style.borderColor = "red"; 
        correcto = false;
    }

    
    return correcto;

}

/**
 * Función de resetear
 */
function resetear(id) {

    document.getElementById(id + 'Help').style.visibility="hidden";
    document.getElementById(id).style.borderColor="#c6c3c3";

}
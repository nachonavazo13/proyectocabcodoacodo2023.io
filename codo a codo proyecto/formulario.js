

function validar() {
    let usuario = document.getElementById("usuario");
    let clave = document.getElementById("clave");
    let phone = document.getElementById("tel");
    let msn = document.getElementById("msn");
    let error = false;
    document.getElementById("validar_usuario").innerHTML = "&nbsp;";
    document.getElementById("validar_clave").innerHTML = "&nbsp;";
    document.getElementById("validar_tel").innerHTML = "&nbsp;";
    document.getElementById("validar_msn").innerHTML = "&nbsp;";

    if (usuario.value === "") {
        document.getElementById("validar_usuario").innerHTML = "Debe completar campo obligatorio";
        error = true;
        clave.focus();
    }

    if (clave.value.length < 8 || clave.value.length > 9) {
        document.getElementById("validar_clave").innerHTML = "Debe completar el campo con 8 digitos";
        error = true;
        clave.focus();
    }

    if (tel.value.length < 9 || tel.value.length > 9) {
        document.getElementById("validar_tel").innerHTML = "Son 9 digitos que debe ingresar";
        error = true;
        clave.focus();

    }

    if (msn.value <= 0) {
        document.getElementById("validar_msn").innerHTML = "Completar campo obligatorio";
        error = true;
        clave.focus();

    }

    if (error == false) {
        document.getElementById("usuario").value = ""
        document.getElementById("validar_usuario").innerHTML = "&nbsp;";
        document.getElementById("clave").value = ""
        document.getElementById("validar_clave").innerHTML = "&nbsp;";
        document.getElementById("tel").value = ""
        document.getElementById("validar_tel").innerHTML = "&nbsp;";
        document.getElementById("msn").value = ""
        document.getElementById("validar_msn").innerHTML = "&nbsp;";
        alert('Datos enviados')
    }
    return !error

}



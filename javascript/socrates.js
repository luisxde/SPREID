// =========================
// REGISTRO
// =========================

document.querySelector(".signup form").addEventListener("submit", function(e){

    e.preventDefault();

    // OBTENER DATOS
    let usuario = document.querySelector(".signup input[type='text']").value.trim();

    let correo = document.querySelector(".signup input[type='email']").value.trim();

    let password = document.querySelector(".signup input[type='password']").value.trim();

    // VALIDAR USUARIO
    if(usuario.length < 4){

        alert("El usuario debe tener mínimo 4 caracteres");
        return;

    }

    // VALIDAR GMAIL
    if(!correo.endsWith("@gmail.com")){

        alert("Ingrese un correo Gmail válido");
        return;

    }

    // VALIDAR CONTRASEÑA
    if(password.length < 6){

        alert("La contraseña debe tener mínimo 6 caracteres");
        return;

    }

    // GUARDAR DATOS
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("correo", correo);
    localStorage.setItem("password", password);

    alert("Cuenta creada correctamente");

    // CAMBIAR AL LOGIN
    document.getElementById("chk").checked = true;

});


// =========================
// LOGIN
// =========================

document.querySelector(".login form").addEventListener("submit", function(e){

    e.preventDefault();

    // DATOS INGRESADOS
    let correoLogin = document.querySelector(".login input[type='email']").value.trim();

    let passwordLogin = document.querySelector(".login input[type='password']").value.trim();

    // DATOS GUARDADOS
    let correoGuardado = localStorage.getItem("correo");

    let passwordGuardado = localStorage.getItem("password");

    // VALIDACIONES TIPO FACEBOOK

    // CORREO INCORRECTO
    if(correoLogin !== correoGuardado){

        alert("El correo que ingresaste no está conectado a una cuenta");

        return;

    }

    // CONTRASEÑA INCORRECTA
    if(passwordLogin !== passwordGuardado){

        alert("La contraseña es incorrecta");

        return;

    }

    // LOGIN EXITOSO
    alert("Inicio de sesión exitoso");

    // REDIRECCIÓN
    window.location.href = "index.html";

});
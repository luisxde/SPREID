// REGISTRO
document.querySelector(".signup form").addEventListener("submit", function(e){

    e.preventDefault();

    let usuario = document.querySelector(".signup input[type='text']").value;

    let email = document.querySelector(".signup input[type='email']").value;

    let password = document.querySelector(".signup input[type='password']").value;

    // VALIDAR GMAIL
    if(!email.endsWith("@gmail.com")){
        alert("Solo se permiten cuentas Gmail");
        return;
    }

    // VALIDAR CONTRASEÑA
    if(password.length < 6){
        alert("La contraseña debe tener mínimo 6 caracteres");
        return;
    }

    // GUARDAR DATOS
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Usuario registrado correctamente");

    // CAMBIAR AL LOGIN
    document.getElementById("chk").checked = true;

});


// LOGIN
document.querySelector(".login form").addEventListener("submit", function(e){

    e.preventDefault();

    let loginEmail = document.querySelector(".login input[type='email']").value;

    let loginPassword = document.querySelector(".login input[type='password']").value;

    // DATOS GUARDADOS
    let savedEmail = localStorage.getItem("email");

    let savedPassword = localStorage.getItem("password");

    // VALIDACIÓN
    if(loginEmail === savedEmail && loginPassword === savedPassword){

        alert("Inicio de sesión correcto");

        // REDIRECCIÓN
        window.location.href = "menu.html";

    }else{

        alert("Correo o contraseña incorrectos");

    }

});
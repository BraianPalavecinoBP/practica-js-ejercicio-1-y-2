document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById("registroForm");
    // const nombreSpan = document.getElementById("nombre");
    // const emailSpan = document.getElementById("email");

    registroForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;

        const usuario = {
            nombre: nombre,
            email: email
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href = "perfil.html";
    });

    // const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    // if (usuarioGuardado) {
    //     nombreSpan.textContent = usuarioGuardado.nombre;
    //     emailSpan.textContent = usuarioGuardado.email;
    // } else {
    //     nombreSpan.textContent = "No hay datos disponibles";
    //     emailSpan.textContent = "";
    // }
});

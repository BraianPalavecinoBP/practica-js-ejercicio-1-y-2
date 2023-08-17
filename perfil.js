//guarde datos del usuario
let usuario = localStorage.getItem("usuario")

//cree variables y referenciandolas a los elementos html
let fieldName = document.getElementById("nombre")
let fieldEmail = document.getElementById("email")

//conversion de string a objeto
usuario = JSON.parse(usuario)

//integrue los datos en la maqueta
fieldName.innerHTML = usuario.nombre
fieldEmail.innerHTML = usuario.email

console.log("mi usuario: ", usuario)


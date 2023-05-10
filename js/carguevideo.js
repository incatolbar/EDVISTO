var Guardar = document.querySelector('button[type=submit]');
Guardar.addEventListener('click', function() {
    alert('El video ha sido guardado.');
});

function validateForm() {
    var url = document.getElementById("url").value;
    var titulo = document.getElementById("titulo").value;
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;

    if (url == "" || titulo == "" || nombre == "" || email == "" || descripcion == "") {
        alert("Por favor complete todos los campos.");
        return false;
}

var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor ingrese un correo electronico valido.");
    return false;
}

alert("Video cargado con exito!");
  return true;
}
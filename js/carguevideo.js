import Swal from 'sweetalert2';
var guardarBtn = document.getElementById('guardarBtn');
guardarBtn.addEventListener('click', function(event) {
  event.preventDefault();
  Swal({
    title: '¿Estás seguro?',
    text: "El video se guardará en la base de datos.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, guardar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal(
        '¡Guardado!',
        'El video ha sido guardado.',
        'success'
      )
    }
  })
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
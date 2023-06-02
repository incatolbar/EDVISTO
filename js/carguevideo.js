document.addEventListener('DOMContentLoaded', function() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });

  guardarBtn.addEventListener('click', function(event) {
    event.preventDefault();
    validateForm();
  
    const data = new FormData(document.getElementById('FormCargue'));
  
    const dataObject = Object.fromEntries(data)
    console.log(dataObject)
  
    submitForm(dataObject);
  });

  function validateForm() {
    var url = document.getElementById("url").value;
    var title = document.getElementById("title").value;
    var studentName = document.getElementById("studentName").value;
    var emailStudent = document.getElementById("emailStudent").value;
    var emailTeacher = document.getElementById("emailTeacher").value;
    var description = document.getElementById("description").value;

    if (url == "" || title == "" || studentName == "" || emailStudent == "" || emailTeacher == "" || description == "") {
      alert("Por favor complete todos los campos.");
      return false;
    }

    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailStudent) || !emailRegex.test(emailTeacher)) {
      alert("Por favor ingrese un correo electrónico válido.");
      return false;
    }

    Swal.fire({
      title: '<span class="custom-title">Estás a punto de subir un video</span>',
      html: '<span class="custom-text">¿Deseas continuar?</span>',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'CONTINUAR',
      cancelButtonText: 'ATRÁS',
      reverseButtons: true,
      showCloseButton: false // Evita que se muestre el botón de cerrar en la alerta
    }).then((result) => {
      if (result.isConfirmed) {
        // Realizar la solicitud POST al hacer clic en "Continuar"
        submitForm();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          '',
          'No se pudo procesar el video',
          'error'
        );
      }
    });
  }

  function submitForm(dataObject) {
  
    fetch('http://localhost:3000/videos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataObject)
  })
      .then(response => response.json())
      .then(result => {
        console.log("carga datos");
        console.log(result);
        if (result.status === 'ok') {
        Swal.fire(
          '',
          '<span class="custom-title">Información registrada con éxito</span>',
          'success'
        ).then(() => {
          // Aquí se ejecuta el código después de que se confirma la alerta
          document.getElementById('FormCargue').submit(); // Enviar el formulario después de la confirmación
        });
      }})
      .catch(error => {
        console.error('Error:', error);
        Swal.fire(
          '',
          'Hubo un error al procesar la solicitud',
          'error'
        );
      });
  }
});
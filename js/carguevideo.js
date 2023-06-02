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
  });

  function validateForm() {
    var url = document.getElementById("url").value;
    var title = document.getElementById("title").value;
    var studentName = document.getElementById("studentName").value;
    var emailStudent = document.getElementById("emailStudent").value;
    var emailTeacher = document.getElementById("emailTeacher").value;
    var description = document.getElementById("description").value;

    if (url == "" || title == "" || studentName == "" || emailStudent == "" || emailTeacher == "" || description == "") {
      Swal.fire(
        '',
        'Por favor complete todos los campos.',
        'info'
      );
      return false;
    }

    var urlError = document.getElementById("urlError");
    var urlInput = document.getElementById("url");
    var urlPattern = /^(https?:\/\/)?(?!.*[$%&])[\w\-\.]+\.[a-zA-Z]{2,}(\/\S*)?$/;

    if (url == null || url == "" || url.length == 0 || /^\s+$/.test(url) || !urlPattern.test(url)) {
      urlError.textContent = "El formato de URL no es válido.";
      urlInput.classList.add("error-input");

      document.getElementById("guardarBtn").disabled = false;

      return false;
    } else {
      urlError.textContent = "";
      urlInput.classList.remove("error-input");
    }

    var nomForm = document.forms["formulario"]["emailStudent"].value;
    var emailError = document.getElementById("emailErrorS");
    var emailInput = document.getElementById("emailStudent");
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
    if (nomForm == null || nomForm == "" || nomForm.length == 0 || /^\s+$/.test(nomForm) || !emailPattern.test(nomForm)) {
      emailError.textContent = "El formato de correo no es válido.";
      emailInput.classList.add("error-input");
        
      document.getElementById("guardarBtn").disabled = false;
        
      return false;
      } else {
        emailError.textContent = "";
        emailInput.classList.remove("error-input");
      }

    var nomForm = document.forms["formulario"]["emailTeacher"].value;
    var emailError = document.getElementById("emailErrorT");
    var emailInput = document.getElementById("emailTeacher");
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
    if (nomForm == null || nomForm == "" || nomForm.length == 0 || /^\s+$/.test(nomForm) || !emailPattern.test(nomForm)) {
        emailError.textContent = "El formato de correo no es válido.";
        emailInput.classList.add("error-input");
          
        document.getElementById("guardarBtn").disabled = false;
          
    return false;
      } else {
          emailError.textContent = "";
          emailInput.classList.remove("error-input");
      }
      
    if (emailStudent === emailTeacher) {
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'El correo del estudiante y del docente no pueden ser iguales.'
      });
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
        const data = new FormData(document.getElementById('FormCargue'));
        const dataObject = Object.fromEntries(data);
        submitForm(dataObject);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('', 'No se pudo procesar el video', 'error');
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
    .then(response => {
      if (response.status === 201) {
        return response.json();
      } else {
        // Mostrar mensaje de error al usuario
        throw new Error("Error en la solicitud");
      }
    })
      .then(result => { 
          Swal.fire({
            title: '',
            html: '<span class="custom-title">Información registrada con éxito</span>',
            icon: 'success'
          }).then(() => {
            // Aquí se ejecuta el código después de que se confirma la alerta
            document.getElementById('FormCargue').submit(); // Enviar el formulario después de la confirmación
          });
        }
      )
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: '',
          text: 'Verifica que el email del docente o del estudiante estén escritos correctamente o en el campo correspondiente'
        })
        console.error('Error:', error);
        Swal.fire('', 'Verifica que el email del docente o del estudiante se encuentre en el campo correspondiente', 'error');
      });
  }
});
window.onload = function () {
  const form = document.forms.formulario;
  const submitBtn = document.getElementById("submitBtn");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    submitBtn.disabled = true;
    
    validateForm();
  });
}

function validateForm() {
  var nomForm = document.forms["formulario"]["email"].value;
  var emailError = document.getElementById("emailError");
  var emailInput = document.getElementById("email");
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (nomForm == null || nomForm == "" || nomForm.length == 0 || /^\s+$/.test(nomForm) || !emailPattern.test(nomForm)) {
    emailError.textContent = "El formato de correo no es válido.";
    emailInput.classList.add("error-input");
    
    document.getElementById("submitBtn").disabled = false;
    
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error-input");
  }

  var rolForm = document.forms["formulario"]["rol"].selectedIndex;
  var rolError = document.getElementById("rolError");
  var rolInput = document.getElementById("rol");
  
  if (rolForm == null || rolForm == 0) {
    rolError.textContent = "Debes seleccionar un rol.";
    rolInput.classList.add("error-input");
    
    document.getElementById("submitBtn").disabled = false;
    
    return false;
  } else {
    rolError.textContent = "";
    rolInput.classList.remove("error-input");
  }

  if (redirigir()) {
    return true;
  } else {
    return false;
  }
}

function redirigir() {
  const email = document.forms["formulario"]["email"].value;
  const rol = document.forms["formulario"]["rol"].value;

  var data = {
    email: email,
    rol: rol
  };

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        // Mostrar mensaje de error al usuario
        throw new Error("Error en la solicitud");
      }
    })
    .then(result => {
      console.log("Entra al post");
      console.log(result);
      
      const selectedValue = document.getElementById('rol').value;
      
      if (selectedValue === 'teacher') {
        window.location.href = './evaluacion.html';
      } else if (selectedValue === 'student') {
        window.location.href = "./carguevideo.html";
      }
      
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'Verifica que el email coincida con el rol'
      })
      console.log(error);
      document.getElementById("submitBtn").disabled = false;
    });
}
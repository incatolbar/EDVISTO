window.onload = function() {
const form = document.forms.formulario;
form.addEventListener("submit", function(event) {
  event.preventDefault();
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
        return false;
    } else {
        rolError.textContent = "";
        rolInput.classList.remove("error-input");
    }

    redirigir();
    return true;
}

function redirigir(){
    const selectedValue = document.getElementById('rol').value;
     if (selectedValue === '1') {
        window.location.href = './evaluacion.html';
      } else if (selectedValue === '2') {
        window.location.href = "./carguevideo.html";
      }
}

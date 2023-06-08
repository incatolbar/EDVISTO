# Proyecto EDVISTO – Team 3

EDVISTO es una plataforma educativa en donde el estudiante podrá subir un video para que posteriormente el docente lo califique en la misma plataforma.

## Instrucciones de instalación

Si deseas configurar el proyecto en un entorno local, debes seguir estos pasos:

1. Descarga el repositorio.
2. Ejecútalo en un servidor web.
3. Descarga el repositorio de la codificación back y sincronízalo con la base de datos de MongoDB.
4. Descarga las dependencias con Node.js.
5. Pon a correr el servidor en modo de desarrollo.

## Ejemplos de uso

Para usar la plataforma, sigue los siguientes pasos:

1. Ingresa a la pantalla de Login.
2. Ingresa un correo válido que esté previamente guardado en la base de datos y debe tener un formato de email válido.
3. Selecciona el rol con el que estás registrado.
4. Si no cumples alguna de las condiciones mencionadas, se mostrará una alerta correspondiente.
5. Dependiendo del rol seleccionado, se mostrarán diferentes pantallas.
6. En la pantalla de carga de videos (estudiante), completa los campos requeridos y sigue las validaciones correspondientes (La URL no se puede repetir y debe tener una estructura válida, los campos de email deben tener un formato valid, el email del estudiante y docente no pueden ser el mismo y deben coincidir con los que están registrados en la base de datos.
7. Si los datos son ingresados correctamente, se mostrará una alerta de confirmación antes de guardar el video en la base de datos.
8. Si has ingresado con el rol de docente, accederás a la pantalla de calificación.
9. Selecciona el estudiante a calificar y el video a evaluar.
10. Califica el video utilizando una escala de 1 a 5 estrellas y agrega observaciones si es necesario.
11. Al finalizar la calificación, haz clic en el botón de guardar para registrarla en la base de datos.
12. Cabe resaltar que las pantallas mencionadas son responsivas y se adaptan a cualquier dispositivo móvil.

## Estructura del proyecto

El proyecto fue creado utilizando los siguientes lenguajes de programación:

- HTML: para la estructura del sitio.
- CSS: para el diseño y la parte visual, siguiendo los mockups proporcionados.
- JavaScript: para la funcionalidad de la plataforma.

La mayoría del código fue escrito de forma nativa con fines educativos, utilizando Visual Studio Code como editor de código. Además, se utilizó la biblioteca de JavaScript SweetAlert2 para las alertas personalizadas, mejorando así la experiencia del usuario.

Este repositorio fue creado por Carolina Toledo, quien ocupó el rol de Frontend en el proyecto. Todo el trabajo fue realizado en equipo por el Team 3 de IntechMom.

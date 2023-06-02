fetch('http://localhost:3000/videos')
  .then(response => response.json())
  .then(data => {
    // data contiene la lista de estudiantes
    const studentSelect = document.getElementById('studentName');
    
    // Agregar opciones al select de estudiantes
    data.forEach(student => {
      const option = document.createElement('option');
      option.value = student.studentName;
      option.textContent = student.studentName;
      studentSelect.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Error al obtener estudiantes:', error);
  });

// Evento de cambio en el select de estudiantes
const studentSelect = document.getElementById('studentName');
studentSelect.addEventListener('change', () => {
  const selectedStudent = studentSelect.value;
  
  // Obtener videos del estudiante seleccionado
  fetch(`http://localhost:3000/videos?studentName=${encodeURIComponent(selectedStudent)}`)
    .then(response => response.json())
    .then(data => {
      // data contiene la lista de videos del estudiante
      const videoSelect = document.getElementById('title');
      
      // Limpiar opciones anteriores
      videoSelect.innerHTML = '';
      
      // Agregar opciones al select de videos
      data.forEach(video => {
        const option = document.createElement('option');
        option.value = video.title;
        option.textContent = video.title;
        videoSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error al obtener videos:', error);
    });
});

// // Evento de cambio en el select de videos
// const videoSelect = document.getElementById('title');
// videoSelect.addEventListener('change', () => {
//   const selectedVideo = videoSelect.value;

//   // Obtener descripción del video seleccionado
//   fetch(`http://localhost:3000/videos?title=${encodeURIComponent(selectedVideo)}`)
//     .then(response => response.json())
//     .then(data => {
//       // Filtrar los videos por el título seleccionado
//       const selectedVideoData = data.filter(video => video.title === selectedVideo);

//       if (selectedVideoData.length > 0) {
//         // Mostrar la descripción del video seleccionado
//         const descriptionElement = document.getElementById('description');
//         descriptionElement.textContent = selectedVideoData[0].description;
//       }
//     })
//     .catch(error => {
//       console.error('Error al obtener descripción del video:', error);
//     });
// });

// Evento de cambio en el select de video
const videoSelect = document.getElementById('title');
videoSelect.addEventListener('change', () => {
  const selectedVideo = videoSelect.value;
  
  // Obtener descripción del video seleccionado
  fetch(`http://localhost:3000/videos?title=${encodeURIComponent(selectedVideo)}`)
    .then(response => response.json())
    .then(data => {
      // data contiene la lista de videos del estudiante
      const descriptionElement = document.getElementById('description');
      
      // Limpiar opciones anteriores
      descriptionElement.innerHTML = '';
      
      // Agregar descripción del video seleccionado
      descriptionElement.value = data[0].description;


    })
    .catch(error => {
      console.error('Error al obtener videos:', error);
    });
});

const guardarBtn = document.getElementById('guardarBtn');
guardarBtn.addEventListener('click', (event) => {
  event.preventDefault();
  Swal.fire({
    title: '',
    html: '<span class="custom-title">Información registrada con éxito</span>',
    icon: 'success'
  });
});
// Obtener referencia a los elementos del DOM
const studentSelect = document.getElementById('studentName');
const titleSelect = document.getElementById('title');
const descriptionInput = document.getElementById('description');

// Función para renderizar los nombres de los estudiantes en el select
const renderStudentNames = (studentData) => {
  studentData.forEach((student) => {
    const option = document.createElement('option');
    option.value = student.name;
    option.textContent = student.name;
    studentSelect.appendChild(option);
  });
};

// Función para renderizar los títulos de los videos en el select
const renderVideoTitles = (videoData) => {
  videoData.forEach((video) => {
    const option = document.createElement('option');
    option.value = video.title;
    option.textContent = video.title;
    titleSelect.appendChild(option);
  });
};

// Función para actualizar la descripción en el input
const updateDescription = (description) => {
  descriptionInput.value = description;
};

// Función para realizar la solicitud Fetch y obtener los datos
const fetchVideoData = async () => {
  try {
    const response = await fetch('http://localhost:3000/videos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const videoData = await response.json();
      console.log(videoData);
      
      // Obtener nombres de estudiantes únicos
      const studentNames = [...new Set(videoData.map(video => video.studentName))];
      renderStudentNames(studentNames);

      // Manejar evento de cambio en el select de estudiantes
      studentSelect.addEventListener('change', () => {
        const selectedStudent = studentSelect.value;
        
        // Filtrar los videos por estudiante seleccionado
        const filteredVideos = videoData.filter(video => video.studentName === selectedStudent);
        
        // Obtener títulos de videos únicos del estudiante seleccionado
        const videoTitles = [...new Set(filteredVideos.map(video => video.title))];
        titleSelect.innerHTML = ''; // Limpiar el select de títulos
        renderVideoTitles(videoTitles);
      });

      // Manejar evento de cambio en el select de títulos
      titleSelect.addEventListener('change', () => {
        const selectedTitle = titleSelect.value;

        // Obtener la descripción del video seleccionado
        const selectedVideo = videoData.find(video => video.title === selectedTitle);
        if (selectedVideo) {
          updateDescription(selectedVideo.description);
        } else {
          updateDescription('');
        }
      });

    } else {
      console.log('Error al obtener los videos:', response.status);
    }
  } catch (error) {
    console.log('Error en la solicitud Fetch:', error);
  }
};

fetchVideoData();

function StarRating() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleClick = (i) => {
    setSelected(i);
    sendRating(i);
  };

  const handleMouseOver = (i) => {
    setHovered(i);
  };

  const handleMouseLeave = () => {
    setHovered(0);
  };
}

  
// Obtener referencia al botón de guardar
const saveButton = document.getElementById('saveButton');

// Función para manejar el evento de clic en el botón de guardar
const handleSaveClick = () => {
  Swal.fire({
    title: '',
    html: '<span class="custom-title">Información registrada con éxito</span>',
    icon: 'success'
  });
};

// Agregar evento de clic al botón de guardar
saveButton.addEventListener('click', handleSaveClick);

// ...
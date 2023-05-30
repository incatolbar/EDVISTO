function handleVideoSelect(event) {
  const selectedTitle = event.target.value;
  const selectedVideo = videoData.find(video => video.title === selectedTitle);

  if (selectedVideo) {
    const studentName = selectedVideo.studentData;
    const description = selectedVideo.description;

    setStudentData(studentName);
    setDescription(description);
  }
}

const handleTitleChange = (event) => {
  const selectedTitle = event.target.value;

  fetch(`URL-Estudiante?videoTitle=${selectedTitle}`)
    .then(response => response.json())
    .then(studentData => setStudentData(studentData))
    .catch(error => console.log(error));

  fetch(`URL-Descripcion?videoTitle=${selectedTitle}`)
    .then(response => response.text())
    .then(description => setDescription(description))
    .catch(error => console.log(error));
};

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

  
  const sendRating = (rating) => {
    fetch('URL', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "rating": rating })
    })
      .then(response => {
        
      })
      .catch(error => {

      });
  };
}
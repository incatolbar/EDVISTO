import React, { useState } from 'react';
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


VERIFICARESTO 


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


  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(i)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="star"
              onMouseOver={() => handleMouseOver(i)}
              onMouseLeave={handleMouseLeave}
            >
              <path
                fill={ratingValue <= (hovered || selected) ? '#ffc107' : '#e4e5e9'}
                stroke="#e4e5e9"
                strokeWidth="1"
                d="M12 .803l3.09 6.327 6.898.998-4.987 4.845 1.18 6.864L12 17.308l-6.181 3.333 1.18-6.864L1.012 8.128l6.898-.998L12 .803z"
              />
            </svg>
          </label>
        );
      })}
    </div>
  );
}
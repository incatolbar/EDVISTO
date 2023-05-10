function StarRating() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleClick = (i) => {
    setSelected(i);
  };

  const handleMouseOver = (i) => {
    setHovered(i);
  };

  const handleMouseLeave = () => {
    setHovered(0);
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
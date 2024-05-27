import { useState } from "react";

export const MovieCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [tempMovie, setTemmovie] = useState(props.movie);
  const handleMovieImage = () => {
    alert(`${props.image} xin chào!`);
  };
  const handleChange = (e) => {
    setTemmovie({
      ...tempmovie,
      [e.target.description]: e.target.value,
    });
  };
  return (
    <div className="chose">
      <div className="movie">
        <div className="list">
          <img
            src={props.image}
            alt="movie"
            onClick={() => {
              setShowModal(true);
            }}
          />
        </div>
        <p className="id">{props.id}</p>
        <p className="movieName">
          {/* Code hiển thị tên */}
          <b>{props.movieName}</b>
        </p>
        <div className="info">
          <span className={props.description}>{props.description}</span>
          <span>{getLabelST}</span>
          <button onClick={handleImage}></button>
        </div>
      </div>
    </div>
  );
};

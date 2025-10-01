import { useState } from "react";
export default function StarRating() {
  const [rating, setRating] = useState();
  const [hover, setHover] = useState();
  const star = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="mb-6 font-bold text-8xl"> ⭐ Star Rating </h1>
      <div>
        {star.map((stars) => (
          <span
            key={stars}
            onClick={() => setRating(stars)}
            onMouseEnter={() => setHover(stars)}
            onMouseLeave={() => setHover(0)}
            className="cursor-pointer text-4xl"
          >
            {stars <= (hover || rating) ? "⭐" : "☆"}
          </span>
        ))}
      </div>
      {rating > 0 && (
        <p>
          You Rated : <span className="font-bold">{rating}</span>
        </p>
      )}
    </>
  );
}
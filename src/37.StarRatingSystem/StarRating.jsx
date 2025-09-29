import { useState } from "react";
export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="min-h-screen flex flex-col item-center justify-center bg-gary-900 text-white">
      <h1 className="text-2xl font-bold mb-4"> ⭐ Star Rating</h1>
      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => {
          <span
            key={star}
            className={`cursor-pointer text-4xl transition-colors ${
              (hover || rating) >= star ? "text-yellow" : "text-gray-500"
            }`}
            onClick={setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ⭐
          </span>;
        })}
      </div>
      {rating > 0 && (
        <p>
          You Rated: <span className="font-bold">{rating}</span>
        </p>
      )}
    </div>
  );
}

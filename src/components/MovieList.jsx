import { useRef, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const trackRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    isDownRef.current = true;
    setIsDragging(true);

    startXRef.current = e.clientX - el.getBoundingClientRect().left;
    startScrollRef.current = el.scrollLeft;

    e.preventDefault();
  };

  const handlePointerMove = (e) => {
    const el = trackRef.current;
    if (!el || !isDownRef.current) return;
    const x = e.clientX - el.getBoundingClientRect().left;
    const walk = x - startXRef.current;
    el.scrollLeft = startScrollRef.current - walk;
  };

  const handlePointerUp = (e) => {
    const el = trackRef.current;
    if (el) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
    }
    isDownRef.current = false;
    setIsDragging(false);
  };

  if (!movies || movies.length === 0) {
    return (
      <section className="my-6 px-4">
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        <p className="text-sm text-gray-500">No movies yet</p>
      </section>
    );
  }

  return (
    <section className="my-6 px-4">
      <h2 className="text-white text-lg sm:text-xl font-bold mb-3">{title}</h2>

      <div
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`flex gap-4 overflow-x-auto no-scrollbar ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
          touchAction: "pan-y",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-none w-28 sm:w-36 md:w-44 lg:w-52"
          >
            <MovieCard posterPath={movie.poster_path} title={movie.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;

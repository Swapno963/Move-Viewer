import MovieCart from "./MovieCart";

export default function MovieArea() {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        <MovieCart />
      </div>
    </div>
  );
}

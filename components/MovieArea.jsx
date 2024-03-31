import { getAllData } from "@/lib/data";
import MovieCart from "./MovieCart";

export default function MovieArea({lang}) {
  const allMovie = getAllData()
  // console.log(allMovie);
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {
          allMovie.map(movie=>(
            <MovieCart  key={movie.id} movie={movie} lang={lang}/>

          ))
        }
      </div>
    </div>
  );
}

import { getAllData } from "@/lib/data";
import MovieCart from "./MovieCart";
import { getMovieDictionary } from "@/app/Data/DataDictonary";

export default async function MovieArea({lang}) {
  // const allMovie = getAllData()
  // console.log(allMovie);
  const MoviesData = await getMovieDictionary()
  // data.then(dt=>dt.json())
  // console.log('from dynamic', MoviesData);
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {
          MoviesData.map(movie=>(
            <MovieCart  key={movie.id} movie={movie} lang={lang}/>

          ))
        }
      </div>
    </div>
  );
}

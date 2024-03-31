import { getDictionary } from "@/app/[lang]/disctionaries";
import { getDataById } from "@/lib/data";
import Image from "next/image";

export default async function SingleMovie({ movieId, lang }) {
  // console.log('from single',lang);
  const dictionary = await getDictionary(lang);
  // console.log(dictionary);
  const movie = getDataById(movieId);
  console.log('from single',movieId);
  const {
    backdrop_path,
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
    popularity,
  } = movie;
  return (
    <section>
      <div>
        <Image
          width={400}
          height={500}
          class="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={backdrop_path}
          alt=""
        />
      </div>

      <div class="grid grid-cols-12 py-12 gap-8">
        <div class="col-span-2">
          <Image width={200} height={200} src={poster_path} alt="" />
        </div>
        <div class="col-span-8">
          <h2 class="font-bold text-slate-300 text-2xl">{title}</h2>
          <p class="my-2 text-slate-400 italic">{overview}</p>
          <ul class="text-slate-300 space-y-2 my-8">
            <li>
              {dictionary?.ReleaseDate} : {release_date}
            </li>
            <li>
              {dictionary?.AverageVote}: {vote_average}
            </li>
            <li>
              {dictionary?.VoteCount} : {vote_count}
            </li>
            <li>
              {dictionary?.Popularity} : {popularity}
            </li>
          </ul>
        </div>
        <div class="col-span-2 space-y-4">
          <button class="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Stream In HD
          </button>
          <button class="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Download In HD
          </button>
        </div>
      </div>
    </section>
  );
}

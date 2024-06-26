import { getDictionary } from "@/app/[lang]/disctionaries";
import Image from "next/image";
import Link from "next/link";

export default async function  MovieCart({movie,lang}) {
  const dictionary = await getDictionary(lang);

  const {title, id,poster_path} = movie;
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <Image className="w-full object-cover" src={poster_path} height={200} width={200} alt=""/>
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                <div className="flex items-center space-x-1 mb-5">
                    <img src="/assets/star.svg" width="14" height="14" alt=""/>
                    <img src="/assets/star.svg" width="14" height="14" alt=""/>
                    <img src="/assets/star.svg" width="14" height="14" alt=""/>
                    <img src="/assets/star.svg" width="14" height="14" alt=""/>
                    <img src="/assets/star.svg" width="14" height="14" alt=""/>
                </div>
                <Link className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                  href={`movies/${id}`}>
                    <img src="/assets/tag.svg" alt=""/>
                    <span>{dictionary.Detail}</span>
                </Link>
            </figcaption>
    </figure>
  )
}

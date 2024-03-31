import MovieArea from "@/components/MovieArea";
import Image from "next/image";

export default function Home({params: {lang}}) {
  console.log('from page::',lang);
  return (
    <>
      <MovieArea lang={lang} />
    </>
  );
}

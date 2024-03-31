import SingleMovie from "@/components/SingleMovie"

const PhotoDetailsPage = ({params: {movieId,lang}}) => {
    // console.log(movieId,lang);
    return (
        <SingleMovie movieId={movieId} lang={lang}/>
    )
}

export default PhotoDetailsPage
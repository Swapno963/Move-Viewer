import SingleMovie from "@/components/SingleMovie"

const PhotoDetailsPage = ({params: {movieId}}) => {
    console.log(movieId);
    return (
        <SingleMovie movieId={movieId}/>
    )
}

export default PhotoDetailsPage
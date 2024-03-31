import Modal from "@/components/Modal";
import SingleMovie from "@/components/SingleMovie";

export default function page({ params: { movieId, lang } }) {
  console.log(movieId, lang);
  return (
    <Modal>
      <SingleMovie movieId={movieId} lang={lang}/>
    </Modal>
  );
}

import "../assets/css/galeria.css";
import Heart from "./Heart";
import useImage from "../Hook/useImage";

export default function Home() {

  const { images, setLikes, saved } = useImage();

  for (let save of saved) {
    save.liked = true;
  }

  return (
    <>
      <div className="galeria grid-columns-5 p-3">
        {images.map((image) => (
          <div key={image.id} onClick={() => setLikes(image)} style={{ backgroundImage: `url(${image.src.tiny})` }}>

            <Heart filled={image.liked} />

            <h5 className="imgText">{image.alt}</h5>

          </div>
        ))}
      </div>
    </>
  );
}

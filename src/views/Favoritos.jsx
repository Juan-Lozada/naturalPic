import useImage from "../Hook/useImage";
import '../assets/css/favoritos.css'


export default function Favoritos() {

  const { saved, unSaveImg } = useImage();


  return (
    <>
      {saved != 0 ?
        (<h1>Saved Photos</h1>) :
        (<h1>Not saved photos yet</h1>)}

      <div>
        <div className="p-3 galeria grid-columns-4">
          {saved.map((image) => (
            <div>
              <img
                key={image.id}
                src={image.src.tiny}
              ></img>
              <h3>{image.alt}</h3>
            </div>

          ))}
        </div>
      </div>

      {saved != 0 && <button className="unSaveButton" onClick={unSaveImg}>Delete Photo</button>}
    </>
  );
}

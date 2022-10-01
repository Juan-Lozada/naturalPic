import { useState, useEffect, createContext } from "react";

const ContextImages =createContext();

function ImagesState ({children}) {
    
    const [saved, setSaved] = useState ([]);
    const [images, setImages] = useState ([]);
    const [likes, setLikes] = useState ('');

    useEffect(() => {
        if (likes != '') {
            setSaved([...saved, likes]);
        }
    }, [likes])

    const unSaveImg = () => {
        setSaved([]);

        for (let image of images) {
            image.liked = false;
        }
    }

    return (
        <ContextImages.Provider 
        value= {{unSaveImg, saved, images, likes, setLikes, setImages}}
        >
            {children}
        </ContextImages.Provider>

    )
}

export { ImagesState };

export default ContextImages;
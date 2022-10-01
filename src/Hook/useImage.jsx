import { useContext } from "react";
import ContextImages from "../Context/ContextGalery";

function useImage() {
  return useContext(ContextImages);
}

export default useImage;
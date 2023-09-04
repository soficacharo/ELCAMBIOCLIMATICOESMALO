import { useParams } from "react-router-dom";
import Caos from "./data/Caos.JSON"

const Problematica = () => {
 const { id } = useParams();
 console.log(Caos)
 {var elemento = Caos.find ((e) => e.id === id)}
 
 return (
     


 );
};
export default Problematica;
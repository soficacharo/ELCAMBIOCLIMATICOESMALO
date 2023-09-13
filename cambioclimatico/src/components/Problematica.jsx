import { useParams } from "react-router-dom";
import Caos from "./data/Caos.JSON"

const Problematica = () => {
 const { id } = useParams();
 console.log(Caos)

 
 return (
     

    <h1>hola</h1>

 )
};
export default Problematica;
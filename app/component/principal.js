import { useState } from "react";
import Secundario2 from "./newSecundario.js";

export default function Principal() {
    const [mark, setMark] = useState(false);
    const itsMarked = () => {
        setMark = true;
    }
    return (

        <div>
        <input type="button" value="Todas" />
        <input type="button" value="Completadas" />
        <input type="button" value="Pendientes" />
        <br />
        <input type="text" name="" id="" placeholder="Nuevo elemento" />
        <button>Añadir</button>
        <br />
        <input onClick={itsMarked} type="checkbox" name="" id="" /> Marcar/Desmarcar todos
            
        <ul>
            <li><Secundario2 task={"Alvaro"}/></li>
            <li><Secundario2 task={"Cañas"}/></li>
            <li><Secundario2 task={"Álvaro Cañas"}/></li>
        </ul>

        </div>
    );
}
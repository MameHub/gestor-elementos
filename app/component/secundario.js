export default function Secundario() {
    return (
      <div>
        <input type="button" value="Todas" />
        <input type="button" value="Completadas" />
        <input type="button" value="Pendientes" />
        <br />
        <input type="text" name="" id="" placeholder="Nuevo elemento" />
        <button onclick="">Añadir</button>
        <br />
        <input type="checkbox" name="" id="" /> Marcar/Desmarcar todos
        <ul>
          <li>
            <input type="checkbox" /> Álvaro
          </li>
          <li>
            <input type="checkbox" /> cañas
          </li>
        </ul>
      </div>
    );
  }
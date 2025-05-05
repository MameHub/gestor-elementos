export default function Secundario2({task}) {
    return(
        <div>
            <input type="checkbox"/> {task.length > 10 ? task.slice(0, 10) + "..." : task}
        </div>
    );
}
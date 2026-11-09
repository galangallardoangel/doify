function TaskCard({ task, onDelete, onEdit, onChangeStatus }) {
  return (
    <div className="task-card">
      <span className={`priority ${task.priority}`}>
        {task.priority === "high"
          ? "Alta"
          : task.priority === "medium"
            ? "Media"
            : "Baja"}
      </span>

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <div className="task-status">
        <label>Estado:</label>

        <select
          value={task.status}
          onChange={(e) => onChangeStatus(task.id, e.target.value)}
        >
          <option value="pending">Pendiente</option>
          <option value="progress">En proceso</option>
          <option value="done">Hecho</option>
        </select>
      </div>

      <button onClick={() => onEdit(task)}>Editar</button>

      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
}

export default TaskCard;

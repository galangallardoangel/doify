import TaskCard from "./TaskCard";

function Column({ title, tasks, onDeleteTask, onEditTask, onChangeStatus }) {
  return (
    <section className="column">
      <h2>{title}</h2>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onEdit={onEditTask}
            onChangeStatus={onChangeStatus}
          />
        ))}
      </div>
    </section>
  );
}

export default Column;

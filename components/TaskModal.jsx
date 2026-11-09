"use client";

import { useState } from "react";
function TaskModal({ onClose, onAddTask, editingTask, onUpdateTask }) {
  const [title, setTitle] = useState(editingTask?.title || "");
  const [description, setDescription] = useState(
    editingTask?.description || "",
  );
  const [priority, setPriority] = useState(editingTask?.priority || "medium");

  function handleSubmit(e) {
    e.preventDefault();

    if (editingTask) {
      const updatedTask = {
        ...editingTask,
        title: title,
        description: description,
        priority: priority,
      };

      onUpdateTask(updatedTask);
    } else {
      const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        status: "pending",
        priority: priority,
      };

      onAddTask(newTask);
    }

    onClose();
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{editingTask ? "Editar tarea" : "Nueva tarea"}</h2>

        <form onSubmit={handleSubmit}>
          <label>Título</label>
          <input
            type="text"
            placeholder="Escribe el título de la tarea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Descripción</label>
          <textarea
            placeholder="Describe la tarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Prioridad</label>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
          </select>

          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancelar
            </button>

            <button type="submit" className="submit-button">
              {editingTask ? "Guardar cambios" : "Crear tarea"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;

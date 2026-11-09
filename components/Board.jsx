"use client";

import { useState } from "react";

import Column from "./Column";
import TaskModal from "./TaskModal";
import useTasks from "../hooks/useTasks";

function Board() {
  // Lógica y datos de las tareas
  const { tasks, isLoaded, addTask, deleteTask, updateTask, changeTaskStatus } =
    useTasks();

  // Estado de la interfaz
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Abrir el modal para editar
  function editTask(task) {
    setEditingTask(task);
    setIsModalOpen(true);
  }

  // Cerrar el modal
  function closeModal() {
    setIsModalOpen(false);
    setEditingTask(null);
  }

  // Columnas del tablero
  const columns = [
    { id: "pending", title: "Pendiente" },
    { id: "progress", title: "En proceso" },
    { id: "done", title: "Hecho" },
  ];

  // Esperar a recuperar las tareas
  if (!isLoaded) {
    return <main className="app">Cargando Doify...</main>;
  }

  return (
    <main className="app">
      <header className="header">
        <h1>Doify</h1>
        <p>Organiza tus tareas y mantén el control.</p>

        <button
          onClick={() => {
            setEditingTask(null);
            setIsModalOpen(true);
          }}
        >
          + Nueva tarea
        </button>
      </header>

      {isModalOpen && (
        <TaskModal
          onClose={closeModal}
          onAddTask={addTask}
          editingTask={editingTask}
          onUpdateTask={updateTask}
        />
      )}

      {tasks.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">✏️</div>
          <h2>¡Tu espacio está listo!</h2>
          <p>
            Todavía no tienes tareas. Añade tu primera tarea y empieza a
            organizar tus proyectos.
          </p>

          <button
            onClick={() => {
              setEditingTask(null);
              setIsModalOpen(true);
            }}
          >
            + Crear mi primera tarea
          </button>
        </div>
      ) : (
        <div className="board">
          {columns.map((column) => (
            <Column
              key={column.id}
              title={column.title}
              tasks={tasks.filter((task) => task.status === column.id)}
              onDeleteTask={deleteTask}
              onEditTask={editTask}
              onChangeStatus={changeTaskStatus}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Board;

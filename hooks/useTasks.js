"use client";

import { useState, useEffect } from "react";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Recuperar tareas al iniciar
  useEffect(() => {
    try {
      const savedTasks =
        localStorage.getItem("doify-tasks") ||
        localStorage.getItem("taskflow-tasks");

      if (savedTasks) {
        const parsedTasks = JSON.parse(savedTasks);

        if (Array.isArray(parsedTasks)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setTasks(parsedTasks);
        }
      }
    } catch (error) {
      console.error("Error al recuperar las tareas:", error);
    }

    setIsLoaded(true);
  }, []);

  // Guardar tareas cuando cambien
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem("doify-tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error al guardar las tareas:", error);
    }
  }, [tasks, isLoaded]);

  // Crear una tarea
  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // Eliminar una tarea
  function deleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  // Actualizar una tarea
  function updateTask(updatedTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    );
  }

  // Cambiar el estado
  function changeTaskStatus(taskId, newStatus) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  }

  return {
    tasks,
    isLoaded,
    addTask,
    deleteTask,
    updateTask,
    changeTaskStatus,
  };
}

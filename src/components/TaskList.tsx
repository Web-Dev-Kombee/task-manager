import { useTaskStore } from "../store/useTaskStore";
import TaskItem from "./TaskItem";
import { AnimatePresence } from "framer-motion";

function TaskList() {
  const { tasks, filter, toggleTask, deleteTask } = useTaskStore((state) => ({
    tasks: state.tasks,
    filter: state.filter,
    toggleTask: state.toggleTask,
    deleteTask: state.deleteTask,
  }));

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (a.completed === b.completed) {
      return b.createdAt.getTime() - a.createdAt.getTime();
    }
    return a.completed ? 1 : -1;
  });

  if (sortedTasks.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No tasks found. Start by adding a new task!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default TaskList; 
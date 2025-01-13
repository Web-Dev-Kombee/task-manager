import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterOptions from "../components/FilterOptions";

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Task Manager</h1>
      <TaskForm />
      <FilterOptions />
      <TaskList />
    </div>
  );
}

export default Home; 
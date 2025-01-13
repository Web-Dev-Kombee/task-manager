import { useTaskStore } from "../store/useTaskStore";
import { Filter } from "../types/task";

function FilterOptions() {
  const { filter, setFilter } = useTaskStore((state) => ({
    filter: state.filter,
    setFilter: state.setFilter,
  }));

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: "All Tasks" },
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
  ];

  return (
    <div className="flex space-x-2 mb-6">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`px-4 py-2 rounded-md ${
            filter === value
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterOptions; 
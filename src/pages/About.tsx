function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Task Manager</h1>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <p className="text-gray-600">
          Task Manager is a simple and efficient way to organize your daily tasks.
          Built with React and TypeScript, it provides an intuitive interface for
          managing your to-do list.
        </p>
        <h2 className="text-xl font-semibold text-gray-800">Features:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Create and manage tasks with titles and descriptions</li>
          <li>Mark tasks as completed</li>
          <li>Filter tasks by status</li>
          <li>Persistent storage - your tasks remain saved even after refresh</li>
          <li>Responsive design that works on all devices</li>
        </ul>
      </div>
    </div>
  );
}

export default About; 
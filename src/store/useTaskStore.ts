import { create } from 'zustand';
import { Task, Filter } from '../types/task';
import { persist } from 'zustand/middleware';

interface TaskState {
    tasks: Task[];
    filter: Filter;
    addTask: (title: string, description: string) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
    setFilter: (filter: Filter) => void;
}

export const useTaskStore = create<TaskState>()(
    persist(
        (set) => ({
            tasks: [],
            filter: 'all',
            addTask: (title, description) =>
                set((state) => ({
                    tasks: [
                        ...state.tasks,
                        {
                            id: crypto.randomUUID(),
                            title,
                            description,
                            completed: false,
                            createdAt: new Date(),
                        },
                    ],
                })),
            toggleTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === id ? { ...task, completed: !task.completed } : task
                    ),
                })),
            deleteTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id),
                })),
            setFilter: (filter) => set({ filter }),
        }),
        {
            name: 'task-storage',
        }
    )
); 
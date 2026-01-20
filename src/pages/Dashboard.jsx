import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TaskModal from "../components/TaskModal";

export default function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [filter, setFilter] = useState("All");
    const [editingTask, setEditingTask] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    // FILTER LOGIC
    const filteredTasks = tasks.filter((task) => {
        if (filter === "Pending") return task.status === "Pending";
        if (filter === "Completed") return task.status === "Completed";
        return true; // All
    });

    const updateTask = (updatedTask) => {
        setTasks(
            tasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="flex">
            <Sidebar
                active={filter}
                setFilter={setFilter}
                show={showSidebar}
                onClose={() => setShowSidebar(false)}
            />

            <div className="flex-1">
                <Header
                    onAdd={() => {
                        setEditingTask(null);
                        setOpenModal(true);
                    }}
                    onMenu={() => setShowSidebar(true)} // NEW
                />

                <TaskList
                    tasks={filteredTasks}
                    onEdit={(task) => {
                        setEditingTask(task);
                        setOpenModal(true);
                    }}
                    onDelete={deleteTask}
                />
            </div>

            {openModal && (
                <TaskModal
                    task={editingTask}
                    onClose={() => setOpenModal(false)}
                    onSave={editingTask ? updateTask : addTask}
                />
            )}
        </div>
    );
}

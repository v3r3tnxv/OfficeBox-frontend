import { Plate } from "@/shared/ui/Plate";
import "./Tasks.scss";
import { useState } from "react";
import { Button } from "@/shared/ui/Button";

interface Task {
    id: number;
    title: string;
    status: string;
    deadline: string;
}

const initialTasks = [
    { id: 1, title: "Сверстать страницу задач", status: "К выполнению", deadline: "24.03.2025" },
    { id: 2, title: "Подключить API", status: "В процессе", deadline: "24.03.2025" },
    { id: 3, title: "Сделать макет страницы заметок", status: "Тестирование", deadline: "24.03.2025" },
    { id: 4, title: "Задача", status: "Готово", deadline: "24.03.2025" },
];

export const Tasks = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [editingTaskId, setEditingTaskId] = useState<string | number | null>(null);
    const [newTask, setNewTask] = useState({ title: "", status: "К выполнению", deadline: "" });

    const handleSaveTask = (taskId: number | null) => {
        if (!newTask.title || !newTask.deadline) return;

        if (taskId) {
            // Редактируем задачу
            setTasks(tasks.map(task =>
                task.id === taskId ? { ...task, ...newTask } : task
            ));
        } else {
            // Добавляем новую задачу
            setTasks([...tasks, { id: Date.now(), ...newTask }]);
        }

        setNewTask({ title: "", status: "К выполнению", deadline: "" });
        setEditingTaskId(null); // Закрытие формы редактирования
    };

    const handleEditTask = (task: Task) => {
        if (editingTaskId === task.id) {
            // Оставляем форму открытой, если уже редактируем эту задачу
            return;
        } else {
            // Открываем форму редактирования для выбранной задачи
            setEditingTaskId(task.id);
            setNewTask(task); // Заполняем форму данными задачи для редактирования
        }
    };


    return (
        <main className="tasks">
            {/* Форма добавления новой задачи */}
            <Plate className="tasks__plate">
                <input
                    className="tasks__input tasks__input--add"
                    type="text"
                    placeholder="Добавить задачу..."
                    onFocus={() => {
                        setEditingTaskId("new"); // Открываем форму для добавления
                        setNewTask({ title: "", status: "К выполнению", deadline: "" });
                    }}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
                {editingTaskId === "new" && (
                    <>
                        <div className="container">
                            <label className="label">Исполнители</label>
                            <input className="tasks__input" type="text" placeholder="Исполнитель" />
                        </div>
                        <div className="container">
                            <label className="label">Проект</label>
                            <input className="tasks__input" type="text" placeholder="Проект" />
                        </div>
                        <div className="container">
                            <label className="label">Дедлайн</label>
                            <input
                                className="tasks__input"
                                type="date"
                                value={newTask.deadline}
                                onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                            />
                        </div>
                        <div className="container">
                            <label className="label">Статус</label>
                            <select
                                className="tasks__select"
                                value={newTask.status}
                                onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                            >
                                <option>К выполнению</option>
                                <option>В процессе</option>
                                <option>Тестирование</option>
                                <option>Готово</option>
                            </select>
                        </div>
                        <label className="label">Описание</label>
                        <textarea className="tasks__input textarea" placeholder="Описание" />
                        <label className="label">Файлы</label>
                        <input className="tasks__input" type="text" placeholder="Добавить" />
                        <label className="label">Подзадачи</label>
                        <input className="tasks__input" type="text" placeholder="Добавить" />
                        <div className="tasks__form-action">
                            <Button label="Добавить" onClick={() => handleSaveTask(null)} type="accent" />
                        </div>
                    </>
                )}
            </Plate>

            {/* Список задач */}
            {tasks.map((task) => (
                <Plate className="tasks__plate" key={task.id} onClick={() => handleEditTask(task)}>
                    {editingTaskId === task.id ? (
                        <>
                            <input
                                className="tasks__input tasks__input--add"
                                type="text"
                                value={newTask.title}
                                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                            />
                            <div className="container">
                                <label className="label">Исполнители</label>
                                <input className="tasks__input" type="text" placeholder="Исполнитель" />
                            </div>
                            <div className="container">
                                <label className="label">Проект</label>
                                <input className="tasks__input" type="text" placeholder="Проект" />
                            </div>
                            <div className="container">
                                <label className="label">Дедлайн</label>
                                <input
                                    className="tasks__input"
                                    type="date"
                                    value={newTask.deadline}
                                    onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                                />
                            </div>
                            <div className="container">
                                <label className="label">Статус</label>
                                <select
                                    className="tasks__select"
                                    value={newTask.status}
                                    onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                                >
                                    <option>К выполнению</option>
                                    <option>В процессе</option>
                                    <option>Тестирование</option>
                                    <option>Готово</option>
                                </select>
                            </div>
                            <label className="label">Описание</label>
                            <textarea className="tasks__input textarea" placeholder="Описание" />
                            <label className="label">Файлы</label>
                            <input className="tasks__input" type="text" placeholder="Добавить" />
                            <label className="label">Подзадачи</label>
                            <input className="tasks__input" type="text" placeholder="Добавить" />
                            <div className="tasks__form-action">
                                <Button label="Сохранить" onClick={() => handleSaveTask(task.id)} type="accent" />
                            </div>
                        </>
                    ) : (
                        <>
                            <h1>{task.title}</h1>
                            <p>{task.status}</p>
                            <p>{task.deadline}</p>
                        </>
                    )}
                </Plate>
            ))}
        </main>
    );
};

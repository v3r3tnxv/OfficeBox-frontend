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
    { id: 1, title: "Сверстать страницу задач", status: "К выполнению", deadline: "2025-03-24" },
    { id: 2, title: "Подключить API", status: "В процессе", deadline: "2025-03-24" },
    { id: 3, title: "Сделать макет страницы заметок", status: "Тестирование", deadline: "2025-03-24" },
    { id: 4, title: "Задача", status: "Готово", deadline: "2025-03-24" },
];

export const Tasks = () => {
    const [tasks, setTasks] = useState(initialTasks);
    const [editingTaskId, setEditingTaskId] = useState<string | number | null>(null);
    const [newTask, setNewTask] = useState({ title: "", status: "К выполнению", deadline: "" });

    // Очистка данных новой задачи, если форма открыта для редактирования
    const handleSaveTask = (taskId: number | null) => {
        if (!newTask.title || !newTask.deadline) return;

        if (taskId) {
            // Редактирование задачи
            setTasks(tasks.map(task =>
                task.id === taskId ? { ...task, ...newTask } : task
            ));
        } else {
            // Добавление новой задачи
            setTasks([...tasks, { id: Date.now(), ...newTask }]);
        }

        setNewTask({ title: "", status: "К выполнению", deadline: "" }); // Очистка данных новой задачи
        setEditingTaskId(null);
    };

    const handleEditTask = (task: Task) => {
        setEditingTaskId(task.id === editingTaskId ? null : task.id);
        setNewTask(task); // Подставляем данные задачи в форму редактирования
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
                        setNewTask({ title: "", status: "К выполнению", deadline: "" }); // Очищаем данные новой задачи
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
                        // Форма редактирования внутри карточки
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
                        // Обычный вид задачи
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

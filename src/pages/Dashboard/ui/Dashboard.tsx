import { Plate } from "@/shared/ui/Plate";
import userAvatar from "@/assets/UserImage.png"
import "./Dashboard.scss";

export const Dashboard = () => {
    const goals = ["Цель 1", "Цель 2", "Цель 3", "Цель 4", "Цель 5"];
    const tasks = [
        { name: "Задача 1", progress: 19 },
        { name: "Задача 2", progress: 100 },
        { name: "Задача 3", progress: 75 },
        { name: "Задача 4", progress: 30 },
        { name: "Задача 5", progress: 60 },
    ];

    const getProgressColor = (progress: number) => {
        if (progress < 40) return "var(--color-red)";
        if (progress < 70) return "var(--color-orange)";
        if (progress < 99) return "var(--color-yellow)";
        if (progress < 100) return "var(--color-green)";
        return "var(--color-green)";
    };

    const calendar = [
        { time: "08:00", event: "Утренняя планерка" },
        { time: "09:00", event: "Совещание с клиентом" },
        { time: "10:00", event: "Обед" },
        { time: "11:00", event: "Работа над проектом" },
        { time: "12:00", event: "Тренировка" },
        { time: "13:00", event: "бегит" },
    ];

    return (
        <div className="home">
            <Plate className="plate--profile" to="/profile">
                <img src={userAvatar} />
                <p className="">Фасхутдинов Артём Рустемович <span><br />Участие в проектах<br />Проект 1<br />Проект 2</span></p>
            </Plate>

            <Plate className="plate--notes" to="/notes">
                <h1 className="plate__label">Заметки</h1>
                {goals.map((goal, index) => {
                    const id = `goal-${index}`;
                    return (
                        <div key={id} className="goal">
                            <input id={id} type="checkbox" className="goal__checkbox" />
                            <label htmlFor={id} className="goal__label">
                                {goal}
                            </label>
                        </div>
                    );
                })}
            </Plate>

            <Plate className="plate--calendar" to="/calendar">
                <h1 className="plate__label">Календарь</h1>

                {calendar.map(({ time }, index) => (
                    <div key={index} className="calendar__row">
                        <span className="calendar__time">{time}</span>
                    </div>
                ))}
            </Plate>

            <Plate className="plate--tasks" to="/tasks">
                <h1 className="plate__label">Задачи</h1>
                {tasks.map((task, index) => (
                    <div key={index} className="task">
                        <div className="task__label">{task.name}</div>
                        <div className="progress">
                            <div
                                className="progress__bar"
                                style={{
                                    width: `${task.progress}%`,
                                    backgroundColor: getProgressColor(task.progress),
                                }}
                            />
                        </div>
                    </div>
                ))}
            </Plate>

            <Plate className="plate--add">
                <button className="plus-button" aria-label="Добавить">
                    <span></span>
                    <span></span>
                </button>
            </Plate>
        </div >
    );
};

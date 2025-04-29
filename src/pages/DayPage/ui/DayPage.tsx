import { useParams, useNavigate } from "react-router-dom";
import styles from "./DayPage.module.scss";
import { Button } from "@/shared/ui";

const monthIndex: Record<string, number> = {
    январь: 0, февраль: 1, март: 2, апрель: 3, май: 4, июнь: 5,
    июль: 6, август: 7, сентябрь: 8, октябрь: 9, ноябрь: 10, декабрь: 11,
};

export const DayPage = () => {
    const { month, day } = useParams();
    const navigate = useNavigate();
    const year = 2025;

    const monthIndexValue = month ? monthIndex[month.toLowerCase()] : -1;
    const dayIndex = day ? parseInt(day, 10) : -1;

    if (monthIndexValue < 0 || monthIndexValue > 11 || dayIndex < 1 || dayIndex > 31) {
        return <div>Ошибка в параметрах даты. Пожалуйста, проверьте URL.</div>;
    }

    const currentDate = new Date(year, monthIndexValue, dayIndex);
    if (isNaN(currentDate.getTime())) {
        return <div>Ошибка в дате. Пожалуйста, проверьте URL.</div>;
    }

    const getCentered7Days = (date: Date) => {
        const days = [];
        for (let i = -3; i <= 3; i++) {
            const nextDay = new Date(date);
            nextDay.setDate(date.getDate() + i);
            days.push(nextDay);
        }
        return days;
    };

    const next7Days = getCentered7Days(currentDate);

    const handleDayClick = (date: Date) => {
        const monthName = next7Days[3].toLocaleString("ru-RU", { month: "long" }).toLowerCase();
        const day = date.getDate();
        navigate(`/calendar/${monthName}/${day}`);
    };

    const formattedDate = currentDate.toLocaleDateString("ru-RU", {
        day: "numeric", month: "long", year: "numeric",
    });

    const tasks = [
        {
            start: "08:00",
            end: "08:30",
            items: [
                "Просмотр календаря, списка задач и приоритетов.",
                "Быстрый просмотр входящих писем.",
                "Определение ключевых задач."
            ],
            tag: "(личн.)"
        },
        {
            start: "08:30",
            end: "09:00",
            items: [
                "Короткая встреча с командой (15–20 минут):",
                "Что сделано с прошлого стендапа?",
                "Что планируется сегодня?",
                "Есть ли блокеры или проблемы?",
                "Обсуждение текущего прогресса по проекту",
            ],
            tag: "(раб.)"
        },
        {
            start: "09:00",
            end: "10:30",
            items: [
                "Анализ отчетов по проекту.",
                "Обновление плана проекта.",
                "Подготовка презентаций или документов для клиента."
            ]
        },
        {
            start: "10:30",
            end: "10:45",
            items: [
                "Перерыв",
                "Быстрая проверка сообщений для срочных вопросов."
            ]
        },
        {
            start: "13:00",
            end: "14:30",
            items: [
                "Онлайн встречи с членами команды"
            ]
        }
    ];

    return (
        <div className={styles["day-page"]}>
            <h1 className={styles["day-page__title"]}>Календарь</h1>
            <p className={styles["day-page__date"]}>{formattedDate}</p>

            <div className={styles["day-page__days"]}>
                {next7Days.map((date, index) => (
                    <Button
                        key={date.toString()}
                        className={`${styles["day-page__day"]} ${index === 3 ? styles["day-page__day--selected"] : ""}`}
                        label={date.getDate().toString()}
                        onClick={() => handleDayClick(date)}
                    />
                ))}
            </div>

            <div className={styles["day-page__controls"]}>
                <button className={styles["day-page__time-btn"]}>Выбрать время</button>
                <input
                    type="text"
                    className={styles["day-page__input"]}
                    placeholder="Новая задача"
                />
            </div>

            <div className={styles["day-page__tasks"]}>
                {tasks.map((task, index) => (
                    <div key={index} className={styles["day-page__task"]}>
                        <div className={styles["day-page__task-time"]}>
                            <p>Начало: {task.start}</p>
                            <p>Конец: {task.end}</p>
                        </div>
                        <ul className={styles["day-page__task-list"]}>
                            {task.items.map((item, itemIndex) => (
                                <li key={itemIndex} className={styles["day-page__task-item"]}>
                                    {item} <span className={styles["tag-work"]}>{task.tag}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

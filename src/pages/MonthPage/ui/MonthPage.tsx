import { useParams, useNavigate } from "react-router-dom";
import styles from "./MonthPage.module.scss";
import { Button } from "@/shared/ui";

const monthIndex: Record<string, number> = {
    январь: 0,
    февраль: 1,
    март: 2,
    апрель: 3,
    май: 4,
    июнь: 5,
    июль: 6,
    август: 7,
    сентябрь: 8,
    октябрь: 9,
    ноябрь: 10,
    декабрь: 11,
};

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export const MonthPage = () => {
    const { month } = useParams();
    const navigate = useNavigate(); // Вызов useNavigate внутри компонента
    const year = 2025;

    // Проверка на пустое значение 'month' и присвоение дефолтного значения (0 - январь)
    const index = month ? monthIndex[month.toLowerCase()] : 0;

    const firstDate = new Date(year, index, 1);
    const startDay = (firstDate.getDay() + 6) % 7;

    const daysInMonth = new Date(year, index + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, index, 0).getDate();

    const totalCells = 42; // 6 недель * 7 дней

    const days: { day: number; currentMonth: boolean }[] = [];

    // Предыдущий месяц
    for (let i = startDay - 1; i >= 0; i--) {
        days.push({ day: daysInPrevMonth - i, currentMonth: false });
    }

    // Текущий месяц
    for (let i = 1; i <= daysInMonth; i++) {
        days.push({ day: i, currentMonth: true });
    }

    // Следующий месяц
    const remaining = totalCells - days.length;
    for (let i = 1; i <= remaining; i++) {
        days.push({ day: i, currentMonth: false });
    }

    // Функция для обработки клика по дню
    const handleDayClick = (day: number, current: boolean) => {
        if (!current || !month) return;
        navigate(`/calendar/${month}/${day}`);
    };

    return (
        <div className={styles.month}>
            <h1 className={styles.month__title}>Календарь</h1>
            <p>{month} {year}</p>

            <div className={styles.calendar__grid}>
                {weekDays.map((day) => (
                    <div key={day} className={styles.calendar__weekday}>{day}</div>
                ))}
                {days.map(({ day, currentMonth }, index) => (
                    <Button
                        key={index}
                        className={`${styles.calendar__button} ${!currentMonth ? styles.disabled : ""}`}
                        label={day.toString()}
                        onClick={() => handleDayClick(day, currentMonth)} // Навешиваем обработчик на кнопку
                    />
                ))}
            </div>
        </div>
    );
};

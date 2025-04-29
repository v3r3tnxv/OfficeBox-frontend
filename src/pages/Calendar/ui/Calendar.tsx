import { Button } from "@/shared/ui";
import styles from "./Calendar.module.scss";
import { useNavigate } from "react-router-dom";

const months = [
    "Январь", "Февраль", "Март", "Апрель",
    "Май", "Июнь", "Июль", "Август",
    "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

export const Calendar = () => {
    const navigate = useNavigate();

    const handleClick = (month: string) => {
        navigate(`/calendar/${month.toLowerCase()}`);
    };

    return (
        <div className={styles.calendar}>
            <h1 className={styles.calendar__title}>Календарь</h1>
            <div className={styles.calendar__months}>
                {months.map((month) => (
                    <Button
                        key={month}
                        className={styles.calendar__button}
                        label={month}
                        onClick={() => handleClick(month)}
                    />
                ))}
            </div>
        </div>
    );
};

import { Input } from "@/shared/ui";
import addIcon from "@/assets/icons/add-blue.svg";
import styles from "./Notes.module.scss";

interface NoteCardProps {
    chatName: string;
    message: string;
    avatar: string;
}

const NoteCard = ({ }: NoteCardProps) => {
    return (
        <div className={styles.noteCard}>
            {/* Контент для заметки */}
        </div>
    );
};

export const Notes = () => {
    const goals = ["Цель 1", "Цель 2", "Цель 3", "Цель 4", "Цель 5"];

    return (
        <div className={styles.notes}>
            <h1 className={styles.notes__title}>Заметки</h1>

            {goals.map((goal, index) => {
                const id = `goal-${index}`;
                if (index === 0) {
                    return (
                        <div key={id} className={styles.noteCard__new}>
                            <img src={addIcon} alt="Новая заметка" className={styles.noteCard__icon} />
                            <Input placeholder="Новая заметка" className={styles.noteCard__input} />
                        </div>
                    );
                }
                return (
                    <div key={id} className={styles.noteCard}>
                        <input id={id} type="checkbox" className={styles.noteCard__checkbox} />
                        <label htmlFor={id} className={styles.noteCard__label}>
                            {goal}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};

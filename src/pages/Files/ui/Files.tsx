import fileIcon from "@/assets/icons/file.svg";
import styles from "./Files.module.scss";

interface FileCardProps {
    fileName: string;
}

const FileCard = ({ fileName }: FileCardProps) => {
    return (
        <div className={styles.fileCard}>
            <img className={styles.fileCard__icon} src={fileIcon} alt="Аватар" />
            <div className={styles.fileCard__name}>{fileName}</div>
        </div>
    );
};

export const Files = () => {
    return (
        <div className={styles.files}>
            <h1 className={styles.files__title}>Файлы</h1>

            <p className={styles.files__label}>Мои документы</p>
            <div className={styles.files__list}>
                <FileCard fileName="Файл 1" />
                <FileCard fileName="Файл 2" />
                <FileCard fileName="Файл 3" />
            </div>

            <p className={styles.files__label}>Избранное</p>
            <div className={styles.files__list}>
                <FileCard fileName="Файл 1" />
                <FileCard fileName="Файл 2" />
                <FileCard fileName="Файл 3" />
            </div>

            <p className={styles.files__label}>Доступные мне</p>
            <div className={styles.files__list}>
                <FileCard fileName="Файл 1" />
                <FileCard fileName="Файл 2" />
                <FileCard fileName="Файл 3" />
            </div>
        </div>
    );
};

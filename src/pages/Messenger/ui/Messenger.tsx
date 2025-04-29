import { Button, Input } from "@/shared/ui";
import plusIcon from "@/assets/icons/add.svg";
import avatarDefault from "@/assets/icons/avatar-default.svg";
import styles from "./Messenger.module.scss";

interface ChatCardProps {
    chatName: string;
    message: string;
    avatar: string;
}

const ChatCard = ({ chatName, message, avatar }: ChatCardProps) => {
    return (
        <div className={styles.chatCard}>
            <img className={styles.chatCard__avatar} src={avatar} alt="Аватар" />
            <div className={styles.chatCard__name}>{chatName}</div>
            <div className={styles.chatCard__info}>{message}</div>
        </div>
    );
};

export const Messenger = () => {
    return (
        <div className={styles.messenger}>
            <h1 className={styles.messenger__title}>Сообения</h1>

            <Button className={styles.messenger__button} label="Новый чат">
                <img src={plusIcon} alt="Новый чат" />
            </Button>

            <Input placeholder="Поиск..." className={styles.messenger__input} />

            <div className={styles.messenger__list}>
                <ChatCard chatName="Иван Иванов" message="Привет" avatar={avatarDefault} />
                <ChatCard chatName="Мария Петрова" message="Завтра напишу" avatar={avatarDefault} />
                <ChatCard chatName="Собираем проект на Next" message="Ехала" avatar={avatarDefault} />
            </div>
        </div>
    );
};

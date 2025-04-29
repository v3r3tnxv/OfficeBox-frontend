import { Button, Input } from "@/shared/ui";
import addIcon from "@/assets/icons/add.svg";
import avatarDefault from "@/assets/icons/avatar-default.svg";
import styles from "./Contacts.module.scss";

interface ContactCardProps {
    userName: string;
    userStatus: string;
    avatar: string;
}

const ContactCard = ({ userName, userStatus, avatar }: ContactCardProps) => {
    return (
        <div className={styles.contactCard}>
            <img className={styles.contactCard__avatar} src={avatar} alt="Аватар" />
            <div className={styles.contactCard__name}>{userName}</div>
            <div className={styles.contactCard__info}>{userStatus}</div>
        </div>
    );
};

export const Contacts = () => {
    return (
        <div className={styles.contacts}>
            <h1 className={styles.contacts__title}>Контакты</h1>

            <Button className={styles.contacts__button} label="Пригласить">
                <img src={addIcon} alt="Добавить" />
            </Button>

            <Input placeholder="Поиск..." className={styles.contacts__input} />

            <div className={styles.contacts__list}>
                <ContactCard userName="Иван Иванов" userStatus="Участник команды" avatar={avatarDefault} />
                <ContactCard userName="Мария Петрова" userStatus="Не в команде" avatar={avatarDefault} />
                <ContactCard userName="Сергей Смирнов" userStatus="Не в команде" avatar={avatarDefault} />
            </div>
        </div>
    );
};

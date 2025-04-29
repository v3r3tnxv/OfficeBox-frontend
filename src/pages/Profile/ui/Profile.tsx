import { Input, Button } from "@/shared/ui";
import styles from './Profile.module.scss';
import { useState } from "react";
import userAvatar from "@/assets/UserImage.png"

export const Profile = () => {
    const [firstName, setFirstName] = useState("Артем");
    const [lastName, setLastName] = useState("Фасхутдинов");
    const [telNumber, setTelNumber] = useState("+7 (918) 100-00-00");
    const [email, setEmail] = useState("fashutdinov@mail.com");

    return (
        <div className={styles.profile}>
            <h1 className={styles.profile__title}>Профиль</h1>

            <img className={styles.profile__avatar} src={userAvatar} />

            <p className={styles.profile__label}>Ваше имя</p>
            <Input
                className={styles.profile__input}
                placeholder="Имя"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
                className={styles.profile__input}
                placeholder="Фамилия"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />

            <p className={styles.profile__label}>Телефон</p>
            <Input
                className={styles.profile__input}
                placeholder="Номер телефона"
                value={telNumber}
                onChange={(e) => setTelNumber(e.target.value)}
            />

            <p className={styles.profile__label}>Электронная почта</p>
            <Input
                className={styles.profile__input}
                placeholder="Эл. почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Button
                className={styles.profile__button}
                label="Сохранить"
                onClick={() => ('')}
            />
        </div>
    );
};

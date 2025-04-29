import { useNavigate } from 'react-router-dom';
import { Input, Button } from "@/shared/ui";
import vk from "@/assets/icons/vk.svg";
import gu from "@/assets/icons/gu.svg";
import google from "@/assets/icons/google.svg";
import ob from "@/assets/icons/office-box.svg";
import styles from './Login.module.scss';

export const Login = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.login}>
            <img src={ob} alt="OfficeBox logo" className={styles.login__logo} />
            <span className={styles.login__title}>OfficeBox</span>

            <Input className={styles.login__input} placeholder="Логин" type="text" />
            <Input className={styles.login__input} placeholder="Пароль" type="password" />

            <Button className={styles.login__buton} label="Войти" onClick={() => navigate('/dashboard')} />

            <div className={styles.login__socials}>
                <img src={vk} alt="VK" />
                <img src={gu} alt="GU" />
                <img src={google} alt="Google" />
            </div>

            <Button className={styles.login__buton} label="Регистрация" onClick={() => navigate('/register')} />
        </div>
    );
};

import { Button } from "@/shared/ui";
import arrowUpIcon from "@/assets/icons/arrow-up.svg";
import attachUpIcon from "@/assets/icons/attach.svg";
import styles from "./Ai.module.scss";

interface MessageProps {
    from: "user" | "bot";
    children: React.ReactNode;
}

const Message = ({ from, children }: MessageProps) => {
    const messageClass =
        from === "user" ? styles.ai__message_user : styles.ai__message_bot;

    return (
        <div className={`${styles.ai__message} ${messageClass}`}>
            {children}
        </div>
    );
};

export const Ai = () => {
    return (
        <div className={styles.ai}>
            <h1 className={styles.ai__title}>OfficeBox Chat</h1>
            <div className={styles.ai__chat}>
                <div className={styles.ai__messages}>
                    <Message from="user">Привет</Message>
                    <Message from="bot">Здравствуйте! Чем могу помочь?</Message>
                    <Message from="user">Спланируй мой день на завтра учитывая мои задачи и распиание</Message>
                    <Message from="bot">
                        <ul>
                            <li>• 08:00–08:30 Разбор приоритетов на день: календарь, таски, дедлайны. Просматриваю почту — вычленяю срочное.</li>
                            <li>• 08:30–09:00 Командный синк: за 15–20 минут выясняем, кто где буксует, кто что делает, где помочь.</li>
                            <li>• 09:00–10:30 Фокус на проект: анализ отчётов, апдейт плана, правки в доках, если надо — подгоняю презентацию.</li>
                            <li>• 10:30–10:45 Пауза. Протягиваюсь, пью воду, чек сообщений.</li>
                            <li>• 13:00–14:30 Созвон с командой: обсуждаем прогресс, блокеры, принимаем решения, назначаем ответственных.</li>
                        </ul>
                        <br />
                        <p>Если есть другие слоты или задачи — скинь, подстрою.</p>
                    </Message>
                    <Message from="user">Спасибо</Message>
                </div>

                <form className={styles.ai__form}>
                    <input
                        type="text"
                        placeholder="Спросите что-нибудь..."
                        className={styles.ai__input}
                    />

                    <label htmlFor="file-upload" className={styles.ai__attach}>
                        <img className={styles.ai__icon_attach} src={attachUpIcon} alt="Прикрепить файл" />
                    </label>
                    <input
                        id="file-upload"
                        type="file"
                        className={styles.ai__fileInput}
                        style={{ display: "none" }} // Скрываем реальный input
                    />

                    <Button className={styles.ai__send} label="">
                        <img className={styles.ai__icon} src={arrowUpIcon} alt="Отправить" />
                    </Button>
                </form>
            </div>
        </div>
    );
};

import "./HeaderMobile.scss"
import { Menu } from "@/widgets/Menu";
import notificationIcon from "@/assets/icons/notification.svg";
import settingsIcon from "@/assets/icons/settings.svg";

export const HeaderMobile = () => {
    return (
        <header className="header-mobile">
            <Menu />

            <div className="header-mobile__right">
                <img className="header-mobile__image" src={notificationIcon} alt="" />
                <img className="header-mobile__image" src={settingsIcon} alt="" />
            </div>
        </header>
    );
};

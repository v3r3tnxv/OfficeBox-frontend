import { Logo } from "@/shared/ui/Logo";
import "./Header.scss"
import { Avatar } from "@/shared/ui/Avatar";
import { Button } from "@/shared/ui/Button";

export const Header = () => {
    return (
        <header className="header">
            <Logo />

            <div className="header__right">
                <Button label={"Редактировать"} />
                <Avatar />
            </div>
        </header>
    );
};

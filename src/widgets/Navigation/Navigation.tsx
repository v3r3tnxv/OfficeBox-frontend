import "./Navigation.scss";
import fileIcon from "@/assets/icons/file.svg"
import contactIcon from "@/assets/icons/contact.svg"
import messengerIcon from "@/assets/icons/messenger.svg"
import aiIcon from "@/assets/icons/ai.svg"
import dashboardIcon from "@/assets/icons/dashboard.svg"
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    const links = [
        { href: "/files", icon: fileIcon },
        { href: "/contacts", icon: contactIcon },
        { href: "/messenger", icon: messengerIcon },
        { href: "/ai", icon: aiIcon },
        { href: "/", icon: dashboardIcon }
    ];

    return (
        <nav className="navigation">
            {links.map(({ href, icon }) => (
                <NavLink
                    key={href}
                    to={href}
                    className={({ isActive }) => `navigation__link ${isActive ? "active" : ""}`}
                >
                    <img className="navigation__image" src={icon} alt="" />
                </NavLink>
            ))}
        </nav>
    );
};

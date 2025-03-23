import "./NavigationMobile.scss";
import fileIcon from "@/assets/icons/file.svg"
import contactIcon from "@/assets/icons/contact.svg"
import messengerIcon from "@/assets/icons/messenger.svg"
import aiIcon from "@/assets/icons/ai.svg"
import dashboardIcon from "@/assets/icons/dashboard.svg"
import { NavLink } from "react-router-dom";

export const NavigationMobile = () => {
    const links = [
        { href: "/files", icon: fileIcon },
        { href: "/contacts", icon: contactIcon },
        { href: "/messenger", icon: messengerIcon },
        { href: "/ai", icon: aiIcon },
        { href: "/", icon: dashboardIcon }
    ];

    return (
        <nav className="navigation-mobile">
            {links.map(({ href, icon }) => (
                <NavLink
                    key={href}
                    to={href}
                    className={({ isActive }) => `navigation-mobile__link ${isActive ? "active" : ""}`}
                >
                    <img className="navigation-mobile__image" src={icon} alt="" />
                </NavLink>
            ))}
        </nav>
    );
};

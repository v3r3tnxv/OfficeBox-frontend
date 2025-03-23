import { LogoImage } from "./LogoImage";
import "./Logo.scss";

export const Logo = () => {
    return (
        <a className="logo" href="/">
            <LogoImage />
            <span className="logo__label">OfficeBox</span>
        </a>
    );
};

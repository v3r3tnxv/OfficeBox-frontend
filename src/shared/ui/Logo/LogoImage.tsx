import logo from "@/assets/icons/office-box.svg";
import "./LogoImage.scss";

interface LogoImageProps {
    className?: string;
}

export const LogoImage = ({ className = "" }: LogoImageProps) => {
    return <img className={`logo__image ${className}`} src={logo} alt="OfficeBox Logo" />;
};

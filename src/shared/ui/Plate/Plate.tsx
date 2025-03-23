import { useNavigate } from "react-router-dom";
import "./Plate.scss";

interface PlateProps {
    children: React.ReactNode;
    className?: string;
    to?: string;
    onClick?: () => void;
}

export const Plate = ({ children, className, to, onClick }: PlateProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to);
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className={`plate ${className || ""}`} onClick={handleClick} style={{ cursor: to ? "pointer" : "default" }}>
            {children}
        </div>
    );
};

import "./Button.scss";

interface ButtonProps {
    label: string;
    children?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: "accent" | "cancel";
}

export const Button = ({
    label,
    children,
    onClick,
    disabled,
    className,
    type = "accent"
}: ButtonProps) => {
    let typeClass = "";

    switch (type) {
        case "accent":
            typeClass = "Button_Accent";
            break;
        case "cancel":
            typeClass = "Button_Cancel";
            break;
        default:
            typeClass = "Button_Accent";
    }

    const buttonClassName = `Button ${typeClass} ${className || ''}`.trim();

    return (
        <button className={buttonClassName} onClick={onClick} disabled={disabled}>
            {label}
            {children}
        </button>
    );
}

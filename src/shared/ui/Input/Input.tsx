import "./Input.scss";

interface InputProps {
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: string;
}

export const Input = ({
    placeholder,
    value,
    onChange,
    onClick,
    disabled,
    className,
    type = "text",
}: InputProps) => {
    return (
        <input
            type={type}
            className={`Input ${className || ''}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onClick={onClick}
            disabled={disabled}
        />
    );
};

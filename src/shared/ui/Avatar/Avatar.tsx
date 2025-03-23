import avatar from "@/assets/icons/profile.svg";
import "./Avatar.scss";

export const Avatar = () => {
    return (
        <img className="avatar" src={avatar} alt="User avatar" />
    );
};

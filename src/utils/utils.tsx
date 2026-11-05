import { useNavigate } from "react-router-dom";

export const handleNavigation = (path: string) => {
    const navigate = useNavigate();
    navigate(path ?? '/');
};

import { useAppSelector } from "./useAppSelector";

// Returns true if user is logged in, false otherwise
export const useAuth = () => {
    const { user, token } = useAppSelector((state) => state.auth);
    return !(user === false && token === false);
};

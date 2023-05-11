import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { IUser } from "../../../store/features/auth/interfaces/user.interface";
import { logout } from "../../../store/features/auth/authSlice";

import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { red } from "@mui/material/colors";

interface IProps {
    styles?: any;
    user: IUser;
}

export default function AboutUser({ styles, user }: IProps) {
    const dispatch = useAppDispatch();

    const handleLogoutClick = () => {
        dispatch(logout());
    };

    return (
        <Card elevation={1} sx={{ width: "100%", px: 2, ...styles }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {user.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={user.name}
                subheader={user.email}
                action={
                    <IconButton
                        sx={{ mt: 0.5 }}
                        aria-label="logout"
                        onClick={handleLogoutClick}
                    >
                        <LogoutIcon />
                    </IconButton>
                }
            />
        </Card>
    );
}

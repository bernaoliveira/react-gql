import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { red } from "@mui/material/colors";

export default function AboutUser() {
    return (
        <Card elevation={1} sx={{ width: "100%", px: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
                action={
                    <IconButton sx={{ mt: 0.5 }} aria-label="logout">
                        <LogoutIcon />
                    </IconButton>
                }
            />
        </Card>
    );
}

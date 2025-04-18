import { Box, Typography, Button } from "@mui/material";
import { Outlet } from "@tanstack/react-router";
import { useThemeStore } from "../../store/useThemeStore";

const Layout = () => {
    const { setTheme } = useThemeStore();

    console.log("them ==>", setTheme)
    return (
        <Box sx={{
            bgcolor: 'background.default'
        }}>
            <Typography variant="h3" color="primary">Hello mello</Typography>
            <Button variant='contained' onClick={() => setTheme('green')}>Change theme</Button>
            <Outlet />
        </Box>
    )
}

export default Layout;

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Layout = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            bgcolor: 'background.default'
        }}>
            <Typography variant="h3" color="primary">Hello mello</Typography>
        </Box>
    )
}

export default Layout;

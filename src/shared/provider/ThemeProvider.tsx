import { ThemeProvider } from '@mui/material/styles'
import { AppTheme, getTheme } from '../../theme';

type ThemeProviderProps = React.PropsWithChildren<{}>;      

const CustomThemeProvider = (props: ThemeProviderProps) => {
    const { children } = props;
    const defaultThemeName = localStorage.getItem('theme') || 'light' as string;

    const theme = getTheme(defaultThemeName as AppTheme);

    return (
        <ThemeProvider theme={theme}>   
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider;
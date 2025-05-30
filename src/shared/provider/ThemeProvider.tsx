import { ThemeProvider } from '@mui/material/styles'
import { AppTheme, getTheme } from '../../theme';
import { useThemeStore } from '../../store/useThemeStore';

type ThemeProviderProps = React.PropsWithChildren<{}>;

const CustomThemeProvider = (props: ThemeProviderProps) => {
    const { children } = props;
    const themeStore = useThemeStore();

    // console.log("theme ===>", themeName)
    // const defaultThemeName = localStorage.getItem('theme') || 'light' as string;

    const theme = getTheme(themeStore.theme as AppTheme);

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider;
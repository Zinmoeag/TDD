import { darkTheme, greenTheme, lightTheme } from "./scheme";


// register theme
export const appThemes = {
    dark: darkTheme,
    light: lightTheme,
    green: greenTheme
}

export type AppTheme = keyof typeof appThemes;

export function getTheme(theme: keyof typeof appThemes) {
    return appThemes[theme];
}
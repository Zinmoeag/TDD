import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { AppTheme } from "../theme";

type ThemeStoreProps = {
    theme: AppTheme,
    setTheme: (theme: AppTheme) => void;
}

export const useThemeStore = create<ThemeStoreProps>()(
    persist(
        (set, get) => ({
            theme: "light",
            setTheme: (theme) => set({ theme })
        }),
        {
            name: 'theme-storage'
        }
    )
)
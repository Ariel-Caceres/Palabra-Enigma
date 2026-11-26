import { useEffect } from "react";
import { useThemeStore } from "../stores/theme.store";
import { useSystemTheme } from "./useSystemTheme";

export function useTheme() {
    const { theme } = useThemeStore();
    const systemTheme = useSystemTheme();

    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        document.documentElement.classList.toggle("dark", currentTheme === "dark");
    }, [currentTheme]);
    return {
        theme,
        currentTheme,
    };
}

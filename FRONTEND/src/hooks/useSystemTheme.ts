import { useEffect, useState } from "react";

export function useSystemTheme() {
    const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");

        const updateTheme = () => {
            setSystemTheme(media.matches ? "dark" : "light");
        };

        updateTheme();

        media.addEventListener("change", updateTheme);

        return () => {
            media.removeEventListener("change", updateTheme);
        };
    }, []);

    return systemTheme;
}

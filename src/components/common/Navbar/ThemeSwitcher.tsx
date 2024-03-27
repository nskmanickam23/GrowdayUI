import React, { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const useHasMounted = () => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
}

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const hasMounted = useHasMounted();
    const [storedTheme, setStoredTheme] = useState<string | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setStoredTheme(storedTheme);
            setTheme(storedTheme); // Ensure theme consistency
        }
    }, [setTheme]);

    const handleTheme = () => {
        const newTheme = storedTheme === "dark" ? "light" : "dark";
        localStorage.setItem('theme', newTheme);
        setStoredTheme(newTheme);
        setTheme(newTheme); // Ensure theme consistency
    }

    return (
        <>
            {hasMounted && storedTheme === "dark" ? (
                <div className="border-[1px] p-2 m-2 bg-lightbg dark:bg-darkbg border-b border-lightborder dark:border-darkborder flex items-center rounded-lg">
                    <button  onClick={handleTheme}>
                        <Sun className="w-4 h-4" />
                    </button>
                </div>

            ) : (
                <div className="border-[1px] p-2 m-2 bg-lightbg dark:bg-darkbg border-b border-lightborder dark:border-darkborder flex items-center rounded-lg">
                    <button  onClick={handleTheme}>
                            <Moon className="w-4 h-4" />
                    </button>
                </div>

            )}
        </>
    );
}

export default ThemeSwitcher;

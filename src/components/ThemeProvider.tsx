import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

interface ThemeProviderState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: (ref: React.RefObject<HTMLButtonElement | null>, duration?: number) => void;
}

const initialState: ThemeProviderState = {
    theme: "light",
    setTheme: () => null,
    toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
    children,
    defaultTheme = "light",
    storageKey = "portfolio-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof localStorage !== "undefined") {
            return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
        }
        return defaultTheme;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light";

            root.classList.add(systemTheme);
            return;
        }

        root.classList.add(theme);
    }, [theme]);

    const setTheme = useCallback((theme: Theme) => {
        localStorage.setItem(storageKey, theme);
        setThemeState(theme);
    }, [storageKey]);

    const toggleTheme = useCallback((ref: React.RefObject<HTMLButtonElement | null>, duration = 400) => {
        const applyTheme = () => {
            const newTheme = theme === "dark" ? "light" : "dark";
            setTheme(newTheme);
        };

        const doc = document as any;
        if (!ref?.current || typeof doc.startViewTransition !== "function") {
            applyTheme();
            return;
        }

        const button = ref.current;
        const { top, left, width, height } = button.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
        const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
        const maxRadius = Math.hypot(Math.max(x, viewportWidth - x), Math.max(y, viewportHeight - y));

        const transition = doc.startViewTransition(() => {
            flushSync(applyTheme);
        });

        transition.ready.then(() => {
            document.documentElement.animate({
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            }, {
                duration,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            });
        });
    }, [theme, setTheme]);

    const value = {
        theme,
        setTheme,
        toggleTheme,
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider");

    return context;
};

interface ThemeTogglerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    duration?: number;
}

export const ThemeToggler = ({ className, duration = 400, ...props }: ThemeTogglerProps) => {
    const { theme, toggleTheme } = useTheme();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            ref={buttonRef}
            onClick={() => toggleTheme(buttonRef, duration)}
            className={cn(className)}
            {...props}
        >
            {isDark ? <Sun className="w-full h-full" /> : <Moon className="w-full h-full" />}
            <span className="sr-only">Toggle theme</span>
        </button>
    );
};

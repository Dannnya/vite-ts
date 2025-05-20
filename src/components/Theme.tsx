import { useContext, useState, type ReactNode, createContext } from 'react';
import { Card } from './Card';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');
    
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    )
}

const Theme = () => {
    return (
        <ThemeProvider>
            <Card />
        </ThemeProvider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be  used within a ThemeProvider');
    }

    return context;
}

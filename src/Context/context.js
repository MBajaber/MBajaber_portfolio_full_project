import React, {useState ,createContext, useMemo } from 'react';

export const MyContext = createContext();

export default function ProviderContext({ children }) {

    const [color, setColor] = useState('#ec1839');
    const [openSidebar, setopenSidebar] = useState(false);
    const [isThemeDark, setIsThemeDark] = useState(JSON.parse(localStorage.getItem('theme')) || false);
    const [theme, setTheme] = useState('light');

    const changeColorFunc = (value) => {
        setColor(value);
        localStorage.setItem('main_color', JSON.stringify(value));
    }

    const toggleSidebarFunc = () => setopenSidebar(bool => !bool);

    useMemo(() => {
        localStorage.setItem('theme', JSON.stringify(isThemeDark));
        const getValue = isThemeDark ? 'dark' : 'light';
        setTheme(getValue);
    }, [isThemeDark]);

    const toggleThemeFunc = (value) => {
        if(value === undefined) {
            setIsThemeDark(theme => !theme);
        } else {
            setIsThemeDark(value);
        }
    };

    return (
        <MyContext.Provider value={{
            mainColor: color,
            sidebarOpen: openSidebar,
            isDarkTheme: isThemeDark,
            theme: theme,
            changeColor: (value) => changeColorFunc(value),
            toggleSidebar: () => toggleSidebarFunc(),
            toggleTheme: (value) => toggleThemeFunc(value),
            themeStyle: {
                light: {
                    sidebarBgColor: '#fdf9ff',
                    bodyColor: '#f2f2fc',
                    borderColor: '#e8dfec',
                    pramiaryTextColor: '#302e4d',
                    secondaryTextColor: '#504e70',
                },
                dark: {
                    sidebarBgColor: '#222',
                    bodyColor: '#151515',
                    borderColor: '#393939',
                    pramiaryTextColor: '#fff',
                    secondaryTextColor: '#e9e9e9',
                }
            }
        }}>
            {children}
        </MyContext.Provider>
    )
}
import React, { useState } from "react";
import { MyThemes } from "./styles/themes";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

export const AppThemeProvider = function({children}) {
    const [themeMode, setThemeMode] = useState('dark');
    const toggleThemeMode = function() {
        setThemeMode((lastMode) => (lastMode === 'dark' ? 'light' : 'dark'));
    };
    const currentTheme = MyThemes[themeMode];

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline/>
            {children(toggleThemeMode, themeMode)}
        </ThemeProvider>
    );
};

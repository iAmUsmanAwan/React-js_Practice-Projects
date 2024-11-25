import { createContext, useContext } from "react";

//? Creating a context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

//? Creating a Provider component to wrap the App and provide the context value to the children components
//* making everyone aware that the context exists
export const ThemeProvider = ThemeContext.Provider;
//? this is another way of making context, now instead of saying themeProvider.provider we can directly say themeProvider

//* so that every component can use it
export default function useTheme() {
    return useContext(ThemeContext);
}
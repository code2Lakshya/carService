import { createContext, useState } from "react";



export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [form, setForm] = useState(false);

    const value = { form, setForm };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
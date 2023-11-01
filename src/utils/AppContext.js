import { createContext, useState } from "react";



export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const [form, setForm] = useState(false);
    const [currentTab,setCurrentTab]=useState('Home');

    const value = { form, setForm ,currentTab,setCurrentTab};
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
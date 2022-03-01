import React, {createContext} from 'react';
import useProduct from "../hooks/useProduct";
import useFirebase from "../hooks/useFirebase";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const allContext = {
        useProduct: useProduct(),
        useAuth: useFirebase()
    };

    return (
        <AppContext.Provider value={allContext}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

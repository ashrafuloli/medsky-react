import React, {createContext} from 'react';
import useProduct from "../hooks/useProduct";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const allContext = {
        useProduct: useProduct()
    };

    return (
        <AppContext.Provider value={allContext}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

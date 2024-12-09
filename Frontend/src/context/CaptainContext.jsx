import React,{Children, createContext, useContext, useState} from 'react';

export const CaptainDataContext = createContext()


const CaptainContext = ({children}) => {
    const [captain, setCaptain] = useState(null);
    const [isloding, setIsloding] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) =>{
        setCaptain(captainData);
    };

    const value = {
        captain, 
        setCaptain,
        isloding,
        setIsloding,
        error,
        setError,
        updateCaptain
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext

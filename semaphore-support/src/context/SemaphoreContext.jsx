import React from 'react'

const SemaphoreContext = React.createContext()

const SemaphoreContextProvider = ({children}) => {
    const [semaphore, setSemaphore] = React.useState("Semaphore 2025")
    return(
        <SemaphoreContext.Provider value={
            {
                semaphore,
                setSemaphore
            }
        }>
        {children}
        </SemaphoreContext.Provider>
    )
}

export { SemaphoreContext, SemaphoreContextProvider };

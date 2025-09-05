import React from 'react'
import { Home, User, Settings, Mail ,AlarmClockCheckIcon,BadgeQuestionMarkIcon, CalendarCheck2Icon} from "lucide-react";
const SemaphoreContext = React.createContext()

const SemaphoreContextProvider = ({children}) => {
    const titles={
        program:{
            name:"Semaphore 2025",
            subHeading:"Organized by SAMCA,Nitte"
        }
    }
    const navItems = [
    { icon: CalendarCheck2Icon, name: "Events", route: "/Events" },
    { icon: AlarmClockCheckIcon, name: "Timings", route: "/Timings" },
    { icon: BadgeQuestionMarkIcon, name: "FAQ", route: "/FAQ" },
    { icon: Mail, name: "Heads and Co-ordinators", route: "/headsAndCoordinators" },
  ];
    
    return(
        <SemaphoreContext.Provider value={
            {
                titles,
                navItems,

            }
        }>
        {children}
        </SemaphoreContext.Provider>
    )
}

export { SemaphoreContext, SemaphoreContextProvider };

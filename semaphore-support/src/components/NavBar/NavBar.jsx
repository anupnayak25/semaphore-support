import { Home, User, Settings, Mail } from "lucide-react";
import NavCard from "./NavCard";
import { useContext } from "react";
import { SemaphoreContext } from "../../context/SemaphoreContext";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { navItems } = useContext(SemaphoreContext);

  return (
   
    
  
    <div className="min-h-screen bg-dominant/100 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid layout that's responsive */}
        <div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 
                        gap-4 sm:gap-6 md:gap-8 
                        justify-items-center"
        >
          {navItems.map((item, index) => (
            <NavCard
              key={index}
              icon={item.icon}
              name={item.name}
              route={item.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

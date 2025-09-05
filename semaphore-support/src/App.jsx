import Description from "./components/Description/Description";
import Faq from "./pages/Faq";
import Rules from "./pages/Rules";

const App = () => {
  return ( 
    <>
      <div className="bg-amber-300 h-screen w-full"></div>
     <Description/>
      <div className="bg-amber-300 h-screen w-full"></div>
       <Rules/>
      <div className="bg-amber-300 h-screen w-full"></div>
       <Faq/>
      <div className="bg-amber-300 h-screen w-full"></div>
    </>
  );
}
 
export default App;
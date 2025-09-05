import Rules from "./components/rules/Rules";
import Faq from "./components/FAQ/faq";

const App = () => {
  return ( 
    <>
      <div className="bg-amber-300 h-screen w-screen"></div>
      <Rules/>
      <Faq/>
      <div className="bg-amber-300 h-screen w-screen"></div>
    </>
  );
}
 
export default App;
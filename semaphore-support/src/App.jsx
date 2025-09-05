import Rules from "./components/rules/Rules";
import Faq from "./components/FAQ/Faq";
import HeadsInfo from "./components/HeadDetail/HeadsInfo";


const App = () => {
  return (
    <>
      <div className="bg-amber-300 h-screen w-screen"></div>
      <HeadsInfo />
      <Rules />
      <Faq />
      <div className="bg-amber-300 h-screen w-screen"></div>
    </>
  );
}

export default App;
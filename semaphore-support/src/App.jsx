import Rules from "./components/rules/Rules";
import Fa from "./components/FAQ/faq";
// import HeadsInfo from "./components/HeadsDetails/HeadsInfo";
import HeadsInfo from "./components/HeadsInfo/HeadsInfo";


const App = () => {
  return (
    <>
      <div className="bg-amber-300 h-screen w-screen"></div>
      <HeadsInfo />
      <Rules />
      <Fa />
      <div className="bg-amber-300 h-screen w-screen"></div>
    </>
  );
}

export default App;
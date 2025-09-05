import React,{useContext} from 'react'
import Heading from '../components/Heading/Heading'
import { SemaphoreContext } from '../context/SemaphoreContext';
import NavBar from '../components/NavBar/NavBar';
function Home() {
    const {titles}=useContext(SemaphoreContext);
  return (
    <div>
      <Heading heading={titles.program.name} subheading={titles.program.subHeading}/>
      <NavBar/>
    </div>
  )
}

export default Home

import Heading from '../components/Heading/Heading'
import { SemaphoreContext } from '../context/SemaphoreContext';
import NavBar from '../components/NavBar/NavBar';
import Description from '../components/Description/Description';
import { useContext } from 'react';
function Home() {
    const {titles}=useContext(SemaphoreContext);
  return (
    <div className='bg-dominant min-h-screen pt-10 pb-10 px-4 sm:px-6 lg:px-8'>
      <Heading heading={titles.program.heading} subheading={titles.program.subHeading} previousRoute=""/>
      <NavBar/>
      <Description title='Need Help?,We Got You Covered!' content='You can find all the event related information ,Full Schedule of Semaphore here. If you have any questions,check out the FAQ section or reach out to us directly through the heads and co-ordinators section.All The information you need is just a click away!'/> 
    </div>
  )
}

export default Home

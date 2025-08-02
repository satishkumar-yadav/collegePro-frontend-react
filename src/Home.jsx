
import AboutCollege from './components/AboutCollege';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NoticeSidebar from './components/NoticeSidebar';
import PlacementAchievements from './components/PlacementAchievements';
import VirtualTour from './components/VirtualTour';

function Home() {     
 // const [count, setCount] = useState(0);
  
  return (
    <>
      <Navbar />
      <Carousel/>
      <NoticeSidebar/>
      <AboutCollege/>
      <PlacementAchievements/>
      <VirtualTour/>
      <Footer/>
    </>
  )
}

export default Home

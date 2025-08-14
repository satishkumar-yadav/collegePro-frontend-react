import AboutCollege from '../components/AboutCollege';
import Carousel from "../components/Carousel";
import Events from '../components/Events';
import Footer from "../components/Footer";
import NoticeBar from "../components/NoticeBar";
import PlacementAchievements from '../components/PlacementAchievements';
import VirtualTour from '../components/VirtualTour';


export default function Home() {
  return (
    <div>
       <Carousel />

      <div className="flex">
        <div className="w-3/4">
         
          <section className="px-4 py-2">
            {/* About, Achievements, Placement, Courses, Testimonial - Add modular sections each as separate component */}
            
             <AboutCollege/>
             <PlacementAchievements/>
             <VirtualTour/>

          </section>

        </div>

        <div className="w-1/4">
           <div className='h-1/2 mb-4'> 
              <NoticeBar />
              <hr/>
          </div>
          <div className='h-1/2'> 
              <Events />
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
 


{/*  
  
  <section className="px-4 py-2">
            <h2 className="font-bold text-xl">About College</h2>
            { About, Achievements, Placement, Courses, Testimonial - Add modular sections each as separate component }
            <p>This is an AICTE approved institution with excellent placement record in engineering disciplines...</p>
          </section>

  */} 

import { BrowserRouter } from "react-router-dom";
import { About, Contact, Services, Feedbacks, Hero, Navbar, Tech, Works, Courses, Courses3D, Coursesweb, StarsCanvas, Maps} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Services />
        <Tech />
        <Works />
        <Courses />
        <Courses3D />
        <Coursesweb />
        <Feedbacks />
        <div className="relative z=0">          
          <Contact />          
          <StarsCanvas />
          <Maps />
          

        </div>
      </div>
    
    </BrowserRouter>
  )
}

export default App

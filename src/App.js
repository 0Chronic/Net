
import './App.css';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';

import Navbar from './components/Navbar';
import Newslatter from './components/Newslatter';


function App() {
  return(
    <div>
      <Navbar></Navbar>
     <Hero></Hero>
     <Analytics></Analytics>
     <Newslatter></Newslatter>
     <Cards></Cards>
    <Footer></Footer>
    </div>
  )
}
export default App;

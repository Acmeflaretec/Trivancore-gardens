import React,{useState} from 'react';
import '../App.css';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import MiddleNav from '../components/MiddleNav';
import Products from '../components/Products';
import WhoAreWe from '../components/WhoAreWe';
import WhyChooseUs from '../components/WhyChooseUs';
import HomeContact from '../components/HomeContact';
import LoadingScreen from "../components/loading/LoadingScreen";
import HomeCategory from '../components/HomeCategory';
import HomeVideos from '../components/HomeVideos';


function Home() {
  const [notif,setNotif] = useState(true)
  const [loadScreenState, setLoadScreenState] = useState(true); // Loading state

  return (
    <div>
    
     <MiddleNav notification={notif}/>
     <Banner/>
     <HomeCategory/>
     <WhoAreWe/>
     <Products setNotification={setNotif} />
     <HomeVideos/>
     <WhyChooseUs/>
     <HomeContact/>
     <Footer/>
    </div>
  )
}

export default Home
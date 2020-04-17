import React from 'react';
import './css/normalize.css';
import './css/global.css';
import Intro from './components/Intro';
import Booking from './components/Booking';
import Welcome from './components/Welcome';
import Programs from './components/Programs';
import PersonalTraining from './components/PersonalTraining';
import Trainers from './components/Trainers';
import PromotionAndContact from './components/PromotionAndContact';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Intro />
      <Booking />
      <Welcome />
      <Programs />
      <PersonalTraining />
      <Trainers />
      <PromotionAndContact />
      <Footer />
    </div>
  );
}

export default App;

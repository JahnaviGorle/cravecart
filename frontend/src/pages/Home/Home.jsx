import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import Footer from '../../components/Footer/Footer';
import Find from '../../components/Find/Find';
import Chef from '../../components/Chef/Chef';
import UserReviews from '../../components/UserReview/UserReview';// ✅ Corrected import
import './Home.css';

const Home = () => {
  const [category, setCategory] = useState("All");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      if (location.state.scrollTo === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location]);

  return (
    <>
      <Header />

      <div id="menu">
        <ExploreMenu setCategory={setCategory} category={category} />
        <FoodDisplay category={category} />
      </div>

      <Find />
      <Chef />
      <UserReviews /> {/* ✅ Added this line right after Chef */}

      <div id="mob-app">
        <AppDownload />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default Home;

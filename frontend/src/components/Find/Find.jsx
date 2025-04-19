import { assets } from "../../assets/assets";
import './Find.css';

export default function Find() {
  const handleFindLocation = () => {
    window.location.href = 'https://www.google.com/maps?q=123+Foodie+Street,+New+York,+NY';
  };

  return (
    <section className='find max-padd-container' id='find'>
      <div className='find-content'>
        <div className='location-text'>
          <h3>Where we live ?</h3>
          <p>
          Our restaurant is situated in a beautiful historic building in the
            downtown area. The charming atmosphere and convenient location make
            it the perfect spot for both casual dining and special occasions.
            Come visit us today and experience our unique culinary creations.
          </p>
          <button onClick={handleFindLocation}>Find our location</button>
        </div>
        <div className='location-image'>
          <img src={assets.location} alt='Location Pin' />
        </div>
      </div>
    </section>
  );
}

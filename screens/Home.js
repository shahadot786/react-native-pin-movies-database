import HeroSlider from '../components/Home/HeroSlider';
import PopularMovies from '../components/Home/PopularMovies';
import UpcomingMovies from '../components/Home/UpcomingTv';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <PopularMovies/>
      <UpcomingMovies/>
    </>
  );
};

export default Home;

import {ScrollView} from 'react-native';
import FamilyMovies from '../components/Home/FamilyMovies';
import HeroSlider from '../components/Home/HeroSlider';
import PopularMovies from '../components/Home/PopularMovies';
import ThrillerMovies from '../components/Home/ThrillerMovies';
import TopRatedMovies from '../components/Home/TopRatedMovies';
import UpcomingMovies from '../components/Home/UpcomingTv';

const Home = () => {
  return (
    <>
      <ScrollView className="mb-10">
        <HeroSlider />
        <PopularMovies />
        <UpcomingMovies />
        <TopRatedMovies />
        <FamilyMovies />
        <ThrillerMovies />
      </ScrollView>
    </>
  );
};

export default Home;

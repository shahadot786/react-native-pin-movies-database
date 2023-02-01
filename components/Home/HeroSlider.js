import {View, Dimensions, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUpcomingMovies} from '../../services/service';
import {SliderBox} from 'react-native-image-slider-box';

const dimensionHeight = Dimensions.get('screen');

const HeroSlider = () => {
  const [error, setError] = useState(false);
  const [movieImage, setMovieImage] = useState([]);

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const movieImageData = [];
        movies.map(movie => {
          movieImageData.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });
        setMovieImage(movieImageData);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <View className="flex-1 justify-center items-center">
      {!error ? (
        <>
          <SliderBox
            images={movieImage}
            autoplay={true}
            circleLoop={true}
            sliderBoxHeight={dimensionHeight.height / 1.9}
            dotStyle={{height: 0}}
            resizeMode={'cover'}
          />
        </>
      ) : (
        <>
          <View
            className="items-center justify-center border-2 border-gray-500"
            style={{height: dimensionHeight.height / 1.9}}>
            <Text className="text-2xl text-red-600 font-bold">
              Server is not responding
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default HeroSlider;

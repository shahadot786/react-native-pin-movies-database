import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPopularMovies} from '../../services/service';
import List from './List';

const PopularMovies = () => {
  const [error, setError] = useState(false);
  const [popularMoviesData, setPopularMoviesData] = useState([]);
  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        setPopularMoviesData(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <>
      {!error || popularMoviesData ? (
        <View className="flex-1 mt-4 ml-4">
          <List
            title={'Popular Movies'}
            content={popularMoviesData}
            error={error}
          />
        </View>
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
    </>
  );
};

export default PopularMovies;

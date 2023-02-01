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
    <View className="flex-1 mt-4 ml-4">
      <List
        title={'Popular Movies'}
        content={popularMoviesData}
        error={error}
      />
    </View>
  );
};

export default PopularMovies;

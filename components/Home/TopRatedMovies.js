import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getTopRatedMovies} from '../../services/service';
import List from './List';

const TopRatedMovies = () => {
  const [error, setError] = useState(false);
  const [TopRatedMoviesData, setTopRatedMoviesData] = useState([]);
  useEffect(() => {
    getTopRatedMovies()
      .then(movies => {
        setTopRatedMoviesData(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <View className="flex-1 mt-4 ml-4">
      <List
        title={'Top Rated Movies'}
        content={TopRatedMoviesData}
        error={error}
      />
    </View>
  );
};

export default TopRatedMovies;

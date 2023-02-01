import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUpcomingMovies} from '../../services/service';
import List from './List';

const UpcomingMovies = () => {
  const [error, setError] = useState(false);
  const [UpcomingMoviesData, setUpcomingMoviesData] = useState([]);
  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        setUpcomingMoviesData(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <View className="flex-1 mt-4 ml-4">
      <List
        title={'Upcoming Movies'}
        content={UpcomingMoviesData}
        error={error}
      />
    </View>
  );
};

export default UpcomingMovies;

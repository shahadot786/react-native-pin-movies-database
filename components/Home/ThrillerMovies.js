import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getThrillerMovies} from '../../services/service';
import List from './List';

const ThrillerMovies = () => {
  const [error, setError] = useState(false);
  const [ThrillerMoviesData, setThrillerMoviesData] = useState([]);
  useEffect(() => {
    getThrillerMovies()
      .then(movies => {
        setThrillerMoviesData(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <View className="flex-1 mt-4 ml-4">
      <List
        title={'Thriller Movies'}
        content={ThrillerMoviesData}
        error={error}
      />
    </View>
  );
};

export default ThrillerMovies;

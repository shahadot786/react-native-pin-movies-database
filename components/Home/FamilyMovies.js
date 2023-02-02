import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getFamilyMovies} from '../../services/service';
import List from './List';

const FamilyMovies = () => {
  const [error, setError] = useState(false);
  const [FamilyMoviesData, setFamilyMoviesData] = useState([]);
  useEffect(() => {
    getFamilyMovies()
      .then(movies => {
        setFamilyMoviesData(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <View className="flex-1 mt-4 ml-4">
      <List title={'Family Movies'} content={FamilyMoviesData} error={error} />
    </View>
  );
};

export default FamilyMovies;

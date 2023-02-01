import {TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Card = ({item}) => {
  return (
    <TouchableOpacity className="p-[5px] relative">
      <Image
        className="w-[120px] h-[200px] rounded-md"
        source={{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}}
      />
    </TouchableOpacity>
  );
};

export default Card;

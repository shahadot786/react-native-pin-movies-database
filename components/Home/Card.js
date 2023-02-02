import {TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object,
};

const placeholderImage = require('../../assets/images/placeholder.png');

const Card = ({item}) => {
  return (
    <TouchableOpacity className="p-[5px] relative h-[200px] items-center justify-center">
      <Image
        className="w-[120px] h-[200px] rounded-md"
        source={
          item.poster_path
            ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
            : placeholderImage
        }
      />
      {!item.poster_path && (
        <Text className="absolute top-2 w-[100px] text-center font-bold">
          {item.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
Card.prototypes = propTypes;
export default Card;

import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';

const List = ({title, content, error}) => {
  return (
    <View>
      <View>
        <Text className="text-[16px] font-bold my-2">{title}</Text>
      </View>
      <View>
        {!error ? (
          <>
            <FlatList
              horizontal={true}
              data={content}
              renderItem={({item}) => <Card item={item} />}
            />
          </>
        ) : (
          <>
          <Text>Server not responding</Text></>
        )}
      </View>
    </View>
  );
};

export default List;

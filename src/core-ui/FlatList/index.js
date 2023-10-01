import React from 'react';
import {FlatList as RNFlatList} from 'react-native';
export const FlatList = ({
  data,
  containerStyle,
  renderItem,
  numColumns,
  ...props
}) => {
  return (
    <RNFlatList
      contentContainerStyle={containerStyle}
      data={data}
      numColumns={numColumns}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item, index}) => renderItem({item, index})}
      {...props}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

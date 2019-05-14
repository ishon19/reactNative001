import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
  return (
   <Card>
    <Text>{props.data.title}</Text>
   </Card>
  );
};

export default AlbumDetail;
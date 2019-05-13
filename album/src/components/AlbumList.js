import React from 'react';
import { Text, View } from 'react-native';

const AlbumList = () => {
	  const { textStyle, viewStyle } = styles; 
  return (
     <View style={viewStyle}> 
       <Text style={textStyle}>List of all the albums!!</Text>
     </View>
  	);
};

const styles = {
	textStyle : {
      
       fontSize: 30,
       color: 'green'
	},

	viewStyle : {
      alignItems: 'center'
	}
};

export default AlbumList;
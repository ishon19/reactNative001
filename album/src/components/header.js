//Import the libraries 
import React from 'react';
import { Text, View } from 'react-native';

//Make the component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
      <View style={viewStyle}> 
  	     <Text style={textStyle}>{props.headerText}</Text>
  	  </View>
  	)
};

const styles = {
 viewStyle : {
  backgroundColor: '#F8F8F8',
  justifyContent: 'center',
  alignItems: 'center',
  height: 80,
  paddingTop: 15,
  paddingBottom: 15,
  shadowColor: '#black',
  shadowOffset: {width: 0 , height: 2},
  shadowOpacity: 0.4,
  elevation: 10,
  position: 'relative'
 },
 textStyle : {
 	fontSize : 50,
    color: 'grey'
 }
};

//Render the component
export default Header;
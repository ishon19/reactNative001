import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

   //initial state
   state = { albums : [] };

   componentWillMount(){
   	console.log("Inside componentWillMount");
   	axios.get('https://rallycoding.herokuapp.com/api/music_albums')
   	.then(response => this.setState({ albums : response.data }))
   	.catch(error => console.log(error));

   }

   render(){
      
      console.log(this.state);

	  return (
	     <View> 
	       <Text>List of all the albums!!</Text>
	     </View>
	  	);
	}
}

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
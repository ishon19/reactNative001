import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

   //initial state
   state = { albums : [] };

   componentWillMount(){
   	console.log("Inside componentWillMount");
   	axios.get('https://rallycoding.herokuapp.com/api/music_albums')
   	.then(response => this.setState({ albums : response.data }))
   	.catch(error => console.log(error));

   }

   renderAlbums(){
   	 return this.state.albums.map(album => 
   	 	 <AlbumDetail key={album.title} data={album} />
   	 	);
   }

   render(){
      
      console.log(this.state);

	  return (
	     <View> 
	       {this.renderAlbums()}
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
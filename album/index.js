/**
 * @format
 */

/*import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/

//Importing the libraries required for creating a components
import React from 'react';
import { AppRegistry, View } from 'react-native';
import {name as appName} from './app.json';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Create the component
const App = () =>  (
    <View>
     <Header headerText={'IshonApps'}/>
     <AlbumList />
    </View>
);
 

//Render the component
AppRegistry.registerComponent(appName, () => App);
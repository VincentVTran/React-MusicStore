/**
 * @format
 */
//Essentials
import {AppRegistry, Text, View} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
//External Components
import Header from './src/components/header.js';
import AlbumList from './src/components/albumlist';


const test = () => {
    return(
        <View style={{flex:1}}>
            <Header input1='Test'/>
            <AlbumList/>
        </View>   
    )
};
    
AppRegistry.registerComponent(appName, () => test);

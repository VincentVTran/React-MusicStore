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
        <View>
            <Header input1='Test'/>
            <AlbumList/>
        </View>   
    )
};
    


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',

        justifyContent: 'center', //Vertical --Determines how inner components are placed-- flex-end,center,flexstart
        alignItems: 'center', //Horizontal

        height: 200,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2}, //Shadow dimensions Width of light and height of darkness
        shadowOpacity: 2,

        elevation: 2,
        position: 'relative',
    },
    text:{
        fontSize: 40,
        
    }
}
AppRegistry.registerComponent(appName, () => test);

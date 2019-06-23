import React from 'react';
import { Text, View} from 'react-native';

const Header = (property) => {
    return (
        <View style={Style.view}>
            <Text style={Style.text}>Vincent's Test Application</Text>
            <Text>{property.input1}</Text>
        </View>   
    )

}

const Style = {
    view: {
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
    text: {
        fontSize: 30
    }
}
export default Header;
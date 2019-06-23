import React from 'react';
import {View} from 'react-native';

const Card = (property) => {
    return(
        <View style={style.card}>
            {property.children}
        </View>
    );
}

const style = {
    card: {
        borderWidth: 1,
        borderRadius: 2, //Rounding the edges of border
        borderColor: '#ddd',
        borderBottomWidth: 0,

        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 2,
        shadowRadius: 2, //Rounding shadow edges to match border edge

        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
}

export default Card;
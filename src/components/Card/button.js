import React from 'react';
import {Text,TouchableOpacity} from 'react-native';


const Button = (property) => {
    return(
        <TouchableOpacity style={styles.button} onPress={property.onClick}>
            <Text style={styles.text}>{property.children}</Text>
        </TouchableOpacity>
    ) 
}

const styles = {
    text: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#007aff',
        fontWeight: '600',
    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    }
}
export default Button;
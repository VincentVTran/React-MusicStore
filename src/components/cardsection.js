import React from 'react';
import {View} from 'react-native';

const CardSection = (property) => {
    return(
        <View style={styles.section}>
            {property.children}
        </View>
    );
}
export default CardSection;
const styles = {
    section: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}
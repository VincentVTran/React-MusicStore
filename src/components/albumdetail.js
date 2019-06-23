import React from 'react';
import {View,Text} from 'react-native';
import Card from './card';
import CardSection from './cardsection';
const AlbumDetail = (property) => {
    return(
        <View>
            <Card>
                <CardSection>
                    <Text>{property.album.title}</Text> 
                </CardSection>
            </Card>
        </View>
    );
}

export default AlbumDetail;
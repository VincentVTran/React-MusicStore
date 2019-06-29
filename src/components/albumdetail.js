import React from 'react';
import {View,Text,Image,Linking} from 'react-native';

//Custom 
import Card from './Card/card';
import CardSection from './Card/cardsection';
import Button from './Card/button';
const AlbumDetail = (property) => {
    return(
        <View>
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainer}>
                        <Image style={styles.thumbnailStyle} source={{uri:property.album.thumbnail_image}}/>
                    </View>
                    <View style={styles.textContainer}>
                        <Text>{property.album.title}</Text>
                        <Text>{property.album.artist}</Text>
                    </View> 
                </CardSection>
                
                <CardSection>
                    <Image style={styles.albumPictureStyle} source={{uri:property.album.image}}/>
                </CardSection>

                <CardSection>
                    <Button onClick={()=> Linking.openURL(property.album.url)}>Buy now!</Button>
                </CardSection>
            </Card>
        </View>
    );
}

const styles = {
    textContainer : {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    thumbnailContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    albumPictureStyle: {
        height: 300,
        flex: 1,
        width: null
    },

}
export default AlbumDetail;
import React, { Component } from 'react';
import _ from 'lodash';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Rating } from 'react-native-ratings';
import { Actions } from 'react-native-router-flux';


const SingleBookDetailCardComponent = ({ bookDetails, userName }) => {

    return (
        <TouchableOpacity onPress={() => Actions.BOOK_DETAILS({ bookDetails, userName })}>
            <View style={styles.cardStyle}>
                <View style={{ width: 100 }}>
                    <Image source={{ uri: bookDetails.imageSource }} style={styles.imageStyle} />
                </View>
                <View style={{ alignItems: 'flex-start', width: 220 }}>
                    <Text style={{ color: '#344955', fontSize: 16, fontWeight: 'bold' }}>{_.truncate(bookDetails.name, { length: 24 })}</Text>
                    <Text style={{ color: '#344955', fontSize: 14, fontWeight: '600' }}>Written by {bookDetails.author}</Text>
                    <View style={styles.genreStyle}>
                        <Text style={{ color: '#344955', fontSize: 12 }}>{bookDetails.genre}</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Rating
                            type='heart'
                            ratingCount={5}
                            imageSize={20}
                            ratingTextColor='#344955'
                            startingValue={bookDetails.rating}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SingleBookDetailCardComponent;

const styles = {

    cardStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 5,
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 10,
        elevation: 10
    },
    imageStyle: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    genreStyle: {
        padding: 4,
        borderWidth: 0.5,
        borderColor: '#344955',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        borderRadius: 2
    }


}
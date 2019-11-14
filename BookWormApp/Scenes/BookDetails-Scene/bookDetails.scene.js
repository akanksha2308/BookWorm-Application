import React, { Component } from 'react';
import _ from 'lodash';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import { HeartRedIcon, HeartIcon } from '../../Configure/Image-Config/imageConfig';

export default class BookDetailsScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookDetails: props.bookDetails,
            userName: props.userName,
            isFavorite: false
        }
    }

    renderBookInformation = () => {
        const { bookDetails, isFavorite } = this.state;
        return (
            <View style={{ padding: 10, elevation: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#344955', borderRadius: 8 }}>
                <View style={{ width: 90 }}>
                    <Image source={{ uri: bookDetails.imageSource }} style={{ width: 80, height: 100, resizeMode: 'contain' }} />
                </View>
                <View style={{ alignItems: 'flex-start', width: 200 }}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>{_.truncate(bookDetails.name, { length: 24 })}</Text>
                    <Text style={{ color: '#fff', fontSize: 14, marginTop: 5 }}>Author: {bookDetails.author}</Text>
                    <Text style={{ color: '#fff', fontSize: 12, marginTop: 5 }}>Genre: {bookDetails.genre}</Text>
                    <TouchableOpacity onPress={() => { this.setState({ isFavorite: !isFavorite }) }} style={{ position: 'absolute', bottom: 0, right: 5 }}>
                        <Image style={{ width: 22, height: 22, resizeMode: 'contain' }} source={isFavorite ? HeartRedIcon() : HeartIcon()} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderDescription = () => {
        const { bookDetails } = this.state;
        return (
            <View style={{ marginTop: 6, paddingBottom: 6 }}>
                <Text style={{ fontSize: 14, color: '#4a6572' }}>{bookDetails.description}</Text>
            </View>
        )
    }

    renderPriceInfo = () => {
        const { bookDetails } = this.state;
        return (
            <View style={{ marginTop: 6, paddingBottom: 6 }}>
                <Text style={{ fontSize: 14, color: '#4a6572' }}>Rs. <Text style={{ fontWeight: '600' }}>{bookDetails.price}</Text></Text>
            </View>
        )
    }

    renderRemainingPageInfo = () => {
        const { bookDetails } = this.state;
        return (
            <View style={{ marginTop: 6, paddingBottom: 6 }}>
                <Text style={{ fontSize: 14, color: '#4a6572' }}>You have read {bookDetails.pageCount} pages out of {bookDetails.totalPage} pages.</Text>
                <Text style={{ fontSize: 14, color: '#4a6572' }}>{bookDetails.percent} percent completed.</Text>
            </View>
        )
    }

    renderAuthorInfo = () => {
        const { bookDetails } = this.state;
        return (
            <View style={{ marginTop: 6, paddingBottom: 6 }}>
                <Text style={{ fontSize: 14, color: '#4a6572' }}>{bookDetails.authorInfo}</Text>
            </View>
        )
    }

    render() {
        const { userName } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', padding: 20, paddingTop: 10 }}>
                <Text style={{ color: '#344955', fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Hi {userName},</Text>
                {this.renderBookInformation()}
                <View style={{ marginTop: 15 }}>
                    <Text style={{ color: '#344955', fontSize: 16, fontWeight: 'bold' }}>Book Description</Text>
                    <View style={{ width: 50, height: 2, backgroundColor: '#344955' }} />
                </View>
                {this.renderDescription()}
                <View style={{ marginTop: 5 }}>
                    <Text style={{ color: '#344955', fontSize: 16, fontWeight: 'bold' }}>Price Details</Text>
                    <View style={{ width: 50, height: 2, backgroundColor: '#344955' }} />
                </View>
                {this.renderPriceInfo()}
                <View style={{ marginTop: 5 }}>
                    <Text style={{ color: '#344955', fontSize: 16, fontWeight: 'bold' }}>Current Page Detail</Text>
                    <View style={{ width: 50, height: 2, backgroundColor: '#344955' }} />
                </View>
                {this.renderRemainingPageInfo()}
                <View style={{ marginTop: 5 }}>
                    <Text style={{ color: '#344955', fontSize: 16, fontWeight: 'bold' }}>Author Detail</Text>
                    <View style={{ width: 50, height: 2, backgroundColor: '#344955' }} />
                </View>
                {this.renderAuthorInfo()}
            </View>
        )
    }
}
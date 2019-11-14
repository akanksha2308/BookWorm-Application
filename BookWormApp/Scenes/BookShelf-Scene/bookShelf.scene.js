import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from 'react-redux';

import SingleBookDetailCardComponent from '../../Components/Single-Book-Detail-Card-Component/singleBookDetailCardComponent';

import { CancelIcon } from '../../Configure/Image-Config/imageConfig';

class BookSelfScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            searchText: '',
            searchedBookResult: [],
            bookList: []
        }
    }

    searchBook = (searchText) => {
        const { bookList } = this.props;
        const searchDictionary = ['name', 'author', 'genre'];
        const filteredArr = bookList.filter(val => {
            if (typeof val == 'object') {
                const results = searchDictionary.map(dict => String(val[dict]).toLowerCase().includes(searchText.toLowerCase()));
                const index = results.indexOf(true);
                if (~index) {
                    return true;
                }
                return false;
            }
            return String(val).toLowerCase().includes(searchValue.toLowerCase());
        })
        this.setState({ searchedBookResult: filteredArr });
    }

    render() {
        const { searchText, searchedBookResult, username } = this.state;
        const { bookList } = this.props;
        const finalBooklist = (searchedBookResult.length > 0 || searchText) ? searchedBookResult : bookList;
        return (
            <View style={{ flex: 1, backgroundColor: '#344955', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: 320, height: 48, backgroundColor: '#fff', borderRadius: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextInput
                        style={{ width: 290, paddingLeft: 15, fontSize: 12 }}
                        placeholder={searchText || `Hi ${username}, search your book here ...`}
                        placeholderTextColor={'#4a6572'}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.searchBook(text)}
                        returnKeyType={"done"}
                    />
                </View>
                <FlatList
                    data={finalBooklist}
                    renderItem={({ item }) => (
                        <SingleBookDetailCardComponent bookDetails={item} userName={username} />
                    )}
                    showsVerticalScrollIndicator={false}
                    extra={finalBooklist}
                    style={{ marginTop: 5 }}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    bookList: state.Books
})

export default connect(mapStateToProps)(BookSelfScene)
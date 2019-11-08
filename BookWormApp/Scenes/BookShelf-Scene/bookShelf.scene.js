import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import SingleBookDetailCardComponent from '../../Components/Single-Book-Detail-Card-Component/singleBookDetailCardComponent';

import { CancelIcon } from '../../Configure/Image-Config/imageConfig';

export default class BookSelfScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            searchText: '',
            bookData: [
                {
                    name: 'The Kite Runner',
                    author: 'Khaled Hosseini',
                    genre: ['Drama'],
                    imageSource: 'https://images-na.ssl-images-amazon.com/images/I/81IzbD2IiIL.jpg',
                    rating: 4,
                    description: 'Hassan is a "kite runner" for Amir: he runs to fetch kites Amir has defeated by cutting their strings. He knows where such a kite will land without even seeing it. One triumphant day, Amir wins the local tournament, and finally Baba praise.',
                    price: 250,
                    pageCount: 50,
                    percent: 10,
                    totalPage: 500,
                    authorInfo: 'Khaled Hosseini, Afghan-born American novelist who was known for his vivid depictions of Afghanistan, most notably in The Kite Runner (2003).'
                },
                {
                    name: 'To Kill A Mockingbird',
                    author: 'Harper Lee',
                    genre: ['Thriller'],
                    imageSource: 'https://images-na.ssl-images-amazon.com/images/I/51VjU2h%2B4DL._SX309_BO1,204,203,200_.jpg',
                    rating: 4,
                    description: 'In the Depression era, Atticus Finch, a lawyer, sets out to defend a black man, who is accused of raping a white woman. Meanwhile, his children, Scout and Jem, spy on their reclusive neighbour.',
                    price: 260,
                    pageCount: 120,
                    percent: 30,
                    totalPage: 400,
                    authorInfo: 'She was the youngest of four children and grew up in Monroeville, Alabama. She was known to be a tomboy who loved the outdoors, much like her protagonist, Scout, in To Kill a Mockingbird.'
                },
                {
                    name: 'A Thousand Splendid Suns',
                    author: 'Khaled Hosseini',
                    genre: ['Classic'],
                    imageSource: 'https://5.imimg.com/data5/YX/OA/MY-28766575/the-kite-runner-a-thousand-splendid-suns-500x500.jpg',
                    rating: 2,
                    description: 'A Thousand Splendid Suns is a gripping tale of two young women, Mariam and Laila, and their difficult lives together, married to the same husband, Rasheed. The women form a close bond during these miserable circumstances, and come to care for each other deeply.',
                    price: 380,
                    pageCount: 160,
                    percent: 50,
                    totalPage: 320,
                    authorInfo: 'Khaled Hosseini, Afghan-born American novelist who was known for his vivid depictions of Afghanistan, most notably in The Kite Runner (2003).'
                },
                {
                    name: 'Murder On The Orient Express',
                    author: 'Agatha Christie',
                    genre: ['Crime Fiction'],
                    imageSource: 'https://cdn.waterstones.com/bookjackets/large/9780/0075/9780007527502.jpg',
                    rating: 2,
                    description: 'A lavish trip through Europe quickly unfolds into a race against time to solve a murder aboard a train. When an avalanche stops the Orient Express dead in its tracks, the world\'s greatest detective Hercule Poirot arrives to interrogate all passengers and search for clues before the killer can strike again.',
                    price: 380,
                    pageCount: 160,
                    percent: 20,
                    totalPage: 800,
                    authorInfo: 'She was brought up by both her mother and her sister. In the First World war, she trained and worked as a nurse helping to treat wounded soldiers.'
                },
                {
                    name: 'The Alchemist',
                    author: 'Paulo Coelho',
                    genre: ['Fantasy Fiction'],
                    imageSource: 'https://images.thenile.io/r1000/9780722532935.jpg',
                    rating: 3,
                    description: 'The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.',
                    price: 200,
                    pageCount: 60,
                    percent: 12,
                    totalPage: 500,
                    authorInfo: 'Coelho attended Jesuit schools and was raised by devout Catholic parents. He determined early on that he wanted to be a writer but was discouraged by his parents, who saw no future in that profession in Brazil.'
                },
                {
                    name: 'Harry Potter',
                    author: 'J. K. Rowling',
                    genre: ['Magic Fiction'],
                    imageSource: 'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg',
                    rating: 4,
                    description: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.',
                    price: 400,
                    pageCount: 68,
                    percent: 17,
                    totalPage: 400,
                    authorInfo: 'J.K. Rowling. Joanne Rowling was born on 31st July 1965 at Yate General Hospital near Bristol, and grew up in Gloucestershire in England and in Chepstow, Gwent, in south-east Wales.'
                },
                {
                    name: 'Game Of Thrones',
                    author: 'George R. R. Martin',
                    genre: ['Political Fiction'],
                    imageSource: 'https://cdn.waterstones.com/bookjackets/large/9780/0083/9780008307738.jpg',
                    rating: 5,
                    description: 'Book that tells the story of a medieval country\'s civil war. When the story begins, a decade-long summer is ending, and winter looms as characters battle to claim the "Iron Throne," the seat of the king of the Seven Kingdoms, the regime that rules all but the northern tip of Westeros',
                    price: 560,
                    pageCount: 10,
                    percent: 4,
                    totalPage: 250,
                    authorInfo: 'Martin. George R.R Martin is the much celebrated writer of the famous A Song of Ice and Fire series. He was born on September 20, 1948 in Bayonne, New Jersey and grew up to be world renowned Science Fiction and Fantasy writer.'
                }
            ],
            searchedBookResult: []
        }
    }

    searchBook = (searchText) => {
        const { bookData } = this.state;
        const searchDictionary = ['name', 'author', 'genre'];
        const filteredArr = bookData.filter(val => {
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
        const { bookData, searchText, searchedBookResult, username } = this.state;
        const finalBooklist = (searchedBookResult.length > 0 || searchText) ? searchedBookResult : bookData;
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
                    {/* <TouchableOpacity>
                        <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 10 }} source={CancelIcon()} />
                    </TouchableOpacity> */}
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
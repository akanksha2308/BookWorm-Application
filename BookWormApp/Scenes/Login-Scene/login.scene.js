import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onPressSubmit = () => {
        const { username, password } = this.state;
        if (username == '') {
            alert('Username cant be left empty!');
            return;
        }
        if (password == '') {
            alert('Password cant be left empty!');
            return;
        }
        Actions.BOOK_SELF({ username });
    }

    render() {
        const { username } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#344955' }}>
                <View style={{ height: 120 }} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/236x/18/18/88/18188820e5da19a3908aeb18af5246b5--design-logos-book-logo-design.jpg' }}
                        style={{ width: 80, height: 80, resizeMode: 'center', borderRadius: 80 }}
                    />
                </View>
                <View style={{ height: 25 }} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                        style={{ width: 300, height: 48, backgroundColor: '#fff', borderWidth: 1, borderColor: '#344955', borderRadius: 10, paddingLeft: 15 }}
                        placeholder="Username"
                        placeholderTextColor={'#4a6572'}
                        underlineColorAndroid="transparent"
                        onChangeText={(username) => this.setState({ username })}
                        returnKeyType={"done"}
                        value={username}
                    />
                </View>
                <View style={{ height: 25 }} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TextInput
                        style={{ width: 300, height: 48, backgroundColor: '#fff', borderWidth: 1, borderColor: '#344955', borderRadius: 10, paddingLeft: 15 }}
                        underlineColorAndroid="transparent"
                        placeholderTextColor={'#4a6572'}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                </View>
                <View style={{ height: 25 }} />
                <View style={{ margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{ width: 300, height: 48, backgroundColor: '#fff', borderWidth: 1, borderColor: '#344955', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
                        onPress={this.onPressSubmit}>
                        <Text style={{ color: '#344955', fontSize: 18, fontWeight: 'bold' }} >LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
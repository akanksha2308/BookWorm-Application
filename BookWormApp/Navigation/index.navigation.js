import React, { Component } from 'react';
import {
    View
} from 'react-native';
/**
 * React native router flux 
 * Routing library
 */
import {
    Scene,
    Router,
    Reducer,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
    Actions
} from 'react-native-router-flux';

class Navigation extends Component {

    handleAndroidBack = () => {
        return true;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Router>
                    <Stack key="root" hideNavBar>
                        <Scene key='LOGIN' component={LoginScene} hideNavBar initial />
                        <Scene key='BOOK_SELF' component={BookSelfScene} navigationBarStyle={styles.NavbarStyle} title={'BookSelf'} back={true} titleStyle={styles.navBarTitle} />
                    </Stack>
                </Router>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    navBarTitle: {
        fontSize: normalize(20),
        fontWeight: '600',
        paddingBottom: (height > 1000) ? 25 : 0
    },
    // transparentNav: {
    //     backgroundColor: 'white',
    //     zIndex: 100,
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     borderBottomWidth: 1,
    //     elevation: 1,
    //     borderColor: '#e9e9e9',
    //     alignItems: 'center'
    // },
    NavbarStyle: {
        backgroundColor: 'white',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        borderBottomWidth: 1,
        elevation: 1,
        borderColor: '#e9e9e9'
    }
});
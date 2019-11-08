import React, { Component } from 'react';
import {
  View,
  StyleSheet

} from 'react-native';
/**
 * React native router flux 
 * Routing library
 */
import {
  Scene,
  Router,
  Stack,
} from 'react-native-router-flux';

import LoginScene from './BookWormApp/Scenes/Login-Scene/login.scene';
import BookShelfScene from './BookWormApp/Scenes/BookShelf-Scene/bookShelf.scene';
import BookDetailsScene from './BookWormApp/Scenes/BookDetails-Scene/bookDetails.scene';

export default class Navigation extends Component {

  handleAndroidBack = () => {
    return true;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router
          gesturesEnabled={false}
          backAndroidHandler={() => this.handleAndroidBack()}
        >
          <Stack key="root">
            <Scene key='LOGIN' component={LoginScene} hideNavBar initial />
            <Scene key='BOOK_SELF' component={BookShelfScene} navigationBarStyle={styles.NavbarStyle} title={'Bookshelf'} back={true} titleStyle={styles.navBarTitle} />
            <Scene key='BOOK_DETAILS' component={BookDetailsScene} title={'Book Details'} back={true} navigationBarStyle={styles.NavbarStyle} titleStyle={styles.navBarTitle} />
          </Stack>
        </Router>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  navBarTitle: {
    fontSize: 20,
    fontWeight: '600',
    color:'#fff'
  },
  NavbarStyle: {
    backgroundColor: '#344955',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    elevation: 1,
  }
});
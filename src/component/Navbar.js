import React, {PureComponent} from 'react';
import {
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlayButton from './PlayButton';
import PropTypes from 'prop-types';
import Colors from '../themes/Colors';

const propTypes = {
  main: PropTypes.bool,
};

class Navbar extends PureComponent {
  render() {
    const {navigation, main} = this.props;
    return (
      <SafeAreaView>
        {main ? (
          <View style={styles.mainNav}>
            <Image
              style={styles.logo}
              source={require('../assets/images/logo.png')}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Icon name={'search-outline'} size={30} color={Colors.white} />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name={'chevron-back'} size={40} color={Colors.lightGray} />
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

PlayButton.propTypes = {propTypes};
PlayButton.defaultProps = {
  main: false,
};

const styles = StyleSheet.create({
  logo: {
    width: 30,
    height: 30,
  },
  mainNav: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
  },
});
export default Navbar;

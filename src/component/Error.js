import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, View} from 'react-native';
import Colors from '../themes/Colors';

const propTypes = {
  errorText1: PropTypes.string,
  errorText2: PropTypes.string,
};

const errorImage = require('../assets/images/error.png');

class Error extends PureComponent {
  render() {
    const {errorText1, errorText2} = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={errorImage} />
        <Text style={styles.text}>{errorText1}</Text>
        <Text style={styles.text}>{errorText2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: Colors.black,
    width: 300,
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
});

Error.propTypes = {propTypes};
Error.defaultProps = {
  errorText1: 'Oops! Something went wrong.',
  errorText2: 'Please connect to the Internet and restart the application',
};

export default Error;

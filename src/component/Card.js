import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const placeholderImage = require('../assets/images/placeholder.png');

class Card extends PureComponent {
  render() {
    const {navigation, item} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {moveDetails: item})}
        style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholderImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  image: {
    height: 185,
    width: 105,
    borderRadius: 15,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    textAlign: 'center',
    top: 5,
  },
});

export default Card;

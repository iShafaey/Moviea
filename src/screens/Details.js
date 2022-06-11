import React, {Fragment, useEffect, useState} from 'react';

import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
} from 'react-native';
import StarRating from 'react-native-star-rating';

import {getMovie} from '../services/services';
import placeholderImage from '../assets/images/placeholder.png';
import dateFormat from 'dateformat';
import PlayButton from '../component/PlayButton';
import Colors from '../themes/Colors';

const dimentions = Dimensions.get('screen');

const Details = ({route, navigation}) => {
  const movieId = route.params.moveDetails.id;

  const [movieDetails, setMovieDetails] = useState();
  const [loaded, setLoaded] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetails(movieData);
      setLoaded(true);
    });
  }, [movieId]);

  function videoShown() {
    setModalVisible(!modalVisible);
  }
  return (
    <Fragment>
      {loaded && (
        <View>
          <ScrollView>
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={
                movieDetails.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' +
                        movieDetails.poster_path,
                    }
                  : placeholderImage
              }
            />
            <View style={styles.container}>
              <View style={styles.playButton}>
                <PlayButton
                  handlePress={() => {
                    videoShown();
                  }}
                />
              </View>
              <Text style={styles.movieTitle}>{movieDetails.title}</Text>
              {movieDetails.genres && (
                <View style={styles.genreContainer}>
                  {movieDetails.genres.map(genre => {
                    return (
                      <Text key={genre.id} style={styles.genre}>
                        {genre.name}
                      </Text>
                    );
                  })}
                </View>
              )}
              <StarRating
                starColor={'gold'}
                starSize={25}
                disabled={true}
                maxStars={5}
                rating={movieDetails.vote_average / 2}
              />
              <Text style={styles.overview}>{movieDetails.overview}</Text>
              <Text style={styles.releaseDate}>
                {'Release Date: ' +
                  dateFormat(movieDetails.release_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>
          <Modal
            visible={modalVisible}
            transparent={false}
            animationType={'slide'}>
            <View style={styles.videoModal}>
              <Pressable
                onPress={() => {
                  videoShown();
                }}>
                <Text>Hide</Text>
              </Pressable>
            </View>
          </Modal>
        </View>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.black,
  },
  videoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
  genreContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  genre: {
    marginRight: 10,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    height: dimentions.height / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: Colors.black,
  },
  overview: {
    padding: 15,
    color: Colors.black,
  },
  releaseDate: {
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default Details;

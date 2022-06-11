import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {searchMovieTv} from '../services/services';
import Card from '../component/Card';
import Error from '../component/Error';
import Colors from '../themes/Colors';
import Navbar from '../component/Navbar';

const Search = ({navigation}) => {
  const [text, onChangeText] = useState();
  const [searchResults, setSearchResults] = useState();
  const [error, setError] = useState(false);

  const onSubmit = query => {
    Promise.all([searchMovieTv(query, 'movie'), searchMovieTv(query, 'tv')])
      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <React.Fragment>
      <Navbar navigation={navigation} main={false} />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder={'Search Movie or TV Show'}
              onChangeText={onChangeText}
              value={text}
              placeholderTextColor={Colors.lightGray}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onSubmit(text);
            }}>
            <Icon name={'search-outline'} size={30} color={Colors.black} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchItems}>
          {/* Searched items results */}
          {searchResults && searchResults.length > 0 && (
            <FlatList
              numColumns={3}
              data={searchResults}
              renderItem={({item}) => (
                <Card navigation={navigation} item={item} />
              )}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          )}

          {/* When searched but no results */}
          {searchResults && searchResults.length === 0 && (
            <View style={styles.noResults}>
              <Text style={{color: Colors.black}}>
                No results matching your criteria.
              </Text>
              <Text style={{color: Colors.black}}>Try different keywords.</Text>
            </View>
          )}

          {/* When nothing is searched */}
          {!searchResults && (
            <View style={styles.empty}>
              <Text style={{color: Colors.black}}>
                Type something to start searching
              </Text>
            </View>
          )}

          {/* Error */}
          {error && <Error />}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    borderWidth: 1,
    height: 50,
    padding: 8,
  },
  container: {
    padding: 10,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: Colors.black,
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },

  searchItems: {
    padding: 5,
    alignItems: 'center',
  },

  noResults: {
    paddingTop: 20,
  },
});

export default Search;

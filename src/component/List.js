import React, {PureComponent} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Card from './Card';
import Colors from '../themes/Colors';

class List extends PureComponent {
  render() {
    const {navigation, title, content} = this.props;
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <Card navigation={navigation} item={item} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 6,
    paddingBottom: 5,
    color: Colors.black,
  },
  list: {
    marginTop: 25,
    marginLeft: 10,
  },
});

export default List;

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';

export default function AddScreen({navigation}) {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Add to Collection</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IoniconIcon name="close" size={22} color="#767575" />
        </TouchableOpacity>
      </View>
      <View style={styles.box1HeaderCont}>
        <Text style={styles.box1Header}>Create a new collection</Text>
      </View>
      <View style={styles.box2HeaderCont}>
        <Text style={styles.box2Subheader}>0 photos</Text>
        <View style={styles.box2Container}>
          <FontAwesomeIcon
            name="lock"
            size={15}
            color="#cacaca"
            style={{marginRight: 10}}
          />
          <Text style={styles.box2Header}>My first collection</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 18,
    color: '#767575',
  },
  box1HeaderCont: {
    borderWidth: 1,
    borderColor: '#cacaca',
    borderStyle: 'dashed',
    padding: 18,
    marginHorizontal: 10,
    borderRadius: 6,
    backgroundColor: '#e5e5e5',
  },
  box1Header: {
    fontSize: 18,
    color: '#767575',
  },
  box2HeaderCont: {
    backgroundColor: '#767575',
    borderColor: '#767575',
    padding: 18,
    marginHorizontal: 10,
    borderRadius: 6,
    marginVertical: 10,
  },
  box2Subheader: {
    fontSize: 12,
    color: '#cacaca',
  },
  box2Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2Header: {
    fontSize: 18,
    color: 'white',
  },
});

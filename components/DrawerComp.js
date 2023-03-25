import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Popover, {PopoverPlacement} from 'react-native-popover-view';
import IoniconIcon from 'react-native-vector-icons/dist/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/dist/FontAwesome';
import OctIcon from 'react-native-vector-icons/dist/Octicons';
import FontistoIcon from 'react-native-vector-icons/dist/Fontisto';

export default function DrawerComp() {
  return (
    <Popover
      popoverStyle={styles.popover}
      placement={PopoverPlacement.BOTTOM}
      from={
        <TouchableOpacity>
          <IoniconIcon name="menu" size={30} color="black" />
        </TouchableOpacity>
      }>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            name="building-o"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.title}>Company</Text>
        </View>
        <EntypoIcon
          name="chevron-down"
          size={20}
          color="#cacaca"
          style={styles.commonIcon}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <OctIcon name="stack" size={20} color="black" style={styles.icon} />
          <Text style={styles.title}>Product</Text>
        </View>
        <EntypoIcon
          name="chevron-down"
          size={20}
          color="#cacaca"
          style={styles.commonIcon}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontistoIcon
            name="persons"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.title}>Community</Text>
        </View>
        <EntypoIcon
          name="chevron-down"
          size={20}
          color="#cacaca"
          style={styles.commonIcon}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon
            name="file-text-o"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.title}>Legal</Text>
        </View>
        <EntypoIcon
          name="chevron-down"
          size={20}
          color="#cacaca"
          style={styles.commonIcon}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <IoniconIcon
            name="language"
            size={20}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.title}>English</Text>
        </View>
        <EntypoIcon
          name="chevron-down"
          size={20}
          color="#cacaca"
          style={styles.commonIcon}
        />
      </View>
      <View style={styles.borderLine} />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Submit a photo</Text>
      </TouchableOpacity>
    </Popover>
  );
}

const styles = StyleSheet.create({
  popover: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: 'black',
  },
  commonIcon: {
    padding: 20,
  },
  borderLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#cacaca',
    width: '100%',
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: '#cacaca',
    padding: 5,
    alignItems: 'center',
    width: '90%',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#7e7e7e',
  },
});

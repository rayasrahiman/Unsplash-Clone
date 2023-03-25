import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Popover, {PopoverPlacement} from 'react-native-popover-view';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default function DownloadComp({onPress}) {
  const [pressed, setPressed] = useState('');
  const [showPopover, setShowPopover] = useState(false);
  return (
    <Popover
      isVisible={showPopover}
      onRequestClose={() => (setShowPopover(false), setPressed(''))}
      popoverStyle={styles.popover}
      placement={PopoverPlacement.BOTTOM}
      from={
        <TouchableOpacity onPress={() => setShowPopover(true)}>
          <EntypoIcon name="chevron-down" size={20} color="black" />
        </TouchableOpacity>
      }>
      <TouchableOpacity
        onPress={() => (onPress('small'), setPressed('small'))}
        style={styles.container}>
        <Text style={{color: pressed === 'small' ? '#7e7e7e' : 'white'}}>
          Small
        </Text>
        <Text style={styles.resolution}> (640 x 426)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => (onPress('regular'), setPressed('regular'))}
        style={styles.container}>
        <Text style={{color: pressed === 'regular' ? '#7e7e7e' : 'white'}}>
          Medium
        </Text>
        <Text style={styles.resolution}> (1920 x 1280)</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => (onPress('full'), setPressed('full'))}
        style={styles.container}>
        <Text style={{color: pressed === 'full' ? '#7e7e7e' : 'white'}}>
          Large
        </Text>
        <Text style={styles.resolution}> (2400 x 1600)</Text>
      </TouchableOpacity>
      <View style={styles.borderLine} />
      <TouchableOpacity
        onPress={() => (onPress('raw'), setPressed('raw'))}
        style={styles.originalCont}>
        <Text style={{color: pressed === 'raw' ? '#7e7e7e' : 'white'}}>
          Original Size
        </Text>
        <Text style={styles.resolution}> (6000 x 4000)</Text>
      </TouchableOpacity>
    </Popover>
  );
}

const styles = StyleSheet.create({
  popover: {
    backgroundColor: 'black',
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  resolution: {
    color: '#7e7e7e',
  },
  originalCont: {
    flexDirection: 'row',
    padding: 10,
  },
  borderLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#7e7e7e',
    width: '100%',
  },
});

import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import OctIcon from 'react-native-vector-icons/Octicons';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import DownloadComp from './DownloadComp';
import {useNavigation} from '@react-navigation/native';

export default function CardComp({data, downloadImg}) {
  const [like, setLike] = useState([]);
  const navigation = useNavigation();

  const likeFunc = id => {
    let arr = [...like];
    if (arr.includes(id)) {
      let index = arr.findIndex(item => item === id);
      arr.splice(index, 1);
      setLike(arr);
    } else {
      arr.push(id);
      setLike(arr);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        data={data}
        keyExtractor={({item, index}) => index}
        renderItem={({item}) => (
          <View>
            <View style={styles.nameContainer}>
              <View style={styles.nameImgCont}>
                <Image
                  source={{uri: item.user.profile_image.small}}
                  style={styles.profileImg}
                />
              </View>
              <View>
                <Text>{item.user.name}</Text>
              </View>
            </View>
            <Image source={{uri: item.urls.small}} style={styles.image} />
            <View style={styles.bottomContainer}>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => likeFunc(item.user.id)}
                  style={[
                    styles.likeContainer,
                    {
                      backgroundColor: like.includes(item.user.id)
                        ? '#f15151'
                        : 'white',
                    },
                  ]}>
                  {like.includes(item.user.id) ? (
                    <OctIcon name="heart-fill" size={18} color="white" />
                  ) : (
                    <OctIcon name="heart-fill" size={18} color="#767575" />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Add')}
                  style={styles.addContainer}>
                  <IoniconIcon name="ios-add" size={20} color="#767575" />
                </TouchableOpacity>
              </View>
              <View style={styles.downloadContainer}>
                <TouchableOpacity
                  onPress={() => downloadImg(item.urls['regular'])}
                  style={styles.downloadButton}>
                  <Text>Download</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropDownButton}>
                  <DownloadComp
                    onPress={value => downloadImg(item.urls[value])}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  image: {
    height: 200,
    width: Dimensions.get('window').width,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  nameImgCont: {
    marginHorizontal: 10,
  },
  profileImg: {
    height: 30,
    width: 30,
    borderRadius: 25,
  },
  likeContainer: {
    borderWidth: 1,
    borderColor: '#767575',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addContainer: {
    borderWidth: 1,
    borderColor: '#767575',
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadContainer: {
    marginTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#767575',
    borderRadius: 3,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 125,
  },
  downloadButton: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: '#767575',
    borderRadius: 3,
    paddingRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  dropDownButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
  },
});

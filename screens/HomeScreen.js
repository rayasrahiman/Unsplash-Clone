import React, {useState, useEffect} from 'react';
import {View, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
import SearchBar from 'react-native-platform-searchbar';
import IoniconsIcon from 'react-native-vector-icons/dist/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';

import {getPhotos, searchPhotos} from '../redux/fetchPhotos';
import CardComp from '../components/CardComp';
import DrawerComp from '../components/DrawerComp';
import ScrollMenuComp from '../components/ScrollMenuComp';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.fetchPhotos.photosArr);
  const [val, setVal] = useState('');

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  const checkPermission = async images => {
    if (Platform.OS === 'ios') {
      downloadImage(images);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage Permission Granted.');
          downloadImage(images);
        } else {
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  const downloadImage = images => {
    let date = new Date();
    let image_URL = images;
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };

  const searchImages = () => {
    dispatch(searchPhotos(val));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <View>
            <IoniconsIcon name="square" size={24} color={'black'} />
          </View>
          <SearchBar
            placeholder="Search images"
            value={val}
            onChangeText={setVal}
            onSubmitEditing={searchImages}
            inputStyle={{borderRadius: 25, width: '75%'}}
            style={styles.searchBar}
          />
        </View>
        <View>
          <DrawerComp />
        </View>
      </View>
      <View>
        <ScrollMenuComp />
      </View>
      <CardComp data={photos} downloadImg={item => checkPermission(item)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchBar: {
    width: '82%',
    height: 40,
  },
});

import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { getRandomPhoto } from '../api/unsplash';
import { useDimension } from '../helper/dimensionHook';

const Explore = () => {
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { window } = useDimension()

  const loadRandomPhotos = () => {
    if (!isLoading) {
      console.log('Request get Photo');
      setIsLoading(true)
      getRandomPhoto(15)
        .then((res) => {
          console.log('Got response for get photo');
          setPhotos([...photos, ...res.data])
        })
        .catch((err) => {
          console.log(err.message);
        })
        .then(() => {
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    loadRandomPhotos()
  }, [])

  return (
    <View>
      <FlatList
        refreshing={ isLoading }
        onRefresh={ loadRandomPhotos }
        numColumns={ 3 }
        data={ photos.sort((a, b) => moment(b.created_at) - moment(a.created_at)) }
        renderItem={ ({ item }) => {
          return <Image 
            style={{ 
              width: window.width / 3,
              height: window.width / 3,
              margin: 1,
            }} 
            source={{ uri: item.urls.thumb }} />
        }}
        keyExtractor={(item) => item.id } />
    </View>
  );
}
 
export default Explore;

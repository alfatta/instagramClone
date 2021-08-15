import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getRandomPhoto, searchPhoto } from '../api/unsplash';
import { useDimension } from '../helper/dimensionHook';
import Ionicons from 'react-native-vector-icons/Ionicons'
import _ from 'lodash'

const Explore = () => {
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState('')

  const { window } = useDimension()

  const loadRandomPhotos = () => {
    if (!isLoading) {
      console.log('Request get random Photo');
      setIsLoading(true)
      getRandomPhoto(15)
        .then((res) => {
          console.log('Got response for get random photo');
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

  const onQueryChange = (val) => {
    setQuery(val)
    debounce(val)
  }

  const debounce = useCallback(
    _.debounce((_searchVal) => {
      doSearchImage(_searchVal);
    }, 1000),
    []
  )

  const doSearchImage = (searchQuery) => {
    if (!isLoading && searchQuery) {
      console.log('Request get Photo for query : ' + searchQuery);
      setIsLoading(true)
      searchPhoto(searchQuery)
        .then((res) => {
          console.log('Got response for get photo for query : ' + searchQuery);
          setPhotos(res.data.results)
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
      <View style={{
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center'
      }}>
        <Ionicons name="search" size={ 20 }
          style={{
            marginRight: 10
          }} />
        <TextInput onChangeText={ onQueryChange } value={ query }
          style={{
            flex: 1
          }} />
      </View>
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

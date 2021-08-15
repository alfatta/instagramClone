import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import moment from 'moment';

import PostItem from '../components/PostItem';

import StoryList from './StoryList';
import { getPhoto } from '../api/unsplash';

const PostList = () => {
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const loadPhoto = () => {
    if (!isLoading) {
      console.log('Request get Photo');
      setIsLoading(true)
      getPhoto(page)
        .then((res) => {
          console.log('Got response for get photo');
          setPhotos([...photos, ...res.data])
          setPage(page + 1)
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
    loadPhoto()
  }, [])

  return (
    <FlatList
      style={{ marginBottom: 60 }}
      ListHeaderComponent={ StoryList }
      ListHeaderComponentStyle={{ paddingVertical: 10 }}
      ListFooterComponent={ () => {
        return isLoading ? <ActivityIndicator color="black" size="large" /> : null
      }}
      data={ photos.sort((a, b) => moment(b.created_at) - moment(a.created_at)) }
      renderItem={ ({ item }) => {
        return <PostItem post={ item } />
      }}
      keyExtractor={(item) => item.id }
      onEndReached={ loadPhoto } />
  );
}

export default PostList;

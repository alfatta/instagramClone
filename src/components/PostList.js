import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import moment from 'moment';

import PostItem from '../components/PostItem';

import StoryList from './StoryList';
import { getPhoto } from '../api/unsplash';

const PostList = () => {
  const [photos, setPhotos] = useState([])

  const loadPhoto = () => {
    console.log('Request get Photo');
    getPhoto()
      .then((res) => {
        console.log('Got response for get photo');
        setPhotos(res.data)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  useEffect(() => {
    loadPhoto()
  }, [])

  return (
    <FlatList
      ListHeaderComponent={ StoryList }
      ListHeaderComponentStyle={{ paddingVertical: 10 }}
      data={ photos.sort((a, b) => moment(b.created_at) - moment(a.created_at)) }
      renderItem={ ({ item }) => {
        return <PostItem post={ item } />
      }}
      keyExtractor={(item) => item.id } />
  );
}

export default PostList;

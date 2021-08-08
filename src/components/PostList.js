import React from 'react';
import { FlatList } from 'react-native';
import moment from 'moment';

import PostItem from '../components/PostItem';

import postData from '../data/images.json';

const PostList = () => {
  return (
    <FlatList 
      data={ postData.sort((a, b) => moment(b.created_at) - moment(a.created_at)) }
      renderItem={ ({ item }) => {
        return <PostItem post={ item } />
      }}
      keyExtractor={(item) => item.id } />
  );
}

export default PostList;

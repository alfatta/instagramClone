import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import postData from '../data/images.json';
import StoryItem from './StoryItem';

const user = postData.reduce((allUser, currentPost) => {
  const currentUserId = currentPost.user.id
  const indexUser = allUser.findIndex((user) => user.id == currentUserId)
  if (indexUser < 0) {
    allUser.push(currentPost.user)
  }
  return allUser
}, [])

const StoryList = () => {
  return (
    <FlatList
      horizontal
      data={ user }
      renderItem={ ({ item }) => <StoryItem user={ item } /> }
      keyExtractor={ (item) => item.id } />
  );
}

export default StoryList;

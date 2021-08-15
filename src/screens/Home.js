import React from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <View>
      <Header />
      <PostList />
    </View>
  );
}
 
export default Home;

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

import { useDimension } from '../helper/dimensionHook';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    paddingBottom: 10
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover'
  },
  profileUsername: {
    fontWeight: 'bold',
    flex: 1,
    marginHorizontal: 16
  },
  image: {},
  actionContainer: {
    flexDirection: 'row',
    padding: 10
  },
  descriptionContainer: {
    padding: 10
  },
})

const PostItem = ({ post }) => {
  const { window } = useDimension()

  const [height, setHeight] = useState(0)

  useEffect(() => {
    Image.getSize(post.urls.regular, (width, height) => {
      setHeight(height * window.width / width)
    });
  }, [])

  if (!height) return null

  return (
    <View style={{ ...styles.mainContainer }}>
      <View style={{ ...styles.headerContainer }}>
        <Image
          style={{ ...styles.profilePic }}
          source={{ uri: post.user.profile_image.small }} />
        <Text style={{ ...styles.profileUsername }}>
          { post.user.username }
        </Text>
        <Ionicons name="ellipsis-horizontal" size={ 20 } />
      </View>
      <Image 
        style={{ ...styles.image, width: window.width, height }}
        source={{ uri: post.urls.regular }} />
      <View style={{ ...styles.actionContainer }}>
        { post.liked_by_user ?
          <Ionicons name="heart" color="#ed4956" size={ 28 } style={{ marginRight: 10 }} /> :
          <Ionicons name="heart-outline" size={ 28 } style={{ marginRight: 10 }} />
        }
        <Ionicons name="chatbubble-outline" size={ 28 } style={{ marginRight: 10 }} />
        <Ionicons name="paper-plane-outline" size={ 28 } />
        <View style={{ flex: 1 }}/>
        <Ionicons name="bookmark-outline" size={ 28 } />
      </View>
      <View style={{ ...styles.descriptionContainer }}>
        <Text style={{ fontWeight: 'bold' }}>
          { post.likes } Likes
        </Text>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>
            { post.user.username }
          </Text>
          <Text>
            { ' ' + post.alt_description }
          </Text>
        </Text>
        <Text>
          { moment(post.created_at).fromNow() }
        </Text>
      </View>
    </View>
  );
}
 
export default PostItem;

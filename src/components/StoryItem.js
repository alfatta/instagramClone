import React from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const StoryItem = ({ user }) => {
  return (
    <View style={{ marginHorizontal: 10, width: 64, justifyContent: 'center' }}>
      <LinearGradient
        useAngle={true} angle={45} angleCenter={{x:0.5,y:0.5}}
        colors={['#F58529', '#FEDA77', '#DD2A7B', '#8134AF', '#515BD4']}
        style={{ padding: 2, borderRadius: 32 }} >
        <Image
          source={{ uri: user.profile_image.medium }}
          style={{ width: 60, height: 60, borderRadius: 30 }} />
      </LinearGradient>
      
      <Text numberOfLines={ 1 } style={{ fontSize: 12, marginTop: 4 }}>
        { user.username }
      </Text>
    </View>
  );
}
 
export default StoryItem;

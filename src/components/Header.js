import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import logo from '../assets/images/logo.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomColor: '#bbbbbb',
    borderWidth: StyleSheet.hairlineWidth
  },
  logo: {
    height: 40,
    width: 200,
    resizeMode: 'contain'
  }
})

const Header = () => {
  const navigation = useNavigation()
  return (
    <View style={{ ...styles.container }}>
      <TouchableOpacity onPress={ () => navigation.navigate('Camera') }>
        <Ionicons name="camera-outline" size={ 25 } />
      </TouchableOpacity>
      <Image
        source={ logo }
        style={{ ...styles.logo }} />
      <Ionicons name="paper-plane-outline" size={ 25 } />
    </View>
  );
}
 
export default Header;

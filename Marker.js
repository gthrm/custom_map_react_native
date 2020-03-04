import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Marker(props) {
  const {
    name,
    x,
    y
  } = props;
  return (
    <View
      style={{
        position: 'absolute',
        bottom: y,
        left: x,
        width: 50,
        height: 50,
        backgroundColor: 'rgba(242,188,44, 0.9)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {/* <Text
                style={{ color: '#fafafa', fontSize: 25, fontWeight: '800' }}
            >
                {name}
            </Text> */}
      <MaterialCommunityIcons name={name} size={32} color="green" />

    </View>
  );
}

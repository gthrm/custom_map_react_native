import React from 'react';
import { Dimensions, View, ImageBackground } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Marker from './Marker';

export default function App() {
  const map = {
    uri: 'https://25mbcloud.ml/upload/d147e22610d43a50cc5056fbf44f11001583323672896.jpeg',
    width: 1534,
    height: 807
  };

  const markers = [
    {
      id: '001',
      name: 'food',
      x: 11,
      y: 14
    }
  ];
  return (
    <ImageZoom
      cropWidth={Dimensions.get('window').width}
      cropHeight={Dimensions.get('window').height}
      imageWidth={map.width}
      imageHeight={map.height}
      enableCenterFocus={false}
    >
      <View
        style={{ width: map.width, height: map.height }}
      >
        <ImageBackground source={{ uri: map.uri }} style={{ width: map.width, height: map.height }}>
          {markers.map((item) => <Marker x={map.width * (item.x / 100)} y={map.height * (item.y / 100)} key={item.id} name={item.name} />)}
        </ImageBackground>
      </View>
    </ImageZoom>
  );
}

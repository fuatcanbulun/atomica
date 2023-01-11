import React from 'react';
import {View, ImageBackground} from 'react-native';
import Style from './style';

const AtmImage = ({
  withBorder,
  children,
  size,
  radius,
  topLeftRadius,
  topRightRadius,
  bottomLeftRadius,
  bottomRightRadius,
  data,
  resizeMode,
  flex,
  flexDirection,
  bgColor,
}) => {
  const styles = [
    Style.basic,
    Style[size],
    radius && {borderRadius: radius},
    flex && {flex: flex},
    bgColor && {
      backgroundColor:
        bgColor == 'theme'
          ? Style.themeColor.color
          : bgColor == 'secondary'
          ? Style.secondaryColor.color
          : bgColor == 'tertiary'
          ? Style.tertiaryColor.color
          : bgColor == 'neutral',
    },
    flexDirection && {flexDirection: flexDirection},
    withBorder && {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: Style.secondaryColor.color,
    },
  ];
  let image;
  if (data === 'image1') {
    image = require('../../../assets/images/image1.jpg');
  }
  if (data === 'image2') {
    image = require('../../../assets/images/image2.jpeg');
  }
  if (data === 'image3') {
    image = require('../../../assets/images/image3.jpeg');
  }
  if (data === 'image4') {
    image = require('../../../assets/images/image4.jpeg');
  }
  if (data === 'image5') {
    image = require('../../../assets/images/image5.jpeg');
  }
  if (data === 'image6') {
    image = require('../../../assets/images/image6.jpeg');
  }
  if (data === 'background01') {
    image = require('../../../assets/images/background01.png');
  }
  if (data === 'background02') {
    image = require('../../../assets/images/background02.png');
  }
  if (data === 'background03') {
    image = require('../../../assets/images/background03.png');
  }
  if (data === 'login') {
    image = require('../../../assets/images/login.png');
  }
  if (data === 'rock01') {
    image = require('../../../assets/images/rock01.png');
  }
  if (data === 'rock02') {
    image = require('../../../assets/images/rock02.png');
  }
  if (data === 'rock03') {
    image = require('../../../assets/images/rock03.png');
  }
  if (data === 'rock04') {
    image = require('../../../assets/images/rock04.png');
  }
  if (data === 'jazz01') {
    image = require('../../../assets/images/jazz01.png');
  }
  if (data === 'jazz02') {
    image = require('../../../assets/images/jazz02.png');
  }
  if (data === 'jazz03') {
    image = require('../../../assets/images/jazz03.png');
  }
  if (data === 'jazz04') {
    image = require('../../../assets/images/jazz04.png');
  }
  if (data === 'techno01') {
    image = require('../../../assets/images/techno01.png');
  }
  if (data === 'techno02') {
    image = require('../../../assets/images/techno02.png');
  }
  if (data === 'techno03') {
    image = require('../../../assets/images/techno03.png');
  }
  if (data === 'techno04') {
    image = require('../../../assets/images/techno04.png');
  }
  if (data === 'portrait01') {
    image = require('../../../assets/images/portrait01.png');
  }
  if (data === 'portrait02') {
    image = require('../../../assets/images/portrait02.png');
  }
  if (data === 'portrait03') {
    image = require('../../../assets/images/portrait03.png');
  }
  if (data === 'portrait04') {
    image = require('../../../assets/images/portrait04.png');
  }
  if (data === 'portrait05') {
    image = require('../../../assets/images/portrait05.png');
  }
  if (data === 'portrait06') {
    image = require('../../../assets/images/portrait06.png');
  }
  if (data === 'song01') {
    image = require('../../../assets/images/song01.png');
  }
  if (data === 'song02') {
    image = require('../../../assets/images/song02.png');
  }
  if (data === 'song03') {
    image = require('../../../assets/images/song03.png');
  }
  if (data === 'song04') {
    image = require('../../../assets/images/song04.png');
  }
  if (data === 'image01') {
    image = require('../../../assets/images/image01.png');
  }
  if (data === 'image02') {
    image = require('../../../assets/images/image02.png');
  }
  if (data === 'image03') {
    image = require('../../../assets/images/image03.png');
  }
  if (data === 'facebook') {
    image = require('../../../assets/images/facebook.png');
  }
  if (data === 'google') {
    image = require('../../../assets/images/google.png');
  }

  return (
    <View style={styles}>
      <ImageBackground
        source={image}
        resizeMode={resizeMode ? resizeMode : 'cover'}
        style={{width: '100%', height: '100%', flexDirection: 'column'}}
        imageStyle={{
          borderRadius: radius,
          borderTopLeftRadius: topLeftRadius,
          borderTopRightRadius: topRightRadius,
          borderBottomLeftRadius: bottomLeftRadius,
          borderBottomRightRadius: bottomRightRadius,
        }}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default AtmImage;

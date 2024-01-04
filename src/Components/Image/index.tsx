import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Images} from 'src/Themes';

export declare type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center';

export interface CustomImageProps {
  name: keyof typeof Images;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ResizeMode;
  uri?: string;
  requireFastImage?: boolean;
}

const CustomImage = ({
  style,
  name,
  resizeMode = 'contain',
  uri,
  requireFastImage = false,
}: CustomImageProps) => {
  if (requireFastImage) {
    let tintColor = null;
    if (style?.tintColor) {
      tintColor = style.tintColor;
    }
    if (uri) {
      return (
        <FastImage
          style={style}
          source={{uri: uri}}
          resizeMode={resizeMode}
          tintColor={tintColor}
        />
      );
    }
    return (
      <FastImage
        style={style}
        source={Images[name]}
        resizeMode={resizeMode}
        tintColor={tintColor}
      />
    );
  } else {
    if (uri) {
      return (
        <Image style={style} source={{uri: uri}} resizeMode={resizeMode} />
      );
    }
    return (
      <Image style={style} source={Images[name]} resizeMode={resizeMode} />
    );
  }
};

export default CustomImage;

import {View} from 'react-native';
import React from 'react';
import {responsiveHeight, responsiveWidth} from 'src/Themes';

export interface SpaceProps {
  width?: number;
  height?: number;
}
export const Space = ({width, height}: SpaceProps) => {
  if (!width && !height) {
    return null;
  }
  const scaleWidth = responsiveWidth(width ?? 0);
  const scaleHeight = responsiveHeight(height ?? 0);

  return (
    <View
      style={{
        width: scaleWidth,
        height: scaleHeight,
      }}
    />
  );
};

import React from 'react';

import { ImageElementSettings } from './ImageElementSettings';

import { Resizer } from '../Resizer';

export type ImageElementProps = {
  background: Record<'r' | 'g' | 'b' | 'a', number>;
  color: Record<'r' | 'g' | 'b' | 'a', number>;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  fillSpace: string;
  width: string;
  height: string;
  padding: string[];
  margin: string[];
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  marginRight: number;
  shadow: number;
  radius: number;
  imageUrl?: string;
};

const defaultProps = {
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 0 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: '100%',
  height: 'auto',
  imageUrl: ''
};

export const ImageElement = (props: Partial<ImageElementProps>) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    flexDirection,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    imageUrl
  } = props;
  return (
    <Resizer
      propKey={{ width: 'width', height: 'height' }}
      style={{
        justifyContent,
        flexDirection,
        alignItems,
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        boxShadow:
          shadow === 0
            ? 'none'
            : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
        flex: fillSpace === 'yes' ? 1 : 'unset',
        borderRadius: `${radius}px`,
      }}
    >
      {imageUrl ? (<img alt="img" style={{
        width: "100%", height: "100%",
        borderRadius: `${radius}px`,
      }} src={imageUrl}/>) : null}
    </Resizer>
  );
};

ImageElement.craft = {
  displayName: 'Image',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ImageElementSettings,
  },
};

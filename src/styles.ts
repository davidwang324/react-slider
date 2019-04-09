import deepmerge from 'deepmerge';

import { RangeSliderStyles, RangeSliderStylesProp, RangeSliderStylesOptions } from './types';

const defaultOptions = {
  handleBorder: '2px solid #000',
  handleBorderRadius: '4px',
  handleBorderRadiusXY: '50%',
  handleColor: '#fff',
  handleSize: '10px',
  handleSizeXY: '20px',
  handleSpace: '6px',
  height: '20px',
  padding: '6px',
  rangeColor: '#007bff',
  trackBorderRadius: '3px',
  trackColor: '#ccc',
  width: '20px',
};

function num(value: string | number): number {
  if (typeof value === 'number') {
    return value;
  }

  return parseInt(value, 10);
}

export default function getStyles(styles?: RangeSliderStylesProp): RangeSliderStyles {
  const options: RangeSliderStylesOptions = deepmerge(
    defaultOptions,
    styles ? (styles.options as RangeSliderStylesOptions) : {},
  );

  const slider = {
    boxSizing: 'border-box',
    display: 'inline-block',
    padding: options.padding,
  };

  const track = {
    backgroundColor: options.trackColor,
    borderRadius: options.trackBorderRadius,
    boxSizing: 'border-box',
    height: '100%',
    position: 'relative',
    width: '100%',
  };

  const range = {
    backgroundColor: options.rangeColor,
    borderRadius: options.trackBorderRadius,
    position: 'absolute',
  };

  const handleWrapper = {
    boxSizing: 'border-box',
    height: options.height,
    position: 'absolute',
    width: options.width,
  };

  const handle = {
    backgroundColor: options.handleColor,
    border: options.handleBorder,
    borderRadius: options.handleBorderRadius,
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
  };

  const defaultStyles = {
    handleWrapper,
    handleX: {
      ...handle,
      height: num(options.height) + num(options.handleSpace),
      left: -(num(options.handleSize) / 2),
      top: -(num(options.handleSpace) / 2),
      width: options.handleSize,
    },
    handleXY: {
      ...handle,
      backgroundColor: 'transparent',
      border: options.handleBorder,
      borderRadius: options.handleBorderRadiusXY,
      bottom: -(num(options.handleSizeXY) / 2),
      height: options.handleSizeXY,
      left: -(num(options.handleSizeXY) / 2),
      position: 'absolute',
      width: options.handleSizeXY,
    },
    handleY: {
      ...handle,
      bottom: -(num(options.handleSize) / 2),
      height: options.handleSize,
      left: -(num(options.handleSpace) / 2),
      width: num(options.width) + num(options.handleSpace),
    },
    rangeX: {
      ...range,
      height: '100%',
      top: 0,
    },
    rangeXY: {
      ...range,
      bottom: 0,
    },
    rangeY: {
      ...range,
      bottom: 0,
      left: 0,
      width: '100%',
    },
    sliderX: {
      ...slider,
      height: num(options.height) + num(options.padding) * 2,
      width: '100%',
    },
    sliderXY: {
      ...slider,
      height: '100%',
      width: '100%',
    },
    sliderY: {
      ...slider,
      height: '100%',
      width: num(options.width) + num(options.padding) * 2,
    },
    trackX: {
      ...track,
      height: options.height,
    },
    trackXY: {
      ...track,
      height: '100%',
      minHeight: '50px',
      width: '100%',
    },
    trackY: {
      ...track,
      height: '100%',
      minHeight: '50px',
      width: options.width,
    },
  };

  return deepmerge(defaultStyles, styles || {}) as RangeSliderStyles;
}

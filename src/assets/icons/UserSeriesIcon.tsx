import * as React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';

export const UserSeriesIcon = () => (
  <Svg width={20} height={20} fill="none">
    <G opacity={0.5} stroke="#000" strokeWidth={1.8}>
      <Rect x={1.9} y={3.9} width={16.2} height={15.2} rx={4.1} />
      <Path
        d="m7.55 1 2.5 2 2.5-2M5 12l5-2v3l5-2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

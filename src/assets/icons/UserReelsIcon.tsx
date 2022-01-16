import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export const UserReelsIcon = () => (
  <Svg width={22} height={22} fill="none">
    <G opacity={0.5} fill="#000">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.238 1.714H4.762a3.048 3.048 0 0 0-3.048 3.048v10.476a3.048 3.048 0 0 0 3.048 3.048h10.476a3.048 3.048 0 0 0 3.048-3.048V4.762a3.048 3.048 0 0 0-3.048-3.048ZM4.762 0A4.762 4.762 0 0 0 0 4.762v10.476A4.762 4.762 0 0 0 4.762 20h10.476A4.762 4.762 0 0 0 20 15.238V4.762A4.762 4.762 0 0 0 15.238 0H4.762Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.048 6.667H.952V4.952h18.096v1.715Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.619 5.714 3.809.952 5.31.12l3.809 4.762-1.499.832ZM13.81 5.714 10 .952 11.499.12l3.81 4.762-1.5.832Z"
      />
      <Path d="M13.095 11.492a.476.476 0 0 1 0 .825l-5 2.887a.476.476 0 0 1-.714-.413V9.018c0-.367.397-.596.714-.412l5 2.886Z" />
    </G>
  </Svg>
);
